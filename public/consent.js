/**
 * PROXY d.o.o., privola za kolačiće (zajednička za proxy1.hr i otiraci.proxy1.hr)
 *
 * Verzija 2 (15.10.2026.). Strogi način:
 *   - Google Analytics 4 se NE učitava dok posjetitelj ne klikne "Prihvati".
 *     Do tada s Googleom nema nikakve veze (ni anonimnih "pingova").
 *   - "Odbij" i povlačenje privole brišu postojeće _ga kolačiće.
 *   - Oglašivački signali (ad_storage, ad_user_data, ad_personalization) su
 *     uvijek odbijeni: oglase ne koristimo.
 *   - Odabir se pamti 12 mjeseci, nakon toga se pita ponovno.
 *   - "Odbij" i "Prihvati" su jednako istaknuti; traka ne blokira stranicu.
 *
 * Postavke se čitaju s oznake <script>:
 *   data-ga        GA4 oznaka (npr. G-XXXX); bez nje se analitika ne učitava
 *   data-mjesto    naziv stranice u traci ("proxy1.hr")
 *   data-politika  putanja politike kolačića ("/politika-kolacica/")
 * Isto se može zadati na <html> kao data-pc-ga, data-pc-mjesto, data-pc-politika.
 *
 * Javni API: window.proxyOpenConsent() ponovno otvara traku (poveznica
 * "Postavke kolačića" u podnožju).
 */
