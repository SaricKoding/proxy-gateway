import { doors, wallTexts, productHotspots } from '../../config/roomConfig'

export default function MobileFallback() {
  const malo = doors[0]
  const velo = doors[1]

  return (
    <div className="mobile-fallback">
      {/* Hero */}
      <section className="mobile-hero">
        <div className="mobile-hero__bg" />
        <div className="mobile-hero__content">
          <p className="mobile-hero__badge">DOBRODOŠLI U PROXY</p>
          <h1 className="mobile-hero__title">Sve što dom treba</h1>
          <p className="mobile-hero__subtitle">
            Kvalitetni proizvodi za dom i posao — odaberite kako želite kupovati
          </p>
        </div>
      </section>

      {/* Doors */}
      <section className="mobile-doors">
        <a href={malo.url} className="mobile-door mobile-door--blue">
          <div className="mobile-door__icon">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 20L24 6l18 14v20a2 2 0 01-2 2H8a2 2 0 01-2-2V20z" />
              <path d="M18 42V28h12v14" />
            </svg>
          </div>
          <span className="mobile-door__label">{malo.label}</span>
          <h2 className="mobile-door__title">{malo.title}</h2>
          <p className="mobile-door__subtitle">{malo.subtitle}</p>
          <span className="mobile-door__cta">
            Uđite u trgovinu →
          </span>
        </a>

        <div className="mobile-doors__divider">
          <span>ILI</span>
        </div>

        <a href={velo.url} className="mobile-door mobile-door--yellow">
          <div className="mobile-door__icon">
            <svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="4" y="18" width="40" height="24" rx="2" />
              <path d="M4 18L24 6l20 12" />
              <path d="M16 42V30h16v12" />
            </svg>
          </div>
          <span className="mobile-door__label">{velo.label}</span>
          <h2 className="mobile-door__title">{velo.title}</h2>
          <p className="mobile-door__subtitle">{velo.subtitle}</p>
          <span className="mobile-door__cta mobile-door__cta--yellow">
            Uđite u veleprodaju →
          </span>
        </a>
      </section>

      {/* About */}
      <section className="mobile-about">
        <h2 className="mobile-about__title">O nama</h2>
        <p className="mobile-about__text">
          Proxy d.o.o. je veleprodajna tvrtka iz Splita specijalizirana za opskrbu
          širokim asortimanom proizvoda za domaćinstvo i ugostiteljstvo.
          Osnovana 2016. godine, danas opslužujemo široku mrežu trgovaca
          i poslovnih subjekata diljem Hrvatske.
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
          {productHotspots.map((p) => (
            <div className="mobile-products__card" key={p.id}>
              <img src={p.image} alt={p.label} className="mobile-products__img" loading="lazy" />
              <span className="mobile-products__label">{p.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
