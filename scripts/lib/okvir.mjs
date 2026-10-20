/**
 * Zajednicki okvir svih stranica proxy1.hr: <head>, zaglavlje, podnozje.
 *
 * Svaka stranica (naslovnica, katalog, vodici, partner) prolazi kroz
 * `stranica()`, pa je dizajn jedan: site.css, Lato, navy i zlatna.
 */

export const ORIGIN = 'https://proxy1.hr'
export const VELEPRODAJA = 'https://veleprodaja.proxy1.hr'
export const OTIRACI = 'https://otiraci.proxy1.hr'

/**
 * Kontakti za buduce ovlastene kupce. Izvor: podnozje veleprodaje
 * (Izgled > Prilagodi), 15.10.2026. Promjena ovdje mijenja sve stranice.
 */
export const KONTAKTI = {
  hr: [
    { uloga: 'Uprava, novi partneri', ime: 'Robert Raič', email: 'robert@proxy1.hr' },
    { uloga: 'Komercijala, Novalja do Dubrovnika s otocima', tel: '+385 98 704 043', email: 'komercijala@proxy1.hr' },
    { uloga: 'Komercijala, Rab, Istra i ostatak Hrvatske', tel: '+385 99 467 0564', email: 'komercijala2@proxy1.hr' },
    { uloga: 'Uprava, otirači s logotipom', ime: 'Neda Raič', tel: '+385 99 435 30 40', email: 'info@proxy1.hr' },
  ],
  en: [
    { uloga: 'Management, new partners', ime: 'Robert Raič', email: 'robert@proxy1.hr' },
    { uloga: 'Sales, Novalja to Dubrovnik and islands', tel: '+385 98 704 043', email: 'komercijala@proxy1.hr' },
    { uloga: 'Sales, Rab, Istria and the rest of Croatia', tel: '+385 99 467 0564', email: 'komercijala2@proxy1.hr' },
    { uloga: 'Management, logo doormats', ime: 'Neda Raič', tel: '+385 99 435 30 40', email: 'info@proxy1.hr' },
  ],
}

export const TVRTKA = {
  naziv: 'Proxy d.o.o.',
  adresa: 'Solinska 49, Dujmovača',
  mjesto: '21000 Split',
  oib: '79145895043',
  radnoVrijeme: { hr: 'ponedjeljak do petak, 7 do 15 h', en: 'Monday to Friday, 7 am to 3 pm' },
}

export const esc = (s) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const tel = (t) => 'tel:' + t.replace(/[^+\d]/g, '')

export const STRELICA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'

const T = {
  hr: {
    nav: [
      ['/katalog/', 'Katalog', 'katalog'],
      [OTIRACI + '/', 'Otirači s logotipom', 'otiraci'],
      ['/postanite-partner/', 'Postanite partner', 'partner'],
      ['/#kontakt', 'Kontakt', 'kontakt'],
    ],
    prijava: 'Prijava za partnere',
    izbornik: 'Izbornik',
    skok: 'Preskoči na sadržaj',
    jezik: ['/en/', 'English'],
    ftrOpis: 'Veleprodaja pribora za čišćenje, kuhinju i dom za trgovine, hotele i ugostitelje. Split, od 2016.',
    ftrKanali: 'Prodajni kanali',
    ftrKanaliL: [[VELEPRODAJA + '/', 'Veleprodajni webshop'], [OTIRACI + '/', 'Otirači s logotipom'], ['/katalog/', 'Katalog asortimana']],
    ftrPartneri: 'Za trgovce',
    ftrPartneriL: [['/postanite-partner/', 'Postanite partner'], ['/vodic-kako-odabrati-veleprodajnog-dobavljaca/', 'Kako odabrati dobavljača'], ['/vodic-kako-otvoriti-trgovinu-kucanskim-potrepstinama/', 'Kako otvoriti trgovinu']],
    ftrPravno: 'Tvrtka',
    ftrPravnoL: [['/politika-privatnosti/', 'Politika privatnosti'], ['/politika-kolacica/', 'Politika kolačića']],
    kolacici: 'Postavke kolačića',
  },
  en: {
    nav: [
      ['/katalog/', 'Catalogue', 'katalog'],
      [OTIRACI + '/', 'Logo doormats', 'otiraci'],
      ['/en/become-a-partner/', 'Become a partner', 'partner'],
      ['/en/#kontakt', 'Contact', 'kontakt'],
    ],
    prijava: 'Partner login',
    izbornik: 'Menu',
    skok: 'Skip to content',
    jezik: ['/', 'Hrvatski'],
    ftrOpis: 'Wholesale cleaning, kitchen and household supplies for stores, hotels and hospitality. Split, Croatia, since 2016.',
    ftrKanali: 'Sales channels',
    ftrKanaliL: [[VELEPRODAJA + '/', 'Wholesale webshop'], [OTIRACI + '/', 'Logo doormats'], ['/katalog/', 'Product catalogue (HR)']],
    ftrPartneri: 'For retailers',
    ftrPartneriL: [['/en/become-a-partner/', 'Become a partner']],
    ftrPravno: 'Company',
    ftrPravnoL: [['/politika-privatnosti/', 'Privacy policy'], ['/politika-kolacica/', 'Cookie policy']],
    kolacici: 'Cookie settings',
  },
}

