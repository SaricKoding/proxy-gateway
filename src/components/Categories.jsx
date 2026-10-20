import { useLocale } from '../i18n/LocaleContext'
import Picture from './Picture'

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

// SEO stranice kategorija (isti redoslijed kao c.list u i18n), po jeziku
const linksByLocale = {
  hr: [
    '/veleprodaja-sredstava-za-ciscenje/',
    '/veleprodaja-drvene-galanterije/',
    '/veleprodaja-inox-galanterije/',
    '/veleprodaja-opremanja/',
    '/veleprodaja-otiraca/',
    '/veleprodaja-posuda/',
    '/veleprodaja-spremanja-ormara/',
    '/veleprodaja-tekstila-za-domacinstvo/',
  ],
  en: [
    '/en/wholesale-cleaning-supplies/',
    '/en/wholesale-wooden-kitchenware/',
    '/en/wholesale-stainless-steel-kitchenware/',
    '/en/wholesale-home-equipment/',
    '/en/wholesale-doormats/',
    '/en/wholesale-cookware/',
    '/en/wholesale-closet-storage/',
    '/en/wholesale-household-textiles/',
  ],
}

export default function Categories() {
  const { t, locale } = useLocale()
  const c = t('categories')
  const links = linksByLocale[locale] || linksByLocale.hr

  return (
    <section id="kategorije" className="categories" aria-labelledby="cat-heading">
      <div className="container">
        <header className="section-head">
          <h2 id="cat-heading" className="section-title">{c.title}</h2>
          <p className="section-sub">{c.sub}</p>
        </header>

        <ul className="cat-grid">
          {c.list.map((item, i) => {
            const altText = (c.alts && c.alts[i]) || item.name
            const titleText = (c.titles && c.titles[i]) || item.name
            return (
              <li key={i} className="cat-card">
                <a href={links[i] || '#izbor'} aria-label={c.linkLabel(item.name)}>
                  <div className="cat-media">
                    <Picture src={images[i]} alt={altText} title={titleText} loading="lazy" width="600" height="450" />
                  </div>
                  <div className="cat-body">
                    <h3 className="cat-name">{item.name}</h3>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
