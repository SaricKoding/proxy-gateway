export default function AboutSection() {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M16 2L4 8v8c0 7.7 5.1 14.9 12 16 6.9-1.1 12-8.3 12-16V8L16 2z" />
          <path d="M11 16l4 4 8-8" />
        </svg>
      ),
      title: 'Kvaliteta',
      desc: 'Samo provjereni, vrhunski proizvodi u ponudi',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="16" cy="16" r="14" />
          <path d="M16 8v8l5 5" />
        </svg>
      ),
      title: 'Pouzdanost',
      desc: 'Dostava na vrijeme, konzistentan asortiman',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" />
          <path d="M10 16h12M16 10v12" />
        </svg>
      ),
      title: 'Fer poslovanje',
      desc: 'Transparentnost i partnerstvo bez skrivenih troškova',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 28L16 4l12 24H4z" />
          <path d="M16 12v8M16 24h.01" />
        </svg>
      ),
      title: 'Inovativnost',
      desc: 'Kontinuirano unapređenje ponude i procesa',
    },
  ]

  return (
    <section className="about" id="o-nama">
      <div className="about__container">
        <div className="about__header">
          <span className="about__badge">O NAMA</span>
          <h2 className="about__title">Sve što dom treba</h2>
          <p className="about__lead">
            Proxy d.o.o. je veleprodajna tvrtka iz Splita specijalizirana za opskrbu
            širokim asortimanom proizvoda za domaćinstvo i ugostiteljstvo.
            Osnovana 2016. godine, danas opslužujemo široku mrežu trgovaca,
            ugostiteljskih objekata i poslovnih subjekata diljem Hrvatske.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__image-block">
            <img
              src="/images/proxy-display.jpg"
              alt="PROXY branded izložbeni stalak s proizvodima za čišćenje"
              className="about__image"
              loading="lazy"
            />
          </div>
          <div className="about__values">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-card__icon">{v.icon}</div>
                <div>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
