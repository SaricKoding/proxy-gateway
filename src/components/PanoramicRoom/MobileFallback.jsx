export default function MobileFallback() {
  return (
    <div className="mobile-fallback">
      {/* Hero */}
      <section className="mobile-hero">
        <div className="mobile-hero__bg" />
        <div className="mobile-hero__content">
          <img src="/images/logo-final.png" alt="Proxy d.o.o." style={{ width: '200px', marginBottom: '1rem' }} />
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
          <p className="mobile-door__subtitle">Kućanski pribor, sredstva za čišćenje i sve za svakodnevni život</p>
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
        <h2 className="mobile-about__title">O nama</h2>
        <p className="mobile-about__text">
          Proxy d.o.o. je trgovina na veliko iz Splita koja se bavi prodajom
          asortimana za domaćinstvo i ugostiteljstvo. Osnovana 2016. godine,
          danas opslužujemo široku mrežu trgovaca i poslovnih subjekata
          diljem Hrvatske iz našeg skladišta od 700 m².
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
        </div>
      </section>

      {/* Products */}
      <section className="mobile-products">
        <h2 className="mobile-products__title">Asortiman</h2>
        <div className="mobile-products__grid">
          <div className="mobile-products__card">
            <img src="/images/otiraci-globo.jpg" alt="Otirači" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Otirači</span>
          </div>
          <div className="mobile-products__card">
            <img src="/images/proxy-display.jpg" alt="Čišćenje" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Čišćenje</span>
          </div>
          <div className="mobile-products__card">
            <img src="/images/nozevi-bonomi.jpg" alt="Noževi" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Inox noževi</span>
          </div>
          <div className="mobile-products__card">
            <img src="/images/warehouse-shelves.jpg" alt="Skladište" className="mobile-products__img" loading="lazy" />
            <span className="mobile-products__label">Skladište</span>
          </div>
        </div>
      </section>
    </div>
  )
}
