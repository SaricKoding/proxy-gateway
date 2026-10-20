/**
 * Generira statične SEO stranice (kategorije veleprodaje, postanite-partner, vodiči)
 * iz content/seo-pages.mjs u dist/<slug>/index.html.
 *
 * Višejezično: stranice s lang:'en' žive pod /en/<slug>/, a `pair` polje povezuje
 * HR i EN verzije reciprocnim hreflang linkovima.
 *
 * Pokreće se u build pipelineu NAKON vite build (vidi package.json).
 * Dizajn prati brand (navy #0B1E3A + gold, Barlow Condensed + Inter).
 */
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PAGES } from '../content/seo-pages.mjs'
import { stranica, STRELICA } from './lib/okvir.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const ORIGIN = 'https://proxy1.hr'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** UI stringovi po jeziku */
const STRINGS = {
  hr: {
    htmlLang: 'hr',
    ogLocale: 'hr_HR',
    home: '/',
    homeName: 'Proxy d.o.o.',
    partnerHref: '/postanite-partner/',
    nav: { partner: 'Postanite partner', wholesale: 'Veleprodaja', retail: 'Maloprodaja' },
    productsTitle: 'Primjeri iz asortimana',
    productsNote: 'Prikaz je informativan, potpuni katalog s veleprodajnim cijenama dostupan je ugovornim partnerima u B2B webshopu.',
    faqTitle: 'Česta pitanja',
    relatedTitle: 'Povezano',
    published: 'Objavljeno: 16. srpnja 2026. · Proxy d.o.o., Split',
    ctaTitle: 'Tražite pouzdanog veleprodajnog dobavljača?',
    ctaText: 'Proxy d.o.o. iz Splita opskrbljuje više od 300 partnera u cijeloj Hrvatskoj: trgovine, hotele, restorane i ustanove. Javite se Robertu ili komercijalistu za svoje područje i otvorit ćemo vam račun u webshopu.',
    ctaBtn: 'Postanite partner',
    breadcrumbAria: 'Navigacijski put',
    footerLinks: '<a href="/">Početna</a> · <a href="/postanite-partner/">Postanite partner</a> · <a href="/politika-privatnosti/">Politika privatnosti</a> · <a href="/politika-kolacica/">Politika kolačića</a>',
    galleryAltSuffix: 'Proxy veleprodaja',
    audience: 'Trgovine, ugostiteljski objekti, hoteli, ustanove',
    country: 'Hrvatska',
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    home: '/en/',
    homeName: 'Proxy d.o.o.',
    partnerHref: '/en/become-a-partner/',
    nav: { partner: 'Become a partner', wholesale: 'Wholesale', retail: 'Retail' },
    productsTitle: 'Product examples',
    productsNote: 'This overview is informational. The full catalogue with wholesale prices is available to contracted partners in the B2B webshop.',
    faqTitle: 'Frequently asked questions',
    relatedTitle: 'Related',
    published: 'Published: 16 July 2026 · Proxy d.o.o., Split, Croatia',
    ctaTitle: 'Looking for a reliable wholesale supplier in Croatia?',
    ctaText: 'Proxy d.o.o. from Split supplies more than 300 partners across Croatia: stores, hotels, restaurants and institutions. Get in touch and we will open your webshop account.',
    ctaBtn: 'Become a partner',
    breadcrumbAria: 'Breadcrumb',
    footerLinks: '<a href="/en/">Home</a> · <a href="/en/become-a-partner/">Become a partner</a> · <a href="/politika-privatnosti/">Privacy policy</a> · <a href="/politika-kolacica/">Cookie policy</a>',
    galleryAltSuffix: 'Proxy wholesale',
    audience: 'Retail stores, hospitality venues, hotels, institutions',
    country: 'Croatia',
  },
}

/**
 * Galerije: stvarne fotografije proizvoda (ERP sync) u /public/images/seo/ (720x540, jpg+webp).
 */
