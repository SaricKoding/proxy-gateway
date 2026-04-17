export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <img src="/images/hero-warehouse.jpg" alt="" loading="eager" fetchpriority="high" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-inner">
        <p className="eyebrow">Proxy d.o.o. · Split, Hrvatska · od 2016.</p>
        <h1 id="hero-heading" className="hero-title">
          Partner za <span className="gold">VELEPRODAJU</span> i <span className="gold">MALOPRODAJU</span>
        </h1>
        <p className="hero-sub">
          Asortiman za domaćinstvo i ugostiteljstvo — kvalitetna roba, pouzdana isporuka i fer poslovna praksa.
        </p>

        <div className="hero-cta">
          <a className="btn btn-gold btn-xl" href="#izbor">Odaberite kanal</a>
          <a className="btn btn-ghost btn-xl" href="#o-nama">Saznaj više</a>
        </div>

        <ul className="hero-marks" aria-label="Ključne prednosti">
          <li><strong>700+</strong> artikala</li>
          <li><strong>3 dana</strong> isporuka u HR</li>
          <li><strong>A+</strong> bonitet</li>
        </ul>
      </div>
    </section>
  )
}