/**
 * @param {object} o
 * @param {'hr'|'en'} o.lang
 * @param {string} o.naslov       <title>
 * @param {string} o.opis         meta description
 * @param {string} o.put          kanonska putanja ("/katalog/")
 * @param {string} o.tijelo       HTML unutar <main>
 * @param {string} [o.aktivno]    kljuc aktivne stavke izbornika
 * @param {object[]} [o.ld]       JSON-LD objekti
 * @param {{hr?:string,en?:string}} [o.hreflang] parovi jezika
 * @param {string} [o.slika]      og:image (apsolutna ili putanja)
 * @param {boolean} [o.noindex]
 */
export function stranica(o) {
  const lang = o.lang || 'hr'
  const t = T[lang]
  const url = ORIGIN + o.put
  const slika = o.slika ? (o.slika.startsWith('http') ? o.slika : ORIGIN + o.slika) : ORIGIN + '/images/og-card.jpg'
  const hl = o.hreflang
    ? [
        o.hreflang.hr && `<link rel="alternate" hreflang="hr" href="${ORIGIN}${o.hreflang.hr}">`,
        o.hreflang.en && `<link rel="alternate" hreflang="en" href="${ORIGIN}${o.hreflang.en}">`,
        o.hreflang.hr && `<link rel="alternate" hreflang="x-default" href="${ORIGIN}${o.hreflang.hr}">`,
      ].filter(Boolean).join('\n')
    : ''
  const ld = (o.ld || []).map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join('\n')

  const nav = t.nav
    .map(([href, label, k]) => `<a href="${href}"${o.aktivno === k ? ' aria-current="page"' : ''}>${esc(label)}</a>`)
    .join('')

  return `<!doctype html>
<html lang="${lang}">
<head>
<script src="/consent.js?v=2" data-ga="G-Q8GQ6GBK77" data-mjesto="proxy1.hr" data-politika="/politika-kolacica/"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(o.naslov)}</title>
<meta name="description" content="${esc(o.opis)}">
<meta name="robots" content="${o.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">
<link rel="canonical" href="${url}">
${hl}
<meta name="theme-color" content="#0c1b30">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/favicon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Proxy d.o.o.">
<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'hr_HR'}">
<meta property="og:title" content="${esc(o.naslov)}">
<meta property="og:description" content="${esc(o.opis)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${esc(slika)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/fonts/lato-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/lato-900-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/site.css?v=${o.verzija || '1'}">
${ld}
</head>
<body>
<a class="skok" href="#sadrzaj">${esc(t.skok)}</a>
<header class="hdr">
  <div class="wrap hdr-in">
    <a class="hdr-logo" href="${lang === 'en' ? '/en/' : '/'}"><img src="/images/proxy-logo-zlatni.png" alt="Proxy d.o.o." width="870" height="474"></a>
    <nav class="hdr-nav" aria-label="${lang === 'en' ? 'Main' : 'Glavni izbornik'}">${nav}</nav>
    <a class="hdr-jezik" href="${t.jezik[0]}" hreflang="${lang === 'en' ? 'hr' : 'en'}">${t.jezik[1]}</a>
    <a class="btn btn-gold btn-sm hdr-prijava" href="${VELEPRODAJA}/">${esc(t.prijava)}</a>
    <details class="hdr-izb">
      <summary>${esc(t.izbornik)}</summary>
      <div class="hdr-izb-lista">${nav}<a href="${t.jezik[0]}">${t.jezik[1]}</a><a class="btn btn-gold" href="${VELEPRODAJA}/">${esc(t.prijava)}</a></div>
    </details>
  </div>
</header>
<main id="sadrzaj">
${o.tijelo}
</main>
<footer class="ftr na-tamnom">
  <div class="wrap">
    <div class="ftr-in">
      <div>
        <img src="/images/proxy-logo-zlatni.png" alt="Proxy d.o.o." width="870" height="474" loading="lazy">
        <p style="margin-top:14px;max-width:40ch">${esc(t.ftrOpis)}</p>
      </div>
      <div><h2>${esc(t.ftrKanali)}</h2><ul>${t.ftrKanaliL.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div>
      <div><h2>${esc(t.ftrPartneri)}</h2><ul>${t.ftrPartneriL.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ul></div>
      <div><h2>${esc(t.ftrPravno)}</h2><ul>${t.ftrPravnoL.map(([h, l]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}<li><a href="#" onclick="window.proxyOpenConsent&&window.proxyOpenConsent();return false">${esc(t.kolacici)}</a></li></ul></div>
    </div>
    <div class="ftr-dno">
      <span>${TVRTKA.naziv}, ${TVRTKA.adresa}, ${TVRTKA.mjesto}. OIB ${TVRTKA.oib}</span>
      <span>© ${new Date().getFullYear()} ${TVRTKA.naziv} ${lang === 'en' ? 'Web design and maintenance' : 'Web dizajn i održavanje'}: <a href="https://klikoteka.hr/" target="_blank" rel="noopener noreferrer">Klikoteka d.o.o.</a></span>
    </div>
  </div>
</footer>
</body>
</html>
`
}
