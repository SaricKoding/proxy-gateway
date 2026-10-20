/**
 * Gradnja cijelog proxy1.hr kao staticke stranice (15.10.2026.).
 *
 * 1. Cisti dist/ i kopira public/.
 * 2. Naslovnica HR (/) i EN (/en/).
 * 3. Javni katalog iz izvoza veleprodaje (katalog-izvor/katalog.json):
 *    /katalog/, /katalog/<skupina>/, /katalog/<skupina>/<artikl>/.
 *    BEZ cijena i zaliha (odluka vlasnika 15.10.2026.): katalog je
 *    prezentacija, svaki artikl vodi na upit za ovlastenog kupca.
 * 4. sitemap.xml (ukljucuje i stranice iz content/seo-pages.mjs).
 *
 * Izvoz kataloga: scripts/katalog-izvoz.php na posluzitelju veleprodaje,
 * slike: node scripts/katalog-slike.mjs. Vidi README.
 */
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { stranica, esc, tel, KONTAKTI, TVRTKA, ORIGIN, VELEPRODAJA, OTIRACI, STRELICA } from './lib/okvir.mjs'
import { PAGES } from '../content/seo-pages.mjs'
import { privatnostProxy1, kolaciciProxy1, pravnaStranica } from './lib/pravno.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const PUB = path.join(ROOT, 'public')
const VERZIJA = Date.now().toString(36)

const imeSlike = (f) => path.parse(f).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const hrSort = (a, b) => a.localeCompare(b, 'hr')
const fmt = (n) => n.toLocaleString('hr-HR')

async function pisi(put, html) {
  const dir = path.join(DIST, put)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, 'index.html'), html, 'utf8')
}

const S = (o) => stranica({ verzija: VERZIJA, ...o })

/* ================================================================ podaci */

const izvor = JSON.parse(await fs.readFile(path.join(ROOT, 'katalog-izvor', 'katalog.json'), 'utf8'))

/**
 * Opisi za SEO (content/opisi-artikala.json, id -> tekst): napisani iz naziva,
 * skupine i pakiranja za artikle kojima ERP nema opis ili ima samo kratku
 * napomenu ("MIX BOJA"). ERP opis od 120+ znakova ima prednost.
 */
let OPISI = {}
try { OPISI = JSON.parse(await fs.readFile(path.join(ROOT, 'content', 'opisi-artikala.json'), 'utf8')) } catch {}

/** ERP opisi znaju imati slijepljene recenice ("ciscenja.S obzirom", "BOJAOtirac"). */
const cistiOpis = (t) =>
  String(t || '')
    .replace(/([a-zčćšžđ0-9%)])\.([A-ZČĆŠŽĐ])/g, '$1. $2')
    .replace(/(MIX BOJA)(?=\S)/g, '$1. ')
    .replace(/\s+/g, ' ')
    .trim()
for (const a of izvor.artikli) {
  const erp = cistiOpis(a.opis)
  a.opis = erp.length >= 120 ? erp : OPISI[a.id] || erp
}
const katById = new Map(izvor.kategorije.map((k) => [k.id, k]))
const vrhovi = izvor.kategorije.filter((k) => k.parent === 0)

/** Skupina (vrh) i podskupina artikla. */
function smjesti(a) {
  const kats = a.kategorije.map((id) => katById.get(id)).filter(Boolean)
  const vrh = kats.find((k) => k.parent === 0) || (kats[0] && katById.get(kats[0].parent))
  const pod = kats.find((k) => k.parent !== 0)
  return { vrh, pod }
}

/**
 * Naziv za prikaz: ERP na kraj naziva cesto zalijepi sedmeroznamenkastu
 * sifru dobavljaca ("Brisac poda metal 55cm3084460"). Kupcu ona ne znaci
 * nista, nasa sifra stoji posebno. Modelne oznake (CK-460, MGK-706) ostaju.
 */
function cistiNaziv(n) {
  let x = String(n).trim()
  x = x.replace(/(\d+\s?(?:cm|mm|ml|l|m|g|kg|kom|lit))\d{7}$/i, '$1')
  x = x.replace(/\s+[A-Za-z]{0,4}\d{7}$/, '')
  x = x.replace(/([a-zčćšžđ]{3,})\d{7}$/i, '$1')
  return x.trim() || String(n)
}

