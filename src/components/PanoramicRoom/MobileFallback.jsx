export default function MobileFallback() {
  return (
    <div className="mobile-fallback">
      {/* Hero */}
      <section className="mobile-hero">
        <div className="mobile-hero__bg" />
        <div className="mobile-hero__content">
          <img src="/images/logo-final.png" alt="Proxy d.o.o." className="mobile-hero__logo" />
          <h1 className="mobile-hero__title">Sve što dom treba</h1>
          <p className="mobile-hero__subtitle">
            Kvalitetni proizvodi za dom i posao. Odaberite kako želite kupovati.
          </p>
        </div>
      </section>

      {/* Doors */}
      <section className="mobile-doors">
        <a href="https://maloprodaja.proxy1.hr" className="mobile-door mobile-door--blue">
          <div className="mobile-door__icon">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 20L24 6l18 14v20a2 2 0 01-2 2H8a2 2 0 01-2-2V20z" />
              <path d="M18 42V28h12v14" />
            </svg>
          </div>
          <span className="mobile-door__label">MALOPRODAJA</span>
          <h2 className="mobile-door__title">Za vaš dom</h2>
          <p className="mobile-door__subtitle">Kućanski pribor, oprema za čišćenje i sve za svakodnevni život</p>
          <span className="mobile-door__cta">Uđite u trgovinu</span>
        </a>

        <div className="mobile-doors__divider"><span>ILI</span></div>

        <a href="https://veleprodaja.proxy1.hr" className="mobile-door mobile-door--yellow">
          <div className="mobile-door__icon">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="4" y="18" width="40" height="24" rx="2" />
              <path d="M4 18L24 6l20 12" />
              <path d="M16 42V30h16v12" />
            </svg>
          </div>
          <span className="mobile-door__label">VELEPRODAJA</span>
          <h2 className="mobile-door__title">Za vaš posao</h2>
          <p className="mobile-door__subtitle">B2B narudžbe, veleprodajne cijene, brza isporuka za poslovne partnere</p>
          <span className="mobile-door__cta mobile-door__cta--yellow">Uđite u veleprodaju</span>
        </a>
      </section>

      {/* About */}
      <section className="mobile-about">
        <div className="mobile-about__badge">O NAMA</div>
        <h2 className="mobile-about__title">Pouzdani partner od 2016.</h2>
        <p className="mobile-about__text">
          Proxy d.o.o. je veleprodajna i maloprodajna tvrtka iz Splita
          specijalizirana za opskrbu širokim asortimanom proizvoda za
          domaćinstvo i ugostiteljstvo.
        </p>
        <div className="mobile-about__image-wrap">
          <img
            src="/images/proxy-display.jpg"
            alt="PROXY branded izložbeni stalak s proizvodima"
            className="mobile-about__image"
            loading="lazy"
          />
        </div>
        <div className="mobile-about__values">
          <div className="mobile-about__value">
            <div className="mobile-about__value-icon">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 2L4 8v8c0 7.7 5.1 14.9 12 16 6.9-1.1 12-8.3 12-16V8L16 2z" />
                <path d="M11 16l4 4 8-8" />
              </svg>
            </div>
            <div>
              <h3 className="mobile-about__value-title">Kvaliteta</h3>
              <p className="mobile-about__value-desc">Samo provjereni, vrhunski proizvodi u ponudi</p>
            </div>
          </div>
          <div className="mobile-about__value">
            <div className="mobile-about__value-icon">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="16" cy="16" r="14" />
                <path d="M16 8v8l5 5" />
              </svg>
            </div>
            <div>
              <h3 className="mobile-about__value-title">Pouzdanost</h3>
              <p className="mobile-about__value-desc">Dostava na vrijeme, konzistentan asortiman</p>
            </div>
          </div>
          <div className="mobile-about__value">
            <div className="mobile-about__value-icon">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 28L16 4l12 24H4z" />
                <path d="M16 12v8M16 24h.01" />
              </svg>
            </div>
            <div>
              <h3 className="mobile-about__value-title">Fer poslovanje</h3>
              <p className="mobile-about__value-desc">Transparentnost i partnerstvo bez skrivenih troškova</p>
            </div>
          </div>
        </div>
        <p className="mobile-about__text" style={{ marginTop: '1rem' }}>
          Iz našeg skladišta od 700 m² u Splitu opslužujemo široku mrežu
          trgovaca, ugostiteljskih objekata i poslovnih subjekata diljem Hrvatske.
        </p>
        <div className="mobile-about__stats">
          <div className="mobile-about__stat">
            <span className="mobile-about__stat-num">792+</span>
            <span className="mobile-about__stat-label">Artikala</span>
          </div>
          <div className="mobile-about__stat">
            <span className="mobile-about__stat-num">24h</span>
            <span className="mobile-about__stat-label">Isporuka</span>
          </div>
          <div className="mobile-about__stat">
            <span className="mobile-about__stat-num">200+</span>
            <span className="mobile-about__stat-label">Partnera</span>
          </div>
          <div className="mobile-about__stat">
            <span className="mobile-about__stat-num">700m²</span>
            <span className="mobile-about__stat-label">Skladište</span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mobile-products">
        <h2 className="mobile-products__title">Naš asortiman</h2>
        <div className="mobile-products__grid">
          <div className="mobile-products__card">
            <img src="/images/knives-product.jpg" alt="Kuhinjski pribor" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Kuhinjski pribor</span>
          </div>
          <div className="mobile-products__card">
            <img src="/images/proxy-display.jpg" alt="Oprema za čišćenje" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Oprema za čišćenje</span>
          </div>
          <div className="mobile-products__card">
            <img src="/images/otiraci-globo.jpg" alt="Otirači" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Otirači</span>
          </div>
          <div className="mobile-products__card">
            <img src="/images/wholesale-fabric.jpg" alt="Zavjese" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Zavjese</span>
          </div>
        </div>
      </section>
    </div>
  )
}
