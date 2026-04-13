import { useState } from 'react'

export default function HeroGateway() {
  const [hoveredDoor, setHoveredDoor] = useState(null)

  const handleDoorClick = (url) => {
    window.location.href = url
  }

  return (
    <section className="hero" aria-label="Odaberite prodajni kanal">
      {/* Background gradient overlay */}
      <div className="hero__bg" />

      {/* Top content */}
      <div className="hero__top">
        <p className="hero__badge">DOBRODOŠLI U PROXY</p>
        <h1 className="hero__title">Odaberite svoj put</h1>
        <p className="hero__subtitle">
          Kvalitetni proizvodi za dom i posao — izaberite kako želite kupovati
        </p>
      </div>

      {/* Two doors */}
      <div className="hero__doors">
        {/* MALOPRODAJA DOOR */}
        <button
          className={`door door--retail${hoveredDoor === 'retail' ? ' door--active' : ''}${hoveredDoor === 'wholesale' ? ' door--dimmed' : ''}`}
          onMouseEnter={() => setHoveredDoor('retail')}
          onMouseLeave={() => setHoveredDoor(null)}
          onFocus={() => setHoveredDoor('retail')}
          onBlur={() => setHoveredDoor(null)}
          onClick={() => handleDoorClick('https://maloprodaja.proxy1.hr')}
          aria-label="Ulaz u maloprodaju — proizvodi za dom"
        >
          <div className="door__image-wrap">
            <img
              src="/images/retail-display.jpg"
              alt="Polica s kućanskim proizvodima — maloprodaja"
              className="door__image"
              loading="eager"
            />
            <div className="door__overlay door__overlay--retail" />
          </div>

          <div className="door__content">
            <div className="door__icon">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 20L24 6l18 14v20a2 2 0 01-2 2H8a2 2 0 01-2-2V20z" />
                <path d="M18 42V28h12v14" />
              </svg>
            </div>
            <span className="door__label">MALOPRODAJA</span>
            <h2 className="door__title">Za vaš dom</h2>
            <p className="door__desc">
              Kućanski pribor, sredstva za čišćenje, kuhinjski program i sve za svakodnevni život
            </p>
            <div className="door__cta">
              <span>Uđite u trgovinu</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <p className="door__subdomain">maloprodaja.proxy1.hr</p>
          </div>
        </button>

        {/* DIVIDER */}
        <div className="hero__divider" aria-hidden="true">
          <div className="hero__divider-line" />
          <span className="hero__divider-text">ILI</span>
          <div className="hero__divider-line" />
        </div>

        {/* VELEPRODAJA DOOR */}
        <button
          className={`door door--wholesale${hoveredDoor === 'wholesale' ? ' door--active' : ''}${hoveredDoor === 'retail' ? ' door--dimmed' : ''}`}
          onMouseEnter={() => setHoveredDoor('wholesale')}
          onMouseLeave={() => setHoveredDoor(null)}
          onFocus={() => setHoveredDoor('wholesale')}
          onBlur={() => setHoveredDoor(null)}
          onClick={() => handleDoorClick('https://veleprodaja.proxy1.hr')}
          aria-label="Ulaz u veleprodaju — poslovni kupci"
        >
          <div className="door__image-wrap">
            <img
              src="/images/warehouse-shelves.jpg"
              alt="Skladišne police — veleprodaja"
              className="door__image"
              loading="eager"
            />
            <div className="door__overlay door__overlay--wholesale" />
          </div>

          <div className="door__content">
            <div className="door__icon">
              <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="18" width="40" height="24" rx="2" />
                <path d="M4 18L24 6l20 12" />
                <path d="M16 42V30h16v12" />
                <path d="M16 30h16" />
                <line x1="24" y1="30" x2="24" y2="42" />
              </svg>
            </div>
            <span className="door__label">VELEPRODAJA</span>
            <h2 className="door__title">Za vaš posao</h2>
            <p className="door__desc">
              B2B narudžbe, veleprodajne cijene, 792+ artikala, brza isporuka za poslovne partnere
            </p>
            <div className="door__cta door__cta--wholesale">
              <span>Uđite u veleprodaju</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <p className="door__subdomain">veleprodaja.proxy1.hr</p>
          </div>
        </button>
      </div>

      {/* Bottom stats */}
      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num">792+</span>
          <span className="hero__stat-label">Artikala</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">24h</span>
          <span className="hero__stat-label">Isporuka</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">200+</span>
          <span className="hero__stat-label">Partnera</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">2016</span>
          <span className="hero__stat-label">Od godine</span>
        </div>
      </div>
    </section>
  )
}
