const cards = [
  {
    key: 'veleprodaja',
    kicker: 'B2B',
    title: 'Veleprodaja',
    desc: 'Za ugovorne partnere — tvrtke, ugostiteljske objekte i ustanove s odobrenim veleprodajnim pristupom.',
    href: 'https://veleprodaja.proxy1.hr',
    cta: 'Otvori veleprodaju',
    image: '/images/veleprodaja-skladiste.jpg',
    accent: 'blue',
    tag: 'Samo ugovorni partneri',
  },
  {
    key: 'maloprodaja',
    kicker: 'B2C',
    title: 'Maloprodaja',
    desc: 'Otvoreno za sve — kupujte pojedinačno, bez ugovora i bez registracije partnera.',
    href: 'https://maloprodaja.proxy1.hr',
    cta: 'Otvori maloprodaju',
    image: '/images/retail-display.jpg',
    accent: 'gold',
    tag: 'Dostupno svima',
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
                <span className={`gw-tag gw-tag-${c.accent}`}>{c.tag}</span>
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

        <aside className="partner-notice" aria-label="Postanite partner">
          <div className="partner-notice-inner">
            <div className="partner-notice-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.3L12 16.8 6.4 19.5l1.1-6.3L3 8.9 9 8z"/>
              </svg>
            </div>
            <div className="partner-notice-text">
              <strong>Veleprodaja je dostupna samo ugovornim partnerima.</strong>
              <span>
                Niste partner? Kontaktirajte nas na{' '}
                <a href="mailto:robert@proxy1.hr">robert@proxy1.hr</a>{' '}
                i postanite registrirani partner Proxy d.o.o.
              </span>
            </div>
            <a className="btn btn-blue" href="mailto:robert@proxy1.hr?subject=Zahtjev%20za%20veleprodajno%20partnerstvo">
              Postani partner
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