(function () {
  'use strict';

  var me = document.currentScript;
  // Postavke s oznake <script>, ili s <html data-pc-*> kad skriptu umece okvir
  // (Next.js) pa oznaka nema nase atribute.
  var cfg = function (k, d) {
    return (me && me.getAttribute('data-' + k)) || document.documentElement.getAttribute('data-pc-' + k) || d;
  };
  var GA_ID = cfg('ga', '');
  var MJESTO = cfg('mjesto', location.hostname);
  var POLITIKA = cfg('politika', '/politika-kolacica/');
  var KLJUC = 'proxy_cookie_consent';
  var VERZIJA = 2;
  var TRAJANJE = 365 * 24 * 60 * 60 * 1000;

  var en = (document.documentElement.lang || 'hr').toLowerCase().indexOf('en') === 0;
  var T = en
    ? { title: 'Cookies on ' + MJESTO, text: 'We use only the storage the site needs to work. With your consent we also use Google Analytics to see how the site is used. You can change your choice at any time in the footer.', link: 'Cookie policy', accept: 'Accept analytics', reject: 'Reject', aria: 'Cookie consent' }
    : { title: 'Kolačići na ' + MJESTO, text: 'Koristimo samo ono što je nužno za rad stranice. Uz vaš pristanak koristimo i Google Analytics, da vidimo kako se stranica koristi. Odabir možete promijeniti u svako doba u podnožju stranice.', link: 'Politika kolačića', accept: 'Prihvati analitiku', reject: 'Odbij', aria: 'Pristanak na kolačiće' };

  /* ---------------------------------------------------- Google, tek uz privolu */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });

  var ucitano = false;
  function ucitajAnalitiku() {
    if (ucitano || !GA_ID) return;
    ucitano = true;
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  /** Briše _ga kolačiće na ovoj i nadređenoj domeni (GA ih piše na "proxy1.hr"). */
  function obrisiAnalitiku() {
    gtag('consent', 'update', { analytics_storage: 'denied' });
    var dijelovi = location.hostname.split('.');
    var domene = [location.hostname];
    for (var i = 1; i < dijelovi.length - 1; i++) domene.push('.' + dijelovi.slice(i).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var ime = c.split('=')[0].trim();
      if (!/^_ga/.test(ime) && ime !== '_gid' && ime !== '_gat') return;
      domene.forEach(function (d) {
        document.cookie = ime + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
      });
      document.cookie = ime + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    });
  }

  /* ---------------------------------------------------- pohrana odabira */
  function procitaj() {
    try {
      var p = JSON.parse(localStorage.getItem(KLJUC) || 'null');
      if (!p || p.version !== VERZIJA) return null;
      if (p.status !== 'accepted' && p.status !== 'rejected') return null;
      if (Date.now() - new Date(p.ts).getTime() > TRAJANJE) return null;
      return p;
    } catch (e) { return null; }
  }
  function zapisi(prihvaceno) {
    try {
      localStorage.setItem(KLJUC, JSON.stringify({ status: prihvaceno ? 'accepted' : 'rejected', version: VERZIJA, ts: new Date().toISOString() }));
    } catch (e) {}
    if (prihvaceno) ucitajAnalitiku(); else obrisiAnalitiku();
    try { window.dispatchEvent(new CustomEvent('proxy:cookie-consent', { detail: { status: prihvaceno ? 'accepted' : 'rejected' } })); } catch (e) {}
  }

  /* ---------------------------------------------------- traka */
  var ID = 'proxy-consent-banner';
  function stil() {
    if (document.getElementById(ID + '-stil')) return;
    var b = '#' + ID;
    var css =
      b + '{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:920px;margin:0 auto;background:#0c1b30;color:#fff;border-top:3px solid #c9a84c;font-family:Lato,"Segoe UI",system-ui,sans-serif;opacity:0;transform:translateY(16px);transition:opacity .3s ease,transform .35s cubic-bezier(.2,0,0,1)}' +
      b + '.vidljiv{opacity:1;transform:none}' +
      b + ' .pc-in{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;padding:18px 22px}' +
      b + ' strong{display:block;font-size:17px;font-weight:900;margin-bottom:4px}' +
      b + ' p{margin:0;font-size:15px;line-height:1.55;color:rgba(255,255,255,.85)}' +
      b + ' a{color:#fff;text-decoration:underline;text-decoration-color:#c9a84c;text-underline-offset:3px}' +
      b + ' .pc-btns{display:flex;gap:10px}' +
      b + ' button{cursor:pointer;font:inherit;font-weight:700;font-size:15px;min-height:44px;padding:10px 18px;border:1px solid #c9a84c;border-radius:0;transition:background .2s ease,color .2s ease}' +
      b + ' .pc-ne{background:transparent;color:#fff;border-color:rgba(255,255,255,.6)}' +
      b + ' .pc-ne:hover{background:#fff;color:#0c1b30;border-color:#fff}' +
      b + ' .pc-da{background:#c9a84c;color:#0c1b30}' +
      b + ' .pc-da:hover{background:#d9bb63}' +
      b + ' button:focus-visible{outline:2px solid #c9a84c;outline-offset:2px}' +
      '@media (max-width:640px){' + b + '{left:10px;right:10px;bottom:10px}' + b + ' .pc-in{grid-template-columns:1fr;gap:14px;padding:16px}' + b + ' .pc-btns{display:grid;grid-template-columns:1fr 1fr}}' +
      '@media (prefers-reduced-motion:reduce){' + b + '{transition:none}}';
    var s = document.createElement('style');
    s.id = ID + '-stil';
    s.textContent = css;
    document.head.appendChild(s);
  }

  var traka = null;
  function prikazi() {
    stil();
    if (!traka) {
      traka = document.createElement('div');
      traka.id = ID;
      traka.setAttribute('role', 'region');
      traka.setAttribute('aria-label', T.aria);
      traka.innerHTML =
        '<div class="pc-in"><div><strong>' + T.title + '</strong><p>' + T.text + ' <a href="' + POLITIKA + '">' + T.link + '</a>.</p></div>' +
        '<div class="pc-btns"><button type="button" class="pc-ne">' + T.reject + '</button><button type="button" class="pc-da">' + T.accept + '</button></div></div>';
      traka.querySelector('.pc-ne').addEventListener('click', function () { zapisi(false); sakrij(); });
      traka.querySelector('.pc-da').addEventListener('click', function () { zapisi(true); sakrij(); });
    }
    if (!traka.parentNode) document.body.appendChild(traka);
    requestAnimationFrame(function () { requestAnimationFrame(function () { traka.classList.add('vidljiv'); }); });
  }
  function sakrij() {
    if (!traka) return;
    traka.classList.remove('vidljiv');
    setTimeout(function () { if (traka && traka.parentNode) traka.parentNode.removeChild(traka); }, 350);
  }

  window.proxyOpenConsent = function () { prikazi(); };
  window.addEventListener('proxy:open-cookie-banner', prikazi);

  function init() {
    var p = procitaj();
    if (p && p.status === 'accepted') ucitajAnalitiku();
    else if (p) obrisiAnalitiku();
    else prikazi();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
