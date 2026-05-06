import { useLocale } from '../i18n/LocaleContext'

export default function About() {
  const { t } = useLocale()
  const a = t('about')

  return (
    <section id="o-nama" className="about" aria-labelledby="about-heading">
      <div className="container about-stack">
        <header className="section-head about-head">
          <p className="eyebrow dark">{a.eyebrow}</p>
          <h2 id="about-heading" className="section-title">
            {a.title[0]}
            <span className="gold">{a.title[1]}</span>
          </h2>
          <p className="lead">{a.lead}</p>
        </header>

        <figure className="about-media">
          <img
            src="/images/warehouse-wide.jpg"
            alt={a.imageAlt}
            title={a.imageTitle || a.imageAlt}
            loading="lazy"
            width="1200"
            height="800"
          />
          <figcaption>{a.caption}</figcaption>
        </figure>

        <div className="about-copy">
          <p>{a.p1}</p>
          <p>{a.p2}</p>
          <p>{a.p3}</p>
        </div>

        <dl className="about-stats">
          {a.stats.map((s, i) => (
            <div key={i}><dt>{s.t}</dt><dd>{s.v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  )
}
