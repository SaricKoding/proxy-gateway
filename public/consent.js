/**
 * PROXY d.o.o. — GDPR cookie consent (Google Consent Mode v2)
 *
 * Single source of truth for analytics consent across:
 *   - React gateway (proxy-gateway/index.html)
 *   - Static legal pages (politika-privatnosti, politika-kolacica)
 *
 * What it does:
 *   1. Sets Google Consent Mode v2 defaults (everything denied) BEFORE gtag.js loads.
 *   2. Loads gtag.js asynchronously and configs GA4 (G-Q8GQ6GBK77).
 *   3. Reads stored consent from localStorage and applies it.
 *   4. If no choice stored, renders a bilingual banner (HR/EN) with Accept / Reject.
 *   5. Exposes `window.proxyOpenConsent()` and listens for `proxy:open-cookie-banner`
 *      so the React footer's "Cookie settings" link can reopen the banner.
 *
 * Meta Pixel (Facebook): currently disabled. To enable, set META_ENABLED = true
 * and put the pixel ID in META_PIXEL_ID. The pixel then fires only on accept.
 */
(function () {
  'use strict';

  // ============================================================
  // CONFIG
  // ============================================================
  var GA_ID = 'G-Q8GQ6GBK77';
  var STORAGE_KEY = 'proxy_cookie_consent';

  var META_ENABLED = false;
  var META_PIXEL_ID = '';

  // ============================================================
  // I18N — matches src/i18n/index.js `cookies` block
  // ============================================================
  var lang = (document.documentElement.lang || 'hr').toLowerCase();
  var isEN = lang.indexOf('en') === 0;

  var T = isEN
    ? {
        title: 'Cookies on proxy1.hr',
        text: 'We use essential cookies to run the site. Analytics and statistics are used only with your consent. Read our',
        linkLabel: 'Cookie policy',
        accept: 'Accept',
        reject: 'Reject',
        aria: 'Cookie consent banner',
      }
    : {
        title: 'Kolačići na proxy1.hr',
        text: 'Koristimo nužne kolačiće za rad stranice. Statistika i analitika koriste se isključivo uz Vaš pristanak. Više u',
        linkLabel: 'Politici kolačića',
        accept: 'Prihvati',
        reject: 'Odbij',
        aria: 'Traka za pristanak na kolačiće',
      };

  // ============================================================
  // GOOGLE CONSENT MODE V2
  // ============================================================
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // Deny everything except strictly necessary until the user consents.
  // `wait_for_update` gives our script up to 500ms to call `consent update`
  // before gtag.js sends any beacons.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
  });

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  (function loadGtag() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  })();

  // ============================================================
  // STORAGE
  // ============================================================
  function readConsent() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      if (p && (p.status === 'accepted' || p.status === 'rejected')) return p;
      return null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(accepted) {
    var payload = {
      status: accepted ? 'accepted' : 'rejected',
      version: 1,
      ts: new Date().toISOString(),
    };
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload)); } catch (e) {}
    applyConsent(accepted);
    try {
      window.dispatchEvent(new CustomEvent('proxy:cookie-consent', { detail: { status: payload.status } }));
    } catch (e) {}
  }

  function applyConsent(accepted) {
    gtag('consent', 'update', {
      analytics_storage: accepted ? 'granted' : 'denied',
      ad_storage: accepted ? 'granted' : 'denied',
      ad_user_data: accepted ? 'granted' : 'denied',
      ad_personalization: accepted ? 'granted' : 'denied',
    });

    if (META_ENABLED && accepted) loadMetaPixel();
  }

  function loadMetaPixel() {
    if (!META_PIXEL_ID || window._proxyFbqLoaded) return;
    window._proxyFbqLoaded = true;
    // Standard Meta Pixel snippet (kept verbatim from Meta docs).
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  // ============================================================
  // BANNER UI
  // ============================================================
  var STYLE_ID = 'proxy-consent-style';
  var BANNER_ID = 'proxy-consent-banner';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var css =
      '#' + BANNER_ID + ' {' +
        'position: fixed; left: 16px; right: 16px; bottom: 16px; z-index: 9999;' +
        'background: #0B1E3A; color: #fff;' +
        'border: 1px solid rgba(255,255,255,0.08);' +
        'border-radius: 12px;' +
        "font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;" +
        'box-shadow: 0 20px 60px rgba(0,0,0,0.35);' +
        'opacity: 0; transform: translateY(20px);' +
        'transition: opacity 0.3s ease, transform 0.3s ease;' +
        'max-width: 880px; margin: 0 auto;' +
      '}' +
      '#' + BANNER_ID + '.is-visible { opacity: 1; transform: translateY(0); }' +
      '#' + BANNER_ID + ' .pcb-inner {' +
        'display: grid; grid-template-columns: 1fr auto; gap: 20px;' +
        'align-items: center; padding: 18px 22px;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-text strong {' +
        "display: block; font-family: 'Barlow Condensed', 'Inter', sans-serif;" +
        'font-weight: 700; font-size: 17px; letter-spacing: 0.3px; margin-bottom: 4px; color: #fff;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-text p {' +
        'margin: 0; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.85);' +
      '}' +
      '#' + BANNER_ID + ' .pcb-text a {' +
        'color: #D7B561; text-decoration: underline; text-underline-offset: 2px;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-text a:hover { color: #E8C77A; }' +
      '#' + BANNER_ID + ' .pcb-actions {' +
        'display: inline-flex; gap: 10px; flex-shrink: 0;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-btn {' +
        'cursor: pointer; appearance: none; font: inherit; font-weight: 600; font-size: 14px;' +
        'border-radius: 8px; padding: 10px 18px; border: 1px solid transparent;' +
        'transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-btn:focus-visible {' +
        'outline: 2px solid #D7B561; outline-offset: 2px;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-btn-primary {' +
        'background: #BF922F; color: #0B1220; border-color: #BF922F;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-btn-primary:hover {' +
        'background: #D7B561; border-color: #D7B561;' +
      '}' +
      '#' + BANNER_ID + ' .pcb-btn-secondary {' +
        'background: transparent; color: #fff; border-color: rgba(255,255,255,0.35);' +
      '}' +
      '#' + BANNER_ID + ' .pcb-btn-secondary:hover {' +
        'background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.6);' +
      '}' +
      '@media (max-width: 640px) {' +
        '#' + BANNER_ID + ' { left: 12px; right: 12px; bottom: 12px; }' +
        '#' + BANNER_ID + ' .pcb-inner { grid-template-columns: 1fr; gap: 14px; padding: 16px 18px; }' +
        '#' + BANNER_ID + ' .pcb-actions { display: grid; grid-template-columns: 1fr 1fr; width: 100%; }' +
        '#' + BANNER_ID + ' .pcb-btn { padding: 12px 14px; }' +
      '}';

    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildBanner() {
    injectStyles();
    var el = document.createElement('div');
    el.id = BANNER_ID;
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', T.aria);
    el.setAttribute('aria-live', 'polite');
    el.innerHTML =
      '<div class="pcb-inner">' +
        '<div class="pcb-text">' +
          '<strong>' + T.title + '</strong>' +
          '<p>' + T.text + ' <a href="/politika-kolacica">' + T.linkLabel + '</a>.</p>' +
        '</div>' +
        '<div class="pcb-actions">' +
          '<button type="button" class="pcb-btn pcb-btn-secondary" data-action="reject">' + T.reject + '</button>' +
          '<button type="button" class="pcb-btn pcb-btn-primary" data-action="accept">' + T.accept + '</button>' +
        '</div>' +
      '</div>';

    el.querySelector('[data-action="reject"]').addEventListener('click', function () {
      writeConsent(false);
      hideBanner();
    });
    el.querySelector('[data-action="accept"]').addEventListener('click', function () {
      writeConsent(true);
      hideBanner();
    });
    return el;
  }

  var bannerEl = null;
  var hideTimer = null;

  function showBanner() {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    if (!bannerEl) bannerEl = buildBanner();
    if (!bannerEl.parentNode) document.body.appendChild(bannerEl);
    // Double-rAF so the transition runs even on fresh insert.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        bannerEl.classList.add('is-visible');
      });
    });
  }

  function hideBanner() {
    if (!bannerEl) return;
    bannerEl.classList.remove('is-visible');
    hideTimer = setTimeout(function () {
      if (bannerEl && bannerEl.parentNode) bannerEl.parentNode.removeChild(bannerEl);
    }, 350);
  }

  // ============================================================
  // PUBLIC API
  // ============================================================
  window.proxyOpenConsent = function () {
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    showBanner();
  };

  // Footer "Cookie settings" button dispatches this event (kept for back-compat
  // with src/components/Footer.jsx).
  window.addEventListener('proxy:open-cookie-banner', function () { showBanner(); });

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    var stored = readConsent();
    if (stored) {
      applyConsent(stored.status === 'accepted');
    } else {
      showBanner();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