const OSTALO = { id: -1, naziv: 'Ostali artikli', slug: 'ostalo', parent: 0, opis: '' }
const skupine = new Map()
for (const a of izvor.artikli) {
  const { vrh, pod } = smjesti(a)
  const v = vrh || OSTALO
  if (!skupine.has(v.slug)) skupine.set(v.slug, { kat: v, pod: new Map(), artikli: [] })
  const s = skupine.get(v.slug)
  const pk = pod ? pod.naziv : 'Ostalo'
  if (!s.pod.has(pk)) s.pod.set(pk, [])
  const art = { ...a, naziv: cistiNaziv(a.naziv), vrhSlug: v.slug, vrhNaziv: v.naziv, podNaziv: pod ? pod.naziv : '' }
  art.url = `/katalog/${v.slug}/${a.slug}/`
  art.img = a.slika ? imeSlike(a.slika) : ''
  s.pod.get(pk).push(art)
  s.artikli.push(art)
}
const SKUPINE = [...skupine.values()].sort((a, b) => (a.kat.slug === 'ostalo') - (b.kat.slug === 'ostalo') || hrSort(a.kat.naziv, b.kat.naziv))
const UKUPNO = izvor.artikli.length

const slikaKat = (s) => {
  if (s.kat.slika) return `/katalog/slike/${imeSlike(s.kat.slika)}-k.webp`
  const prvi = s.artikli.find((a) => a.img)
  return prvi ? `/katalog/slike/${prvi.img}-v.webp` : ''
}

const jm = (a) => {
  const j = (a.jm || 'kom').toLowerCase()
  return a.pakiranje > 1 ? `Pakiranje ${a.pakiranje} ${j}` : `Jedinica: ${j}`
}

/* ================================================================ dijelovi */

function kontaktiHtml(lang) {
  return `<ul class="kontakti">${KONTAKTI[lang]
    .map(
      (k) => `<li class="kontakt">
  <p class="kontakt-uloga">${esc(k.uloga)}</p>
  ${k.ime ? `<p class="kontakt-ime">${esc(k.ime)}</p>` : ''}
  <p class="kontakt-veze">${k.tel ? `<a class="tnum" href="${tel(k.tel)}">${esc(k.tel)}</a>` : ''}<a href="mailto:${k.email}">${esc(k.email)}</a></p>
</li>`,
    )
    .join('')}</ul>`
}

function upitHtml(a) {
  const predmet = encodeURIComponent(`Ovlašteni kupac: ${a.naziv} (${a.sifra})`)
  const tijelo = encodeURIComponent(
    `Pozdrav,\n\nzanima nas artikl ${a.naziv}, šifra ${a.sifra}, i želimo postati ovlašteni kupac.\n\nTvrtka:\nOIB:\nGrad:\nKontakt osoba i telefon:\n\nhttps://proxy1.hr${a.url}`,
  )
  const r = KONTAKTI.hr[0]
  return `<aside class="upit na-tamnom" aria-labelledby="upit-t">
  <h2 id="upit-t">Želite ovaj artikl u svojoj ponudi?</h2>
  <p>Cijene, rabate i zalihu vide ovlašteni kupci u veleprodajnom webshopu, gdje naručuju sami, kad god žele, a mi narudžbu pakiramo i šaljemo. Javite se i otvorit ćemo vam račun.</p>
  <div class="gumbi">
    <a class="btn btn-gold" href="mailto:${r.email}?subject=${predmet}&amp;body=${tijelo}">Postanite ovlašteni kupac</a>
  </div>
  <ul class="upit-kontakti">${KONTAKTI.hr
    .slice(0, 3)
    .map((k) => `<li><span>${esc(k.ime ? `${k.ime}, ${k.uloga.toLowerCase()}` : k.uloga)}</span>${k.tel ? `<a class="tnum" href="${tel(k.tel)}">${esc(k.tel)}</a>` : `<a href="mailto:${k.email}">${esc(k.email)}</a>`}</li>`)
    .join('')}</ul>
</aside>`
}

function artKartica(a) {
  const slika = a.img
    ? `<img src="/katalog/slike/${a.img}-m.webp" alt="" width="480" height="480" loading="lazy" decoding="async">`
    : `<span class="art-prazno">Bez fotografije</span>`
  return `<li><a class="art" href="${a.url}">
  <span class="art-slika">${slika}</span>
  <span class="art-tekst"><span class="art-sifra">${esc(a.sifra)}</span><span class="art-ime">${esc(a.naziv)}</span><span class="art-pak">${esc(jm(a))}</span></span>
</a></li>`
}

const putHtml = (stavke) =>
  `<nav aria-label="Navigacijski put"><ol class="put">${stavke
    .map(([h, l]) => (h ? `<li><a href="${h}">${esc(l)}</a></li>` : `<li aria-current="page">${esc(l)}</li>`))
    .join('')}</ol></nav>`

const putLd = (stavke) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: stavke.map(([h, l], i) => ({ '@type': 'ListItem', position: i + 1, name: l, ...(h ? { item: ORIGIN + h } : {}) })),
})

/* ================================================================ naslovnica */

