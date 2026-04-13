export default function PanoramaStrip({ progress }) {
  // 8 panels of 100vw each = 800vw strip width
  // To show panel N (0-indexed): translateX = -(N/8 * 100)%
  // progress 0→1 maps to panel 0→7: translateX = -(progress * 7/8 * 100)%
  const translateX = -(progress * 87.5)

  return (
    <div
      className="strip"
      style={{ transform: `translateX(${translateX}%)` }}
      aria-hidden="true"
    >
      {/* ── 1. DOBRODOŠLI ── */}
      <div className="strip__panel strip__panel--welcome">
        <div className="strip__panel-overlay strip__panel-overlay--dark" />
        <div className="strip__panel-content">
          <span className="strip__badge">PROXY D.O.O.</span>
          <h1 className="strip__hero-title">Dobrodošli u Proxy</h1>
          <p className="strip__hero-sub">Sve što dom treba</p>
          <div className="strip__scroll-hint">
            <div className="strip__scroll-mouse">
              <div className="strip__scroll-wheel" />
            </div>
            <span>Scrollajte za obilazak</span>
          </div>
        </div>
      </div>

      {/* ── 2. MALOPRODAJA VRATA ── */}
      <div className="strip__panel strip__panel--door-malo">
        <div className="strip__panel-overlay strip__panel-overlay--blue" />
        <a
          href="https://maloprodaja.proxy1.hr"
          className="strip__door strip__door--blue"
          onClick={(e) => { e.preventDefault(); window.location.href = 'https://maloprodaja.proxy1.hr' }}
        >
          <div className="strip__door-frame">
            <div className="strip__door-surface">
              <div className="strip__door-panel-top" />
              <div className="strip__door-panel-bot" />
              <div className="strip__door-handle" />
            </div>
          </div>
          <div className="strip__door-text">
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="strip__door-icon">
              <path d="M6 20L24 6l18 14v20a2 2 0 01-2 2H8a2 2 0 01-2-2V20z" />
              <path d="M18 42V28h12v14" />
            </svg>
            <span className="strip__door-label">MALOPRODAJA</span>
            <span className="strip__door-title">Za vaš dom</span>
            <span className="strip__door-cta">Uđite →</span>
            <span className="strip__door-url">maloprodaja.proxy1.hr</span>
          </div>
        </a>
      </div>

      {/* ── 3. OTIRAČI ── */}
      <div className="strip__panel strip__panel--products">
        <div className="strip__product-grid">
          <div className="strip__product-item">
            <img src="/images/otiraci-globo.jpg" alt="Otirači Globo" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/otiraci-kingtrade.jpg" alt="Otirači Kingtrade" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/otiraci-hotel.jpg" alt="Otirači za hotele" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/otiraci-pristav.jpg" alt="Otirači Pristav" className="strip__product-img" />
          </div>
        </div>
        <div className="strip__product-label">
          <span className="strip__product-cat">Otirači po narudžbi</span>
          <span className="strip__product-desc">Personalizirani otirači za hotele, ugostiteljstvo i poslovne prostore</span>
        </div>
      </div>

      {/* ── 4. KRPE / MOPOVI / KUHINJA ── */}
      <div className="strip__panel strip__panel--products">
        <div className="strip__product-grid">
          <div className="strip__product-item">
            <img src="/images/proxy-display.jpg" alt="Proxy program čišćenja" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/mopovi.jpg" alt="Drveni kuhinjski program" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/retail-display.jpg" alt="Maloprodajni izlog" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/doormats.jpg" alt="Asortiman otirača" className="strip__product-img" />
          </div>
        </div>
        <div className="strip__product-label">
          <span className="strip__product-cat">Čišćenje & Kućanstvo</span>
          <span className="strip__product-desc">Mopovi, krpe, sredstva za čišćenje i kuhinjski pribor</span>
        </div>
      </div>

      {/* ── 5. NOŽEVI INOX ── */}
      <div className="strip__panel strip__panel--products">
        <div className="strip__product-grid strip__product-grid--duo">
          <div className="strip__product-item strip__product-item--wide">
            <img src="/images/nozevi-bonomi.jpg" alt="Bonomi inox noževi" className="strip__product-img" />
          </div>
          <div className="strip__product-item strip__product-item--wide">
            <img src="/images/knives-product.jpg" alt="Bonomi noževi set" className="strip__product-img" />
          </div>
        </div>
        <div className="strip__product-label">
          <span className="strip__product-cat">Inox noževi — Bonomi</span>
          <span className="strip__product-desc">Made in Italy — profesionalni inox noževi u svim bojama</span>
        </div>
      </div>

      {/* ── 6. O NAMA ── */}
      <div className="strip__panel strip__panel--info">
        <div className="strip__panel-overlay strip__panel-overlay--dark" />
        <div className="strip__info-content">
          <span className="strip__badge">O NAMA</span>
          <h2 className="strip__info-title">Proxy d.o.o.</h2>
          <p className="strip__info-text">
            Veleprodajna tvrtka iz Splita specijalizirana za opskrbu širokim asortimanom
            proizvoda za domaćinstvo i ugostiteljstvo. Osnovana 2016. godine od strane
            Roberta Raiča.
          </p>
          <div className="strip__info-stats">
            <div className="strip__info-stat">
              <span className="strip__info-stat-num">792+</span>
              <span className="strip__info-stat-label">Artikala</span>
            </div>
            <div className="strip__info-stat">
              <span className="strip__info-stat-num">24h</span>
              <span className="strip__info-stat-label">Isporuka</span>
            </div>
            <div className="strip__info-stat">
              <span className="strip__info-stat-num">200+</span>
              <span className="strip__info-stat-label">Partnera</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 7. SKLADIŠTE ── */}
      <div className="strip__panel strip__panel--products">
        <div className="strip__product-grid">
          <div className="strip__product-item">
            <img src="/images/warehouse-shelves.jpg" alt="Skladišne police" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/veleprodaja-police.jpg" alt="Veleprodajne role" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/veleprodaja-skladiste.jpg" alt="Otirači na policama" className="strip__product-img" />
          </div>
          <div className="strip__product-item">
            <img src="/images/warehouse-rolls.jpg" alt="Skladište role tkanina" className="strip__product-img" />
          </div>
        </div>
        <div className="strip__product-label">
          <span className="strip__product-cat">Naše skladište</span>
          <span className="strip__product-desc">Više od 792 artikala spremno za brzu isporuku</span>
        </div>
      </div>

      {/* ── 8. VELEPRODAJA VRATA ── */}
      <div className="strip__panel strip__panel--door-velo">
        <div className="strip__panel-overlay strip__panel-overlay--yellow" />
        <a
          href="https://veleprodaja.proxy1.hr"
          className="strip__door strip__door--yellow"
          onClick={(e) => { e.preventDefault(); window.location.href = 'https://veleprodaja.proxy1.hr' }}
        >
          <div className="strip__door-frame">
            <div className="strip__door-surface strip__door-surface--yellow">
              <div className="strip__door-panel-top" />
              <div className="strip__door-panel-bot" />
              <div className="strip__door-handle" />
            </div>
          </div>
          <div className="strip__door-text">
            <svg viewBox="0 0 48 48" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="strip__door-icon">
              <rect x="4" y="18" width="40" height="24" rx="2" />
              <path d="M4 18L24 6l20 12" />
              <path d="M16 42V30h16v12" />
            </svg>
            <span className="strip__door-label">VELEPRODAJA</span>
            <span className="strip__door-title">Za vaš posao</span>
            <span className="strip__door-cta">Uđite →</span>
            <span className="strip__door-url">veleprodaja.proxy1.hr</span>
          </div>
        </a>
      </div>
    </div>
  )
}
