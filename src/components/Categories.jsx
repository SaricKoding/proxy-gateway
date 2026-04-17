const categories = [
  { name: 'Čišćenje',            count: 118, image: '/images/ciscenje.jpg',            slug: 'ciscenje' },
  { name: 'Drvena galanterija',  count: 99,  image: '/images/drvena-galanterija.jpg',  slug: 'drvena-galanterija' },
  { name: 'Inox galanterija',    count: 138, image: '/images/inox-galanterija.jpg',    slug: 'inox-galanterija' },
  { name: 'Opremanje',           count: 189, image: '/images/opremanje-display.jpg',   slug: 'opremanje' },
  { name: 'Otirači',             count: 14,  image: '/images/otiraci-globo.jpg',       slug: 'otiraci' },
  { name: 'Posuđe',              count: 43,  image: '/images/posudje-display.jpg',     slug: 'posudje' },
  { name: 'Spremanje ormara',    count: 20,  image: '/images/spremanje-ormara.jpg',    slug: 'spremanje-ormara' },
  { name: 'Tekstil domaćinstvo', count: null,image: '/images/wholesale-fabric.jpg',    slug: 'tekstil-domacinstvo' },
]

export default function Categories() {
  return (
    <section id="kategorije" className="categories" aria-labelledby="cat-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow dark">Asortiman</p>
          <h2 id="cat-heading" className="section-title">Kategorije proizvoda</h2>
          <p className="section-sub">
            Od sredstava za čišćenje do ugostiteljskog programa — sve pod jednim krovom.
          </p>
        </header>

        <ul className="cat-grid">
          {categories.map(c => (
            <li key={c.slug} className="cat-card">
              <a href="https://veleproday.proxy1.hr" rel="noopener" aria-label={`${c.name} — pogledaj kategoriju`}>
                <div className="cat-media">
                  <img src={c.image} alt={c.name} loading="lazy" />
                </div>
                <div className="cat-body">
                  <h3 className="cat-name">{c.name}</h3>
                  {c.count !== null && <span className="cat-count">{c.count} artikala</span>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