const ORG_LD = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORIGIN + '/#organization',
  name: TVRTKA.naziv,
  url: ORIGIN,
  logo: ORIGIN + '/images/logo.png',
  image: ORIGIN + '/images/og-card.jpg',
  description: 'Veleprodaja pribora za čišćenje, kuhinju i dom za trgovine, hotele i ugostitelje. Otirači s logotipom po narudžbi.',
  taxID: TVRTKA.oib,
  vatID: 'HR' + TVRTKA.oib,
  foundingDate: '2016-05-11',
  founder: { '@type': 'Person', name: 'Robert Raič' },
  address: { '@type': 'PostalAddress', streetAddress: TVRTKA.adresa, addressLocality: 'Split', postalCode: '21000', addressCountry: 'HR' },
  email: 'info@proxy1.hr',
  contactPoint: KONTAKTI.hr.slice(0, 3).map((k) => ({ '@type': 'ContactPoint', contactType: 'sales', ...(k.tel ? { telephone: k.tel.replace(/\s/g, '') } : {}), email: k.email, areaServed: 'HR', availableLanguage: ['hr', 'en'] })),
  sameAs: [VELEPRODAJA, OTIRACI],
}

function naslovnica(lang) {
  const hr = lang === 'hr'
  const kat = SKUPINE.filter((s) => s.kat.slug !== 'ostalo')
  const tx = hr
    ? {
        h1: 'Veleprodaja za trgovine, hotele i ugostitelje',
        lede: `Pribor za čišćenje, kuhinju i dom iz vlastitog skladišta u Splitu, ${fmt(UKUPNO)} artikala u ponudi. Ovlašteni kupci naručuju sami, u B2B webshopu, kad god žele i po svojim cijenama. Mi narudžbu pakiramo i brzo šaljemo.`,
        b1: 'Pogledajte katalog', b2: 'Postanite ovlašteni kupac',
        cinj: ['Više od 300 partnera u Hrvatskoj', 'Na tržištu od 2016.', 'Otirači s logotipom po narudžbi'],
        video: 'Izrada otirača s logotipom: boja se ubrizgava u vlakno',
        videoLink: 'Složite svoj otirač',
        kanaliH: 'Dva puta do Proxy robe',
        kanaliL: 'Robu za svoju policu naručujete u veleprodajnom webshopu. Otirač s logotipom svoje tvrtke slažete sami u dizajneru.',
        k1za: 'Za ovlaštene kupce', k1h: 'Veleprodajni webshop',
        k1p: 'Cijeli asortiman s vašim cijenama i rabatima, zaliha uživo, narudžba iz povijesti i cjenik za ispis. Pristup otvaramo nakon dogovora s komercijalistom.',
        k1b: 'Prijava u webshop',
        k2za: 'Za tvrtke, hotele i trgovine', k2h: 'Otirači s logotipom',
        k2p: 'Otirač s vašim logotipom slažete sami, u stvarnoj veličini. Dva modela, za unutra i za vanjski ulaz, u 17 mjera. Boja ulazi u vlakno do dna.',
        k2b: 'Složite otirač',
        katH: 'Asortiman',
        katL: `Svih ${fmt(UKUPNO)} artikala iz veleprodajne ponude, s fotografijom, šifrom i pakiranjem. Cijene vide ovlašteni kupci.`,
        katB: 'Cijeli katalog',
        katBr: (n) => `${fmt(n)} artikala`,
        b2bH: 'B2B portal: naručujete kad vama odgovara',
        b2bL: 'Ovlašteni kupci naručuju sami, u webshopu, u bilo koje doba dana. Ne morate zvati ni čekati komercijalista: narudžbu zaprimamo, pakiramo u skladištu u Splitu i šaljemo.',
        prednosti: [
          ['Narudžba u bilo koje doba', 'Webshop radi stalno. Naručujete s računala ili mobitela, a čestu narudžbu ponovite iz povijesti u nekoliko klikova.'],
          ['Vaše cijene i rabati', 'Nakon prijave vidite cijene s ugovorenim rabatom, mjesečnu akciju i outlet, bez traženja ponude.'],
          ['Zaliha uživo', 'Prije narudžbe vidite što je na skladištu, pa znate što stiže u kojoj količini.'],
          ['Brza isporuka', 'Narudžbu pakiramo odmah po zaprimanju i šaljemo iz vlastitog skladišta u Splitu, po cijeloj Hrvatskoj.'],
          ['Poslovni i dostavni uvjeti', 'Rabat, minimalni iznos i dostavu ugovaramo prema vašem prometu. Dostava je besplatna za narudžbe iznad 100 €.'],
          ['Odgoda plaćanja', 'Plaćate na račun, s odgodom prema ugovorenim uvjetima.'],
        ],
        parH: 'Kako postati ovlašteni kupac',
        parL: 'Veleprodaja je za tvrtke i obrte: trgovine, drogerije, hotele, apartmane, restorane i ustanove.',
        koraci: [
          ['Javite se', 'Pišite Robertu ili nazovite komercijalista za svoje područje. Recite što prodajete i gdje.'],
          ['Ugovaramo uvjete', 'Dogovaramo rabat, odgodu plaćanja i dostavu, a mi otvaramo vaš račun u webshopu.'],
          ['Naručujete sami', 'Od tada naručujete u webshopu kad god želite. Komercijalist je tu kad vam treba savjet, ali za narudžbu vam nije potreban.'],
        ],
        parB: 'Javite se',
        skH: 'Skladište u Splitu',
        skL: 'Cijeli asortiman držimo na zalihi, pa se narudžba pakira odmah po zaprimanju.',
        adresa: 'Adresa', rv: 'Radno vrijeme',
        konH: 'Kontakt',
        konL: 'Za novi partnerski račun javite se Robertu ili komercijalistu za svoje područje.',
      }
    : {
        h1: 'Wholesale for stores, hotels and hospitality',
        lede: `Cleaning, kitchen and household supplies from our own warehouse in Split, Croatia, ${UKUPNO.toLocaleString('en')} products in the range. Authorised buyers order on their own in the B2B webshop, whenever they like and at their own prices. We pack and ship quickly.`,
        b1: 'Browse the catalogue', b2: 'Become an authorised buyer',
        cinj: ['More than 300 partners in Croatia', 'In business since 2016', 'Custom logo doormats'],
        video: 'Making a logo doormat: colour is injected into the fibre',
        videoLink: 'Design your doormat',
        kanaliH: 'Two ways to order from Proxy',
        kanaliL: 'Stock for your shelves is ordered in the wholesale webshop. A doormat with your company logo is designed by you in the online designer.',
        k1za: 'For authorised buyers', k1h: 'Wholesale webshop',
        k1p: 'The full range with your prices and discounts, live stock, reorder from history and a printable price list. Access is opened after agreeing terms with a sales representative.',
        k1b: 'Log in to the webshop',
        k2za: 'For companies, hotels and stores', k2h: 'Logo doormats',
        k2p: 'Design a doormat with your logo yourself, at real size. Two models, indoor and outdoor, in 17 sizes. The colour goes through the whole fibre.',
        k2b: 'Design a doormat',
        katH: 'Product range',
        katL: `All ${UKUPNO} products of the wholesale range with photo, code and packaging (catalogue in Croatian). Prices are visible to authorised buyers.`,
        katB: 'Full catalogue',
        katBr: (n) => `${n} products`,
        b2bH: 'A B2B portal: order whenever it suits you',
        b2bL: 'Authorised buyers order on their own, in the webshop, at any time of day. No need to call or wait for a sales rep: we receive the order, pack it in our Split warehouse and ship it.',
        prednosti: [
          ['Order at any time', 'The webshop is always open. Order from a computer or phone, and repeat a regular order from your history in a few clicks.'],
          ['Your prices and discounts', 'After logging in you see prices with your agreed discount, the monthly offer and the outlet, without asking for a quote.'],
          ['Live stock', 'Before ordering you see what is in the warehouse, so you know what arrives and in what quantity.'],
          ['Fast delivery', 'Orders are packed as soon as they arrive and shipped from our own warehouse in Split, anywhere in Croatia.'],
          ['Business and delivery terms', 'Discount, minimum order and delivery are agreed to match your volume. Delivery is free for orders above 100 EUR.'],
          ['Deferred payment', 'You pay by invoice, with deferred payment under the agreed terms.'],
        ],
        parH: 'How to become an authorised buyer',
        parL: 'Wholesale is for companies and trades: stores, drugstores, hotels, holiday rentals, restaurants and institutions.',
        koraci: [
          ['Get in touch', 'Write to Robert or call the sales representative for your region. Tell us what you sell and where.'],
          ['We agree terms', 'We agree the discount, deferred payment and delivery, and open your webshop account.'],
          ['You order on your own', 'From then on you order in the webshop whenever you like. Your sales rep is there for advice, but you do not need one to order.'],
        ],
        parB: 'Get in touch',
        skH: 'Our warehouse in Split',
        skL: 'We keep the whole range in stock, so orders are packed as soon as they arrive.',
        adresa: 'Address', rv: 'Opening hours',
        konH: 'Contact',
        konL: 'For a new partner account, contact Robert or the sales representative for your region.',
      }

  const kp = hr ? '/' : '/en/'
  const tijelo = `
<section class="korica na-tamnom">
  <div class="wrap korica-in">
    <div>
      <h1>${esc(tx.h1)}</h1>
      <p class="lede">${esc(tx.lede)}</p>
      <div class="gumbi">
        <a class="btn btn-gold" href="/katalog/">${esc(tx.b1)}</a>
        <a class="btn btn-svijetli" href="${kp}#partner">${esc(tx.b2)}</a>
      </div>
      <ul class="korica-cinjenice">${tx.cinj.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
    </div>
    <figure class="korica-slika">
      <video src="/video/izrada.mp4" poster="/images/otiraci-novi/izrada-poster.jpg" autoplay muted loop playsinline preload="auto" aria-label="${esc(tx.video)}"></video>
      <figcaption class="etiketa">${esc(tx.video)}</figcaption>
    </figure>
  </div>
</section>

<section class="wrap sek" aria-labelledby="kanali-h">
  <div class="sek-hd"><div><h2 id="kanali-h">${esc(tx.kanaliH)}</h2><p class="lede">${esc(tx.kanaliL)}</p></div></div>
  <div class="kanali">
    <article class="kanal">
      <div class="kanal-slika"><img src="/images/veleprodaja-izlaganje.jpg" alt="${hr ? 'Proxy asortiman na policama' : 'Proxy range on shelves'}" width="1600" height="1200" loading="lazy"></div>
      <div class="kanal-tekst">
        <p class="kanal-za">${esc(tx.k1za)}</p>
        <h3>${esc(tx.k1h)}</h3>
        <p>${esc(tx.k1p)}</p>
        <a class="btn btn-navy" href="${VELEPRODAJA}/">${esc(tx.k1b)}</a>
      </div>
    </article>
    <article class="kanal">
      <div class="kanal-slika"><img src="/images/otiraci-novi/ured-2.jpg" alt="${hr ? 'Sivi otirač s bijelim logotipom na drvenom podu uz prozor' : 'Grey doormat with a white logo on a wooden floor by a window'}" width="1400" height="1045" loading="lazy"></div>
      <div class="kanal-tekst">
        <p class="kanal-za">${esc(tx.k2za)}</p>
        <h3>${esc(tx.k2h)}</h3>
        <p>${esc(tx.k2p)}</p>
        <a class="btn btn-navy" href="${OTIRACI}/">${esc(tx.k2b)}</a>
      </div>
    </article>
  </div>
</section>

<section class="wrap sek" aria-labelledby="kat-h">
  <div class="sek-hd">
    <div><h2 id="kat-h">${esc(tx.katH)}</h2><p class="lede">${esc(tx.katL)}</p></div>
    <a class="strelica" href="/katalog/">${esc(tx.katB)} ${STRELICA}</a>
  </div>
  <ul class="kategorije">${kat
    .map(
      (s) => `<li><a class="kat" href="/katalog/${s.kat.slug}/">
  <span class="kat-slika"><img src="${slikaKat(s)}" alt="" width="1000" height="750" loading="lazy" decoding="async"></span>
  <span class="kat-ime">${esc(s.kat.naziv)}</span>
  <span class="kat-br tnum">${tx.katBr(s.artikli.length)}</span>
</a></li>`,
    )
    .join('')}</ul>
</section>

<section class="wrap sek" aria-labelledby="b2b-h">
  <div class="sek-hd"><div><h2 id="b2b-h">${esc(tx.b2bH)}</h2><p class="lede">${esc(tx.b2bL)}</p></div>
    <a class="btn btn-navy" href="${VELEPRODAJA}/">${esc(tx.k1b)}</a></div>
  <ul class="prednosti">${tx.prednosti.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`).join('')}</ul>
