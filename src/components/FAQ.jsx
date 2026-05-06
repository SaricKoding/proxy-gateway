import { useLocale } from '../i18n/LocaleContext'

export default function FAQ() {
  const { t } = useLocale()
  const f = t('faq')

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow dark">{f.eyebrow}</p>
          <h2 id="faq-heading" className="section-title">
            {f.title[0]}
            <span className="gold">{f.title[1]}</span>
          </h2>
          <p className="section-sub">{f.sub}</p>
        </header>

        <ul className="faq-list">
          {f.items.map((item, i) => (
            <li key={i} className="faq-item">
              <details>
                <summary>
                  <span className="faq-q">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