const GALLERIES = {
  'veleprodaja-sredstava-za-ciscenje': [
    { img: 'ciscenje-1', alt: 'Mop Snappy s štapom' },
    { img: 'ciscenje-2', alt: 'Metla Grand' },
    { img: 'ciscenje-3', alt: 'Set krpa od mikrofibre 7/1' },
  ],
  'veleprodaja-posuda': [
    { img: 'posude-1', alt: 'Tava catering inox 28 cm' },
    { img: 'posude-2', alt: 'Tepsija kamen 40×40 cm' },
    { img: 'posude-3', alt: 'Silikonski kalup za kolače' },
  ],
  'veleprodaja-inox-galanterije': [
    { img: 'inox-1', alt: 'Kuharska hvataljka 32 cm' },
    { img: 'inox-2', alt: 'Rezač za pizzu' },
    { img: 'inox-3', alt: 'Fix držač ubrusa' },
  ],
  'veleprodaja-drvene-galanterije': [
    { img: 'drvena-1', alt: 'Daska za rezanje od akacije' },
    { img: 'drvena-2', alt: 'Set daska za pizzu' },
    { img: 'drvena-3', alt: 'Valjak za tijesto' },
  ],
  'veleprodaja-tekstila-za-domacinstvo': [
    { img: 'tekstil-1', alt: 'Tapet Tera 60 cm' },
    { img: 'tekstil-2', alt: 'Podloga non-slip crna 60 cm' },
    { img: 'tekstil-3', alt: 'Stolnjak prozirni 90 cm' },
  ],
  'veleprodaja-otiraca': [
    { img: 'otiraci-1', alt: 'Otirač Dakota 90×150 cm' },
    { img: 'otiraci-2', alt: 'Otirač Nevada 120×180 cm' },
    { img: 'otiraci-3', alt: 'Otirač Dakota 40×70 cm' },
  ],
  'veleprodaja-spremanja-ormara': [
    { img: 'ormar-1', alt: 'Set vakum vreća 3/1' },
    { img: 'ormar-2', alt: 'Vakum box 145 l' },
    { img: 'ormar-3', alt: 'Vakum vreća s vješalicom 2/1' },
  ],
  'veleprodaja-opremanja': [
    { img: 'oprema-1', alt: 'Zidni sat 51 cm' },
    { img: 'oprema-2', alt: 'Metalna polica 180×90×40 cm' },
    { img: 'oprema-3', alt: 'Zavjesa Cinglia 120×230 cm' },
  ],
  // EN varijante: iste slike, engleski alt
  'en/wholesale-cleaning-supplies': [
    { img: 'ciscenje-1', alt: 'Snappy mop with handle' },
    { img: 'ciscenje-2', alt: 'Grand broom' },
    { img: 'ciscenje-3', alt: 'Microfibre cloth set 7 pcs' },
  ],
  'en/wholesale-cookware': [
    { img: 'posude-1', alt: 'Stainless steel catering pan 28 cm' },
    { img: 'posude-2', alt: 'Stone baking tray 40×40 cm' },
    { img: 'posude-3', alt: 'Silicone cake mould' },
  ],
  'en/wholesale-stainless-steel-kitchenware': [
    { img: 'inox-1', alt: 'Chef tongs 32 cm' },
    { img: 'inox-2', alt: 'Pizza cutter' },
    { img: 'inox-3', alt: 'Napkin holder' },
  ],
  'en/wholesale-wooden-kitchenware': [
    { img: 'drvena-1', alt: 'Acacia cutting board' },
    { img: 'drvena-2', alt: 'Pizza stone board set' },
    { img: 'drvena-3', alt: 'Rolling pin' },
  ],
  'en/wholesale-household-textiles': [
    { img: 'tekstil-1', alt: 'Tera runner rug 60 cm' },
    { img: 'tekstil-2', alt: 'Non-slip mat black 60 cm' },
    { img: 'tekstil-3', alt: 'Transparent tablecloth 90 cm' },
  ],
  'en/wholesale-doormats': [
    { img: 'otiraci-1', alt: 'Dakota doormat 90×150 cm' },
    { img: 'otiraci-2', alt: 'Nevada doormat 120×180 cm' },
    { img: 'otiraci-3', alt: 'Dakota doormat 40×70 cm' },
  ],
  'en/wholesale-closet-storage': [
    { img: 'ormar-1', alt: 'Vacuum bag set 3 pcs' },
    { img: 'ormar-2', alt: 'Vacuum storage box 145 l' },
    { img: 'ormar-3', alt: 'Vacuum bag with hanger 2 pcs' },
  ],
  'en/wholesale-home-equipment': [
    { img: 'oprema-1', alt: 'Wall clock 51 cm' },
    { img: 'oprema-2', alt: 'Metal shelving 180×90×40 cm' },
    { img: 'oprema-3', alt: 'Cinglia curtain 120×230 cm' },
  ],
}


/** hreflang parovi: hrSlug <-> enSlug (izvedeno iz `pair` na EN stranicama) */
const PAIRS = {}
for (const p of PAGES) {
  if (p.lang === 'en' && p.pair) {
    PAIRS[p.pair] = p.slug
    PAIRS[p.slug] = p.pair
  }
}

function hreflangLinks(page) {
  const other = PAIRS[page.slug]
  if (!other) return ''
  const hrSlug = page.lang === 'en' ? other : page.slug
  const enSlug = page.lang === 'en' ? page.slug : other
  return [
    `<link rel="alternate" hreflang="hr" href="${ORIGIN}/${hrSlug}/" />`,
    `<link rel="alternate" hreflang="en" href="${ORIGIN}/${enSlug}/" />`,
    `<link rel="alternate" hreflang="x-default" href="${ORIGIN}/${hrSlug}/" />`,
  ].join('\n')
}

