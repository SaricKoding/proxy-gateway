const cards = [
  {
    key: 'veleprodaja',
    kicker: 'B2B',
    title: 'Veleprodaja',
    desc: 'Profesionalni kupci, tvrtke i ustanove. Ugovorne cijene, veleprodajni katalog, brza isporuka u cijeloj Hrvatskoj.',
    href: 'https://veleproday.proxy1.hr',
    cta: 'Otvori veleprodaju',
    image: '/images/veleprodaja-skladiste.jpg',
    accent: 'blue',
  },
  {
    key: 'maloprodaja',
    kicker: 'B2C',
    title: 'Maloprodaja',
    desc: 'Kupujte pojedinačno — kvalitetan asortiman za dom i ugostiteljske objekte. Pregled proizvoda, cijene i narudžba online.',
    href: 'https://maloprodaja.proxy.hr',
    cta: 'Otvori maloprodaju',
    image: '/images/retail-display.jpg',
    accent: 'gold',
  },
]

export default function Gateway() {
  return (
    <section id="izbor" className="gateway" aria-labelledby="gateway-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow dark">Vaš izbor</p>
          <h2 id="gateway-heading" className="section-title">Gdje želite kupovati?</h2>
          <p className="section-sub">
            Odaberite kanal koji vam odgovara — oba su dio <strong>Proxy d.o.o.</strong>
          </p>
        </header>

        <div className="gateway-grid">
          {cards.map(c => (
            <a
              key={c.key}
              className={`gw-card gw-${c.accent}`}
              href={c.href}
              rel="noopener"
              aria-label={`${c.title} — ${c.cta}`}
            >
              <div className="gw-media">
                <img src={c.image} alt="" loading="lazy" />
                <div className="gw-shade" />
              </div>
              <div className="gw-body">
                <span className="gw-kicker">{c.kicker}</span>
                <h3 className="gw-title">{c.title}</h3>
                <p className="gw-desc">{c.desc}</p>
                <span className="gw-cta">
                  {c.cta}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="gateway-note">
          Niste sigurni? <a href="#o-nama">Pročitajte o Proxyju</a> prije odabira.
        </p>
      </div>
    </section>
  )
}
