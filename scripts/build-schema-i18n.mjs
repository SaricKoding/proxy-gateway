/**
 * Poravnava JSON-LD s jezikom stranice.
 *
 * Dva su problema koja ovaj korak rjesava:
 *
 * 1. `/en/` je servirao HRVATSKI JSON-LD. `build-en-index.mjs` prepisuje samo
 *    meta tagove, a blokove sheme kopira doslovno s hrvatske naslovnice. Tako
 *    je engleska stranica Googleu tvrdila da su joj sva FAQ pitanja, opis
 *    tvrtke i opis usluge na hrvatskom, dok je vidljivi tekst engleski.
 *
 * 2. FAQ schema i vidljivi FAQ razisli su se. U `index.html` je pisalo
 *    "U koje vrijeme isporucujete robu u Hrvatskoj?", a React je iz
 *    `src/i18n/index.js` crtao "U kojem roku...". Schema koja ne odgovara
 *    vidljivom sadrzaju je razlog za gubitak rich resulta.
 *
 * Rjesenje za oboje je isto: FAQPage se vise ne prepisuje rucno nego se
 * GENERIRA iz `src/i18n/index.js`, iz istog izvora iz kojeg React crta
 * pitanja. Hrvatska naslovnica dobiva `hr.faq.items`, engleska `en.faq.items`.
 * Razilazenje vise nije moguce.
 *
 * Ostali blokovi (Organization, Service, ItemList, BreadcrumbList) nemaju
 * pandan u i18n-u, pa se za njih koristi izricita tablica prijevoda nize.
 * Ako se hrvatski tekst u `index.html` promijeni a ovdje ne, skripta to
 * prijavi i padne, umjesto da tiho ostavi hrvatski na engleskoj stranici.
 *
 * Pokrece se iz `npm run build`, nakon `build-en-index.mjs`.
 */

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { messages as i18n } from '../src/i18n/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')


/** Hrvatski tekst u JSON-LD-u -> engleski. Vrijedi samo za /en/. */
const EN = {
  // Organization / LocalBusiness
  'Trgovina na veliko i malo asortimanom za domaćinstvo i ugostiteljstvo. Izrada personaliziranih otirača s logotipima tvrtki za hotele, restorane i poslovne prostore. Sjedište u Splitu.':
    'Wholesale and retail supplier of household and hospitality goods. Custom doormats printed with company logos for hotels, restaurants and offices. Based in Split, Croatia.',
  'Sve što dom treba': 'Everything your home needs',
  'Splitsko-dalmatinska županija': 'Split-Dalmatia County',

  // knowsAbout
  'personalizirani otirači': 'custom doormats',
  'izrada otirača s logotipom': 'logo doormat production',
  'otirači po narudžbi': 'made-to-order doormats',
  'veleprodaja kućanskih potrepština': 'wholesale household goods',
  'veleprodaja sredstava za čišćenje': 'wholesale cleaning supplies',
  'veleprodaja za ugostiteljstvo': 'wholesale hospitality supplies',
  'inox galanterija': 'stainless steel kitchenware',
  'drvena galanterija': 'wooden kitchenware',
  'posuđe': 'cookware',
  'tekstil za domaćinstvo': 'household textiles',
  'spremanje ormara': 'wardrobe storage',

  // Service
  'Izrada personaliziranih otirača s logotipom': 'Custom logo doormat production',
  'Personalizirani otirači po narudžbi': 'Made-to-order custom doormats',
  'Izrada otirača s logotipom i natpisom': 'Production of doormats with logos and lettering',
  'Personalizirani otirači': 'Custom doormats',
  'Izrada otirača po narudžbi s logotipom tvrtke ili natpisom za hotele, restorane, ugostiteljske objekte i poslovne prostore. Različite veličine i gustoće vlakana, dugotrajna kvaliteta i reprezentativan izgled.':
    'Made-to-order doormats printed with a company logo or lettering, for hotels, restaurants, hospitality venues and offices. A range of sizes and fibre densities, built to last and to look the part.',

  // ItemList
  'Kanali prodaje Proxy d.o.o.': 'Proxy d.o.o. sales channels',
  'Proxy Veleprodaja': 'Proxy Wholesale',
  'Proxy Maloprodaja': 'Proxy Retail',
}

/**
 * Ne prevodi se: vlastita imena i adresa. Ulica i mjesto ostaju hrvatski i na
 * engleskoj stranici, jer se posta ne dostavlja na prijevod.
 */
const VLASTITA_IMENA = ['Solinska 49, Dujmovača', 'Robert Raič', 'Dujmovača']

/** Duzi tekstovi prvi, da zamjena kraceg ne razbije duzi koji ga sadrzi. */
const EN_PAROVI = Object.entries(EN).sort((a, b) => b[0].length - a[0].length)

/** FAQPage blok iz i18n items. */
function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

const LD = /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g

/**
 * @param {string} file  putanja do HTML-a u dist/
 * @param {'hr'|'en'} jezik
 */
async function obradi(file, jezik) {
  let html = await fs.readFile(file, 'utf8')
  const faq = JSON.stringify(faqSchema(i18n[jezik].faq.items), null, 2)

  let faqZamijenjen = false
  let blokova = 0

  html = html.replace(LD, (cijeli, tijelo) => {
    blokova++
    let data
    try {
      data = JSON.parse(tijelo)
    } catch {
      // Neispravan JSON ne diramo; prijavljujemo ga na kraju.
      console.warn(`    upozorenje: blok ${blokova} nije valjan JSON, preskacem`)
      return cijeli
    }

    if (data['@type'] === 'FAQPage') {
      faqZamijenjen = true
      return `<script type="application/ld+json">\n${faq}\n    </script>`
    }

    if (jezik === 'en') {
      let t = JSON.stringify(data, null, 2)
      for (const [hr, en] of EN_PAROVI) t = t.split(hr).join(en)
      return `<script type="application/ld+json">\n${t}\n    </script>`
    }

    return cijeli
  })

  if (!faqZamijenjen) {
    throw new Error(`${file}: nije nadjen FAQPage blok — je li se schema u index.html promijenila?`)
  }

  if (jezik === 'en') {
    // Zaostali hrvatski u shemi znaci da je netko dodao tekst a nije dopunio
    // tablicu iznad. Bolje pasti nego tiho servirati hrvatski Googleu.
    let provjera = (html.match(LD) || []).join('\n')
    for (const dozvoljeno of VLASTITA_IMENA) provjera = provjera.split(dozvoljeno).join('')

    const zaostalo = provjera.match(/[^"\n]*[čćžšđČĆŽŠĐ][^"\n]*/g)
    if (zaostalo && zaostalo.length) {
      throw new Error(
        `${file}: hrvatski tekst zaostao u JSON-LD-u (${zaostalo.length}):\n` +
          zaostalo.map((z) => `    ${z.trim()}`).join('\n') +
          `\n  Dopuni tablicu EN u scripts/build-schema-i18n.mjs, ili dodaj u VLASTITA_IMENA ako se ne prevodi.`
      )
    }
  }

  await fs.writeFile(file, html)
  console.log(`OK  ${path.relative(DIST, file)}  (${blokova} JSON-LD blokova, FAQ iz i18n.${jezik})`)
}

await obradi(path.join(DIST, 'index.html'), 'hr')
await obradi(path.join(DIST, 'en', 'index.html'), 'en')
