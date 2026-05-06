import { useLocale } from '../i18n/LocaleContext'

const gallery = [
  '/images/otirac-1.jpg',
  '/images/otirac-2.jpg',
  '/images/otirac-3.jpg',
  '/images/otirac-4.jpg',
  '/images/otirac-5.jpg',
]

export default function Doormats() {
  const { t } = useLocale()
  const d = t('doormats')
  const alts = d.galleryAlts || []

  return (
    <section id="otiraci" className="doormats" aria-labelledby="doormats-heading">
      <div className="container doormats-grid">
        <figure className="doormats-media">
          <img
            src="/images/otirac-hero.jpg"
            alt={d.imageAlt}
            loading="lazy"
            width="1600"
            height="1067"
          />
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

      <div className="container">
        <ul className="doormats-gallery" aria-label={d.imageAlt}>
          {gallery.map((src, i) => (
            <li key={src}>
              <img src={src} alt={alts[i] || d.imageAlt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