</section>

<section id="partner" class="traka na-tamnom" aria-labelledby="par-h">
  <div class="wrap">
    <div class="sek-hd"><div><h2 id="par-h">${esc(tx.parH)}</h2><p class="lede">${esc(tx.parL)}</p></div>
      <a class="btn btn-gold" href="${kp}#kontakt">${esc(tx.parB)}</a></div>
    <ol class="koraci">${tx.koraci
      .map(([h, p], i) => `<li><span class="broj tnum">${i + 1}</span><div><h3>${esc(h)}</h3><p>${esc(p)}</p></div></li>`)
      .join('')}</ol>
  </div>
</section>

<section class="wrap sek" aria-labelledby="sk-h">
  <div class="sklad okvir-mob">
    <div>
      <h2 id="sk-h">${esc(tx.skH)}</h2>
      <p class="lede" style="margin-top:14px">${esc(tx.skL)}</p>
      <dl class="podaci">
        <div><dt>${tx.adresa}</dt><dd>${esc(TVRTKA.adresa)}, ${esc(TVRTKA.mjesto)}</dd></div>
        <div><dt>${tx.rv}</dt><dd>${esc(TVRTKA.radnoVrijeme[lang])}</dd></div>
      </dl>
    </div>
    <div class="sklad-foto">
      <img src="/images/display-2.jpg" alt="${hr ? 'Izložbeni regal s priborom za čišćenje' : 'Display stand with cleaning supplies'}" width="1100" height="825" loading="lazy">
      <img src="/images/proxy-display.jpg" alt="${hr ? 'Proxy stalak s priborom' : 'Proxy stand'}" width="800" height="600" loading="lazy">
      <img src="/images/retail-display.jpg" alt="${hr ? 'Polica partnera s Proxy asortimanom' : 'Partner shelf with Proxy products'}" width="800" height="600" loading="lazy">
    </div>
  </div>
