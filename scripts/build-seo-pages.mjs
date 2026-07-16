/**
 * Generira statične SEO stranice (kategorije veleprodaje, postanite-partner, vodiči)
 * iz content/seo-pages.mjs u dist/<slug>/index.html.
 *
 * Pokreće se u build pipelineu NAKON vite build (vidi package.json).
 * Dizajn prati brand (navy #0B1E3A + gold, Barlow Condensed + Inter) i stil
 * postojećih statičnih stranica (politika-privatnosti).
 */
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PAGES } from '../content/seo-pages.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const ORIGIN = 'https://proxy1.hr'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const CSS = `
  :root {
    --blue-900:#0B1E3A; --blue-800:#112A52; --blue-700:#17386C;
    --gold-600:#BF922F; --gold-500:#D4A74A; --gold-700:#A47A20; --gold-100:#FAF1DC;
    --ink-900:#0B1220; --ink-700:#2C384E; --ink-500:#5A667D;
    --ink-200:#E5E8EE; --ink-100:#F3F5F8; --ink-50:#F9FAFC;
  }
  *,*::before,*::after { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
  body { margin:0; font-family:'Inter',sans-serif; font-size:16px; line-height:1.65; color:var(--ink-900); background:var(--ink-50); }
  a { color: var(--blue-700); text-decoration: underline; text-underline-offset: 2px; }
  a:hover { color: var(--gold-700); }
  .topbar { background:var(--blue-900); color:#fff; padding:14px 20px; display:flex; align-items:center; gap:18px; flex-wrap:wrap; }
  .topbar a { color:#fff; text-decoration:none; font-weight:600; font-size:14px; }
  .topbar a:hover { color:var(--gold-500); }
  .topbar .brand { font-family:'Barlow Condensed',sans-serif; font-size:18px; letter-spacing:.06em; }
  .topbar .sep { flex:1; }
  main { max-width:840px; margin:0 auto; padding:44px 20px 72px; }
  .crumbs { font-size:13px; color:var(--ink-500); margin:0 0 18px; }
  .crumbs a { color:var(--ink-500); }
  .eyebrow { color:var(--gold-700); font-weight:700; font-size:13px; letter-spacing:.14em; text-transform:uppercase; margin:0 0 10px; }
  h1 { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:clamp(32px,5vw,46px); line-height:1.08; margin:0 0 14px; color:var(--blue-900); }
  .lead { font-size:18px; color:var(--ink-700); margin:0 0 30px; max-width:64ch; }
  h2 { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:26px; margin:38px 0 12px; color:var(--blue-900); }
  h3 { font-weight:600; font-size:17px; margin:22px 0 6px; }
  p, li { color:var(--ink-700); }
  ul, ol { padding-left:22px; }
  li { margin-bottom:6px; }
  table { border-collapse:collapse; width:100%; margin:14px 0; font-size:15px; }
  th, td { border:1px solid var(--ink-200); padding:9px 12px; text-align:left; }
  th { background:var(--ink-100); font-weight:600; color:var(--blue-900); }
  .products { display:grid; grid-template-columns:repeat(auto-fill,minmax(230px,1fr)); gap:10px; margin:16px 0; padding:0; list-style:none; }
  .products li { display:flex; align-items:baseline; gap:9px; text-align:left; background:#fff; border:1px solid var(--ink-200); border-radius:10px; padding:11px 14px; font-size:14.5px; margin:0; }
  .products li::before { content:"✦"; color:var(--gold-500); font-size:10px; flex:none; }
  .gallery { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:12px; margin:4px 0 28px; }
  .gallery figure { margin:0; background:#fff; border:1px solid var(--ink-200); border-radius:12px; overflow:hidden; }
  .gallery img { width:100%; height:auto; display:block; aspect-ratio:4/3; object-fit:cover; }
  .gallery figcaption { font-size:12.5px; line-height:1.4; padding:8px 11px; color:var(--ink-500); border-top:1px solid var(--ink-100); }
  .note { font-size:13.5px; color:var(--ink-500); }
  .cta { background:var(--blue-900); border-radius:16px; padding:28px 30px; margin:42px 0; color:#fff; }
  .cta h2 { color:#fff; margin-top:0; }
  .cta p { color:#D7DEEA; }
  .cta .btns { display:flex; gap:12px; flex-wrap:wrap; margin-top:18px; }
  .btn { display:inline-block; padding:12px 22px; border-radius:999px; font-weight:600; font-size:15px; text-decoration:none; }
  .btn-gold { background:var(--gold-500); color:var(--blue-900); }
  .btn-gold:hover { background:var(--gold-600); color:var(--blue-900); }
  .btn-ghost { border:1.5px solid rgba(255,255,255,.45); color:#fff; }
  .btn-ghost:hover { border-color:var(--gold-500); color:var(--gold-500); }
  .faq { margin:8px 0 0; }
  .faq h3 { color:var(--blue-900); }
  .related { margin-top:44px; padding-top:24px; border-top:1px solid var(--ink-200); }
  .related h2 { font-size:22px; margin-top:0; }
  .related ul { list-style:none; padding:0; display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:8px; }
  .related a { display:block; background:#fff; border:1px solid var(--ink-200); border-radius:10px; padding:11px 14px; font-size:14.5px; text-decoration:none; font-weight:600; color:var(--blue-900); }
  .related a:hover { border-color:var(--gold-500); color:var(--gold-700); }
  .footer { margin-top:52px; padding-top:20px; border-top:1px solid var(--ink-200); font-size:14px; color:var(--ink-500); }
  .footer a { color:var(--ink-500); }
  .updated { color:var(--ink-500); font-size:14px; margin:0 0 26px; }
`

/**
 * Galerije stranica kategorija: stvarne fotografije proizvoda (ERP sync)
 * pripremljene u /public/images/seo/ (720x540, jpg + webp).
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
}

function jsonLd(page) {
  const url = `${ORIGIN}/${page.slug}/`
  const blocks = []

  blocks.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Proxy d.o.o.', item: `${ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: page.h1, item: url },
    ],
  })

  if (page.type === 'guide') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.h1,
      description: page.metaDesc,
      inLanguage: 'hr',
      datePublished: page.datePublished || '2026-07-16',
      dateModified: page.datePublished || '2026-07-16',
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
      areaServed: { '@type': 'Country', name: 'Hrvatska' },
      audience: { '@type': 'BusinessAudience', audienceType: 'Trgovine, ugostiteljski objekti, hoteli, ustanove' },
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
  return blocks.map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`).join('\n')
}

function render(page, all) {
  const url = `${ORIGIN}/${page.slug}/`
  const related = (page.related || [])
    .map((slug) => all.find((p) => p.slug === slug))
    .filter(Boolean)

  const productsHtml = page.products?.length
    ? `<h2>${esc(page.productsTitle || 'Primjeri iz asortimana')}</h2>
       <ul class="products">${page.products.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
       <p class="note">Prikaz je informativan, potpuni katalog s veleprodajnim cijenama dostupan je ugovornim partnerima u B2B webshopu.</p>`
    : ''

  const faqHtml = page.faq?.length
    ? `<h2>Česta pitanja</h2><div class="faq">${page.faq
        .map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`)
        .join('')}</div>`
    : ''

  const relatedHtml = related.length
    ? `<div class="related"><h2>Povezano</h2><ul>${related
        .map((r) => `<li><a href="/${r.slug}/">${esc(r.h1)}</a></li>`)
        .join('')}</ul></div>`
    : ''

  const dateHtml = page.type === 'guide'
    ? `<p class="updated">Objavljeno: 16. srpnja 2026. · Proxy d.o.o., Split</p>` : ''

  const gallery = GALLERIES[page.slug]
  const galleryHtml = gallery?.length
    ? `<div class="gallery">${gallery
        .map(
          (g) => `<figure><picture><source srcset="/images/seo/${g.img}.webp" type="image/webp" /><img src="/images/seo/${g.img}.jpg" alt="${esc(g.alt)} - Proxy veleprodaja" title="${esc(g.alt)}" width="720" height="540" loading="lazy" decoding="async" /></picture><figcaption>${esc(g.alt)}</figcaption></figure>`
        )
        .join('')}</div>`
    : ''

  return `<!doctype html>
<html lang="hr">
<head>
<script src="/consent.js"></script>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.metaDesc)}" />
<meta name="robots" content="index, follow, max-image-preview:large" />
<link rel="canonical" href="${url}" />
<link rel="icon" href="/favicon.png" />
<meta property="og:title" content="${esc(page.title)}" />
<meta property="og:description" content="${esc(page.metaDesc)}" />
<meta property="og:type" content="${page.type === 'guide' ? 'article' : 'website'}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${ORIGIN}/images/og-card.jpg" />
<meta property="og:locale" content="hr_HR" />
<meta property="og:site_name" content="Proxy d.o.o." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>${CSS}</style>
${jsonLd(page)}
</head>
<body>
<header class="topbar">
  <a class="brand" href="/">PROXY d.o.o.</a>
  <span class="sep"></span>
  <a href="/postanite-partner/">Postanite partner</a>
  <a href="https://veleprodaja.proxy1.hr" rel="noopener">Veleprodaja</a>
  <a href="https://maloprodaja.proxy1.hr" rel="noopener">Maloprodaja</a>
</header>
<main>
  <nav class="crumbs" aria-label="Navigacijski put"><a href="/">Proxy d.o.o.</a> › ${esc(page.h1)}</nav>
  <p class="eyebrow">${esc(page.eyebrow)}</p>
  <h1>${esc(page.h1)}</h1>
  ${dateHtml}
  <p class="lead">${esc(page.lead)}</p>
  ${galleryHtml}
  ${page.body}
  ${productsHtml}
  ${faqHtml}
  <div class="cta">
    <h2>${esc(page.ctaTitle || 'Tražite pouzdanog veleprodajnog dobavljača?')}</h2>
    <p>${esc(page.ctaText || 'Proxy d.o.o. iz Splita opskrbljuje 300+ partnera u cijeloj Hrvatskoj, trgovine, hotele, restorane i ustanove. Isporuka u 3 radna dana, bonitet A+, briga o Vašoj polici.')}</p>
    <div class="btns">
      <a class="btn btn-gold" href="/postanite-partner/">Postanite partner</a>
      <a class="btn btn-ghost" href="mailto:info@proxy1.hr">info@proxy1.hr</a>
    </div>
  </div>
  ${relatedHtml}
  <footer class="footer">
    <p>Proxy d.o.o. · Solinska 49, Dujmovača, 21000 Split · <a href="mailto:info@proxy1.hr">info@proxy1.hr</a></p>
    <p><a href="/">Početna</a> · <a href="/postanite-partner/">Postanite partner</a> · <a href="/politika-privatnosti/">Politika privatnosti</a> · <a href="/politika-kolacica/">Politika kolačića</a></p>
  </footer>
</main>
</body>
</html>
`
}

for (const page of PAGES) {
  const dir = path.join(DIST, page.slug)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, 'index.html'), render(page, PAGES), 'utf8')
  console.log(`OK  /${page.slug}/`)
}
console.log(`Generirano ${PAGES.length} SEO stranica.`)
