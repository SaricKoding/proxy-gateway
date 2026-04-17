import { useLocale } from '../i18n/LocaleContext'

const images = [
  '/images/ciscenje.jpg',
  '/images/drvena-galanterija.jpg',
  '/images/inox-galanterija.jpg',
  '/images/opremanje-display.jpg',
  '/images/otiraci-globo.jpg',
  '/images/posudje-display.jpg',
  '/images/spremanje-ormara.jpg',
  '/images/wholesale-fabric.jpg',
]

export default function Categories() {
  const { t } = useLocale()
  const c = t('categories')

  return (
    <section id="kategorije" className="categories" aria-labelledby="cat-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow dark">{c.eyebrow}</p>
          <h2 id="cat-heading" className="section-title">{c.title}</h2>
          <p className="section-sub">{c.sub}</p>
        </header>

        <ul className="cat-grid">
          {c.list.map((item, i) => (
            <li key={i} className="cat-card">
              <a href="https://veleprodaja.proxy1.hr" rel="noopener" aria-label={c.linkLabel(item.name)}>
                <div className="cat-media">
                  <img src={images[i]} alt={item.name} loading="lazy" />
                </div>
                <div className="cat-body">
                  <h3 className="cat-name">{item.name}</h3>
                  {item.count !== null && <span className="cat-count">{c.itemsLabel(item.count)}</span>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
