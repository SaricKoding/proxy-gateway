import { useLocale } from '../i18n/LocaleContext'

const staticCards = [
  { key: 'veleprodaja', href: 'https://veleprodaja.proxy1.hr', image: '/images/veleprodaja-izlaganje.jpg', accent: 'blue' },
  { key: 'maloprodaja', href: 'https://maloprodaja.proxy1.hr', image: '/images/retail-display.jpg',       accent: 'gold' },
]

export default function Gateway() {
  const { t } = useLocale()
  const g = t('gateway')

  return (
    <section id="izbor" className="gateway" aria-labelledby="gateway-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow dark">{g.eyebrow}</p>
          <h2 id="gateway-heading" className="section-title">{g.title}</h2>
          <p className="section-sub">{g.sub}</p>
        </header>

        <div className="gateway-grid">
          {staticCards.map(s => {
            const c = g.cards[s.key]
            return (
              <a
                key={s.key}
                className={`gw-card gw-${s.accent}`}
                href={s.href}
                rel="noopener"
                aria-label={`${c.title}, ${c.cta}`}
              >
                <div className="gw-media">
                  <img src={s.image} alt="" loading="lazy" />
                  <div className="gw-shade" />
                  <span className={`gw-tag gw-tag-${s.accent}`}>{c.tag}</span>
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
            )
          })}
        </div>

        <aside className="partner-notice">
          <div className="partner-notice-inner">
            <div className="partner-notice-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.3L12 16.8 6.4 19.5l1.1-6.3L3 8.9 9 8z"/>
              </svg>
            </div>
            <div className="partner-notice-text">
              <strong>{g.notice.strong}</strong>
              <span>
                {g.notice.text[0]}
                <a href="mailto:robert@proxy1.hr">robert@proxy1.hr</a>
                {g.notice.text[1]}
              </span>
            </div>
            <a className="btn btn-blue" href="mailto:robert@proxy1.hr?subject=Proxy%20Partnership%20Request">
              {g.notice.cta}
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