</section>

<section id="kontakt" class="wrap sek" aria-labelledby="kon-h">
  <div class="sek-hd" style="border-bottom:0;margin-bottom:8px;padding-bottom:0"><div><h2 id="kon-h">${esc(tx.konH)}</h2><p class="lede">${esc(tx.konL)}</p></div></div>
  ${kontaktiHtml(lang)}
</section>
`
  return S({
    lang,
    naslov: hr
      ? 'Proxy d.o.o. Split | Veleprodaja za trgovine, hotele i ugostitelje'
      : 'Proxy d.o.o. Split | Wholesale for stores, hotels and hospitality',
    opis: hr
      ? `Veleprodaja pribora za čišćenje, kuhinju i dom iz Splita. ${fmt(UKUPNO)} artikala, više od 300 partnera. Katalog asortimana i otirači s logotipom po narudžbi.`
      : `Wholesale cleaning, kitchen and household supplies from Split, Croatia. ${UKUPNO} products, 300+ partners. Product catalogue and custom logo doormats.`,
    put: kp,
    tijelo,
    hreflang: { hr: '/', en: '/en/' },
    ld: [ORG_LD, { '@context': 'https://schema.org', '@type': 'WebSite', '@id': ORIGIN + '/#website', name: 'Proxy d.o.o.', url: ORIGIN, inLanguage: ['hr-HR', 'en'] }],
  })
}

/* ================================================================ katalog */

function katalogIndeks() {
  const indeks = SKUPINE.flatMap((s) => s.artikli.map((a) => [a.naziv, a.sifra, a.url, a.img, s.kat.naziv]))
  const tijelo = `