function jsonLdObj(page, S) {
  const url = `${ORIGIN}/${page.slug}/`
  const blocks = []

  blocks.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: S.homeName, item: `${ORIGIN}${S.home}` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: url },
    ],
  })

  if (page.type === 'guide') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.metaDesc,
      inLanguage: S.htmlLang,
      datePublished: page.datePublished || '2026-07-16',
      dateModified: page.dateModified || '2026-10-15',
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'Proxy d.o.o.', url: ORIGIN },
      publisher: { '@id': `${ORIGIN}/#organization` },
    })
  } else {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.h1,
      description: page.metaDesc,
      url,
      serviceType: page.serviceType || 'Veleprodaja',
      provider: { '@id': `${ORIGIN}/#organization` },
      areaServed: { '@type': 'Country', name: S.country },
      audience: { '@type': 'BusinessAudience', audienceType: S.audience },
    })
  }

  if (page.faq?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return blocks
}

/** SEO stranica kategorije -> skupina u javnom katalogu. */
const KATALOG = {
  'veleprodaja-sredstava-za-ciscenje': 'ciscenje',
  'veleprodaja-posuda': 'posude',
  'veleprodaja-inox-galanterije': 'inox-galanterija',
  'veleprodaja-drvene-galanterije': 'drvena-galanterija',
  'veleprodaja-tekstila-za-domacinstvo': 'tekstil-domacinstvo',
  'veleprodaja-otiraca': 'otir',
  'veleprodaja-spremanja-ormara': 'spremanje-ormara',
  'veleprodaja-opremanja': 'opremanje',
}

function render(page, all) {
  const lang = page.lang || 'hr'
  const S = STRINGS[lang]
  const related = (page.related || []).map((slug) => all.find((p) => p.slug === slug)).filter(Boolean)
  const kat = KATALOG[page.slug] || KATALOG[page.pair]

  const productsHtml = page.products?.length
    ? `<h2>${esc(page.productsTitle || S.productsTitle)}</h2>
       <ul>${page.products.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
       <p class="mali">${S.productsNote}</p>`
    : ''

  const faqHtml = page.faq?.length
    ? `<h2>${S.faqTitle}</h2><dl class="pitanja">${page.faq.map((f) => `<div><dt>${esc(f.q)}</dt><dd>${esc(f.a)}</dd></div>`).join('')}</dl>`
    : ''

  const relatedHtml = related.length
    ? `<h2>${S.relatedTitle}</h2><ul class="povezano">${related.map((r) => `<li><a href="/${r.slug}/">${esc(r.h1)} ${STRELICA}</a></li>`).join('')}</ul>`
    : ''

  const gallery = GALLERIES[page.slug]
  const galleryHtml = gallery?.length
    ? `<div class="galerija">${gallery
        .map((g) => `<figure><picture><source srcset="/images/seo/${g.img}.webp" type="image/webp"><img src="/images/seo/${g.img}.jpg" alt="${esc(g.alt)}" width="720" height="540" loading="lazy" decoding="async"></picture><figcaption>${esc(g.alt)}</figcaption></figure>`)
        .join('')}</div>`
    : ''

  const katalogHtml = kat
    ? `<p class="gumbi" style="margin-top:24px"><a class="btn btn-navy" href="/katalog/${kat}/">${lang === 'en' ? 'See every product in the catalogue' : 'Pogledajte sve artikle u katalogu'}</a></p>`
    : ''

  const tijelo = `
<div class="wrap">
  <nav aria-label="${S.breadcrumbAria}"><ol class="put"><li><a href="${S.home}">${S.homeName}</a></li><li aria-current="page">${esc(page.h1)}</li></ol></nav>
  <article class="clanak">
    <h1>${esc(page.h1)}</h1>
    ${page.type === 'guide' ? `<p class="datum">${S.published}</p>` : ''}
    <p class="lede">${esc(page.lead)}</p>
    ${katalogHtml}
    ${galleryHtml}
    <div class="sadrzaj">
      ${page.body}
      ${productsHtml}
      ${faqHtml}
    </div>
    <aside class="upit na-tamnom" style="margin-top:48px">
      <h2>${esc(page.ctaTitle || S.ctaTitle)}</h2>
      <p>${esc(page.ctaText || S.ctaText)}</p>
      <div class="gumbi"><a class="btn btn-gold" href="${S.partnerHref}">${S.ctaBtn}</a><a class="btn btn-svijetli" href="mailto:robert@proxy1.hr">robert@proxy1.hr</a></div>
    </aside>
    <div class="sadrzaj">${relatedHtml}</div>
  </article>
</div>`

  const hr = page.lang === 'en' ? PAIRS[page.slug] : page.slug
  const en = page.lang === 'en' ? page.slug : PAIRS[page.slug]
  return stranica({
    lang,
    naslov: page.title,
    opis: page.metaDesc,
    put: `/${page.slug}/`,
    aktivno: page.slug.includes('partner') ? 'partner' : '',
    tijelo,
    hreflang: PAIRS[page.slug] ? { hr: `/${hr}/`, en: `/${en}/` } : undefined,
    ld: jsonLdObj(page, S),
  })
}

for (const page of PAGES) {
  const dir = path.join(DIST, ...page.slug.split('/'))
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, 'index.html'), render(page, PAGES), 'utf8')
  console.log(`OK  /${page.slug}/`)
}
console.log(`Generirano ${PAGES.length} SEO stranica.`)
