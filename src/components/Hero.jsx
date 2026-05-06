import { useLocale } from '../i18n/LocaleContext'

export default function Hero() {
  const { t } = useLocale()
  const h = t('hero')
  const dp = h.doormatPill

  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <img src="/images/hero-warehouse.jpg" alt="" loading="eager" fetchpriority="high" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-inner">
        <img
          className="hero-logo"
          src="/images/logo-gold-transparent.png"
          alt="Proxy d.o.o. — Sve što dom treba"
          width="560"
          height="374"
          fetchpriority="high"
        />

        <h1 id="hero-heading" className="hero-title">
          {h.title[0]}
          <span className="gold">{h.title[1]}</span>
          {h.title[2]}
          <span className="gold">{h.title[3]}</span>
        </h1>
        <p className="hero-sub">{h.sub}</p>

        <div className="hero-cta">
          <a className="btn btn-gold btn-xl" href="#izbor">{h.ctaPrimary}</a>
          <a className="btn btn-ghost btn-xl" href="#o-nama">{h.ctaSecondary}</a>
        </div>

        {dp && (
          <a className="hero-pill" href="#otiraci" aria-label={`${dp.label}: ${dp.text}`}>
            <span className="hero-pill-tag">{dp.label}</span>
            <span className="hero-pill-text">{dp.text}</span>
            <span className="hero-pill-cta" aria-hidden="true">{dp.cta} <span className="hero-pill-arrow">&rarr;</span></span>
          </a>
        )}

        <ul className="hero-marks">
          {h.marks.map((m, i) => (
            <li key={i}><strong>{m.n}</strong> {m.l}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