<div class="wrap">
  ${putHtml([['/', 'Početna'], [null, 'Katalog']])}
  <header class="kat-zaglavlje">
    <h1>Katalog asortimana</h1>
    <p class="lede">${fmt(UKUPNO)} artikala iz veleprodajne ponude, u ${SKUPINE.length} skupina. Ovo je prezentacija bez cijena: cijene, rabate i zalihu vide ovlašteni kupci u webshopu.</p>
  </header>

  <form class="trazi" role="search" onsubmit="return false" style="margin-top:28px;max-width:640px">
    <label for="trazi-u" class="kat-br" style="display:block;margin-bottom:6px;font-weight:700;color:var(--ink)">Pretražite po nazivu ili šifri</label>
    <input id="trazi-u" type="search" autocomplete="off" placeholder="npr. mop, tava, 1101147" style="width:100%;min-height:52px;padding:12px 16px;font:400 17px var(--font);border:1px solid var(--rule-strong);background:var(--white);color:var(--ink)">
  </form>
  <div id="trazi-r" hidden style="margin-top:24px"><p class="mali" id="trazi-n"></p><ul class="artikli" id="trazi-l" style="margin-top:12px"></ul></div>

  <div class="sek" style="padding-top:56px">
    <ul class="kategorije">${SKUPINE.map((s) => {
      const sl = slikaKat(s)
      return `<li><a class="kat" href="/katalog/${s.kat.slug}/">
  <span class="kat-slika">${sl ? `<img src="${sl}" alt="" width="1000" height="750" loading="lazy" decoding="async">` : ''}</span>
  <span class="kat-ime">${esc(s.kat.naziv)}</span>
  <span class="kat-br tnum">${fmt(s.artikli.length)} artikala, ${s.pod.size} ${s.pod.size === 1 ? 'podskupina' : 'podskupina'}</span>
</a></li>`
    }).join('')}</ul>
  </div>
