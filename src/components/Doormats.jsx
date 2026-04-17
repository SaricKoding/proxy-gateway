import { useLocale } from '../i18n/LocaleContext'

export default function Doormats() {
  const { t } = useLocale()
  const d = t('doormats')

  return (
    <section id="otiraci" className="doormats" aria-labelledby="doormats-heading">
      <div className="container doormats-grid">
        <figure className="doormats-media">
          <img src="/images/otirac-hero.jpg" alt={d.imageAlt} loading="lazy" width="900" height="600" />
        </figure>

        <div className="doormats-copy">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="doormats-heading" className="section-title">
            {d.title[0]}
            <span className="gold">{d.title[1]}</span>
          </h2>
          <p className="lead">{d.lead}</p>
          <ul className="doormats-list">
            {d.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>

          <div className="doormats-cta">
            <a className="btn btn-gold btn-lg" href="https://veleprodaja.proxy1.hr" rel="noopener">{d.ctaWholesale}</a>
            <a className="btn btn-ghost-dark btn-lg" href="https://maloprodaja.proxy1.hr" rel="noopener">{d.ctaRetail}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