</div>
<script>
(function(){
  var I=${JSON.stringify(indeks)};
  var u=document.getElementById('trazi-u'),r=document.getElementById('trazi-r'),l=document.getElementById('trazi-l'),n=document.getElementById('trazi-n');
  function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/đ/g,'d')}
  var N=I.map(function(a){return norm(a[0]+' '+a[1]+' '+a[4])});
  function e(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  u.addEventListener('input',function(){
    var q=norm(u.value.trim());
    if(q.length<2){r.hidden=true;return}
    var d=q.split(/\\s+/),out=[];
    for(var i=0;i<I.length&&out.length<60;i++){if(d.every(function(w){return N[i].indexOf(w)>-1}))out.push(I[i])}
    n.textContent=out.length?('Pronađeno: '+out.length+(out.length===60?' i više':'')):'Nema artikala za taj upit.';
    l.innerHTML=out.map(function(a){return '<li><a class="art" href="'+a[2]+'"><span class="art-slika">'+(a[3]?'<img src="/katalog/slike/'+a[3]+'-m.webp" alt="" width="480" height="480" loading="lazy">':'<span class="art-prazno">Bez fotografije</span>')+'</span><span class="art-tekst"><span class="art-sifra">'+e(a[1])+'</span><span class="art-ime">'+e(a[0])+'</span><span class="art-pak">'+e(a[4])+'</span></span></a></li>'}).join('');
    r.hidden=false;
  });
})();
</script>
`
  return S({
    lang: 'hr',
    naslov: `Katalog veleprodajnog asortimana | ${fmt(UKUPNO)} artikala | Proxy d.o.o. Split`,
    opis: `Pregledajte ${fmt(UKUPNO)} artikala iz veleprodajne ponude Proxyja: pribor za čišćenje, posuđe, inox i drvena galanterija, tekstil i opremanje. Za trgovine, hotele i ugostitelje.`,
    put: '/katalog/',
    aktivno: 'katalog',
    tijelo,
    ld: [putLd([['/', 'Početna'], [null, 'Katalog']])],
  })
}

function katalogSkupina(s) {
  const podovi = [...s.pod.entries()].sort((a, b) => (a[0] === 'Ostalo') - (b[0] === 'Ostalo') || hrSort(a[0], b[0]))
  const sidro = (ime) => 'p-' + ime.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  const put = [['/', 'Početna'], ['/katalog/', 'Katalog'], [null, s.kat.naziv]]
  const tijelo = `
<div class="wrap">
  ${putHtml(put)}
  <header class="kat-zaglavlje">
    <h1>${esc(s.kat.naziv)}</h1>
    <p class="lede">${fmt(s.artikli.length)} artikala u veleprodajnoj ponudi${podovi.length > 1 ? `, u ${podovi.length} podskupina` : ''}. Cijene i zalihu vide ovlašteni kupci.</p>
    ${podovi.length > 1 ? `<ul class="cipovi">${podovi.map(([ime, arr]) => `<li><a class="cip" href="#${sidro(ime)}">${esc(ime)} <span class="tnum">${arr.length}</span></a></li>`).join('')}</ul>` : ''}
  </header>
  ${podovi
    .map(
      ([ime, arr]) => `<section class="podgrupa" id="${sidro(ime)}" aria-labelledby="${sidro(ime)}-h">
    ${podovi.length > 1 ? `<div class="podgrupa-hd"><h2 id="${sidro(ime)}-h">${esc(ime)}</h2><span class="mali tnum">${fmt(arr.length)} artikala</span></div>` : `<h2 id="${sidro(ime)}-h" class="sr">${esc(ime)}</h2>`}
    <ul class="artikli">${arr.sort((a, b) => hrSort(a.naziv, b.naziv)).map(artKartica).join('')}</ul>
  </section>`,
    )
    .join('')}
  ${upitHtml({ naziv: s.kat.naziv, sifra: 'skupina', url: `/katalog/${s.kat.slug}/` }).replace('Želite ovaj artikl u svojoj ponudi?', `Želite ${esc(s.kat.naziv.toLowerCase())} u svojoj ponudi?`)}
</div>
`
  return S({
    lang: 'hr',
    naslov: `${s.kat.naziv}, veleprodaja | ${fmt(s.artikli.length)} artikala | Proxy d.o.o.`,
    opis: `${s.kat.naziv} u veleprodaji: ${fmt(s.artikli.length)} artikala s fotografijom, šifrom i pakiranjem. Za trgovine, hotele i ugostitelje. Proxy d.o.o. Split.`,
    put: `/katalog/${s.kat.slug}/`,
    aktivno: 'katalog',
    slika: slikaKat(s),
    tijelo,
    ld: [putLd(put)],
  })
}

function katalogArtikl(a, s) {
  const isti = (s.pod.get(a.podNaziv || 'Ostalo') || []).filter((b) => b.id !== a.id).slice(0, 10)
  const put = [['/', 'Početna'], ['/katalog/', 'Katalog'], [`/katalog/${s.kat.slug}/`, s.kat.naziv], [null, a.naziv]]
  const opis = a.opis
    ? a.opis.split(/(?<=[.!?])\s+(?=[A-ZČĆŠŽĐ])/).reduce((acc, r, i) => { const k = Math.floor(i / 3); (acc[k] = acc[k] || []).push(r); return acc }, []).map((g) => `<p>${esc(g.join(' '))}</p>`).join('')
    : ''
  const tijelo = `
<div class="wrap">
  ${putHtml(put)}
  <div class="artikl">
    <div class="artikl-slika">${a.img ? `<img src="/katalog/slike/${a.img}-v.webp" alt="${esc(a.naziv)}" width="1000" height="1000" fetchpriority="high">` : `<span class="art-prazno" style="aspect-ratio:1">Bez fotografije</span>`}</div>
    <div>
      <h1>${esc(a.naziv)}</h1>
      <dl class="podaci">
        <div><dt>Šifra</dt><dd class="tnum">${esc(a.sifra)}</dd></div>
        <div><dt>Skupina</dt><dd><a href="/katalog/${s.kat.slug}/">${esc(s.kat.naziv)}</a>${a.podNaziv ? `, ${esc(a.podNaziv)}` : ''}</dd></div>
        <div><dt>Pakiranje</dt><dd class="tnum">${a.pakiranje > 1 ? `${a.pakiranje} ${esc((a.jm || 'kom').toLowerCase())}` : esc((a.jm || 'kom').toLowerCase())}</dd></div>
      </dl>
      ${opis ? `<div class="artikl-opis">${opis}</div>` : ''}
      ${upitHtml(a)}
    </div>
  </div>
  ${isti.length ? `<section class="podgrupa" aria-labelledby="slicno-h"><div class="podgrupa-hd"><h2 id="slicno-h">Još iz skupine ${esc(a.podNaziv || s.kat.naziv)}</h2><a class="strelica" href="/katalog/${s.kat.slug}/">Cijela skupina ${STRELICA}</a></div><ul class="artikli">${isti.map(artKartica).join('')}</ul></section>` : ''}
</div>
`
  const kratki = a.opis ? a.opis.slice(0, 140).replace(/\s+\S*$/, '') : ''
  return S({
    lang: 'hr',
    naslov: `${a.naziv} | veleprodaja, šifra ${a.sifra} | Proxy d.o.o.`,
    opis: `${a.naziv}, šifra ${a.sifra}. ${kratki ? kratki + '. ' : ''}Veleprodaja za trgovine i ugostitelje, Proxy d.o.o. Split.`.slice(0, 300),
    put: a.url,
    aktivno: 'katalog',
    slika: a.img ? `/katalog/slike/${a.img}-v.webp` : '',
    tijelo,
    ld: [putLd(put)],
  })
}

/* ================================================================ gradnja */

// Prazni se sadrzaj, ne sama mapa (lokalni pregled moze drzati dist/ otvorenim).
await fs.mkdir(DIST, { recursive: true })
for (const e of await fs.readdir(DIST)) await fs.rm(path.join(DIST, e), { recursive: true, force: true })
await fs.cp(PUB, DIST, { recursive: true })

await pisi('/', naslovnica('hr'))
await pisi('/en/', naslovnica('en'))
await pisi('/katalog/', katalogIndeks())
await pisi('/politika-privatnosti/', S({ lang: 'hr', naslov: 'Politika privatnosti | Proxy d.o.o.', opis: 'Kako proxy1.hr obrađuje osobne podatke: voditelj obrade, svrhe, rokovi čuvanja, primatelji i vaša prava.', put: '/politika-privatnosti/', tijelo: pravnaStranica('Politika privatnosti', privatnostProxy1()) }))
await pisi('/politika-kolacica/', S({ lang: 'hr', naslov: 'Politika kolačića | Proxy d.o.o.', opis: 'Koje kolačiće koristi proxy1.hr, zašto i koliko dugo. Analitika samo uz privolu, bez oglašivačkih kolačića.', put: '/politika-kolacica/', tijelo: pravnaStranica('Politika kolačića', kolaciciProxy1()) }))
let n = 0
for (const s of SKUPINE) {
  await pisi(`/katalog/${s.kat.slug}/`, katalogSkupina(s))
  for (const a of s.artikli) {
    await pisi(a.url, katalogArtikl(a, s))
    n++
  }
}

const danas = new Date().toISOString().slice(0, 10)
const urls = [
  '/', '/en/', '/katalog/',
  ...SKUPINE.map((s) => `/katalog/${s.kat.slug}/`),
  ...SKUPINE.flatMap((s) => s.artikli.map((a) => a.url)),
  ...PAGES.map((p) => (p.lang === 'en' ? `/en/${p.slug.replace(/^en\//, '')}/` : `/${p.slug}/`)),
  '/politika-privatnosti/', '/politika-kolacica/',
]
await fs.writeFile(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(urls)]
    .map((u) => `  <url><loc>${ORIGIN}${u}</loc><lastmod>${danas}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
  'utf8',
)
console.log(`site: naslovnica HR/EN, katalog ${SKUPINE.length} skupina, ${n} artikala, sitemap ${new Set(urls).size} adresa`)
