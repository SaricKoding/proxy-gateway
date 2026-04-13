const categories = [
  {
    name: 'Kućanski pribor',
    image: '/images/knives-product.jpg',
    alt: 'Bonomi noževi — Made in Italy',
  },
  {
    name: 'Sredstva za čišćenje',
    image: '/images/knives-stand.jpg',
    alt: 'Noževi na izložbenom stalku',
  },
  {
    name: 'Otirači & Tepisi',
    image: '/images/doormats.jpg',
    alt: 'Otirači različitih boja i uzoraka',
  },
  {
    name: 'Ugostiteljski program',
    image: '/images/wholesale-fabric.jpg',
    alt: 'Stolnjaci i tekstil na policama',
  },
]

export default function ProductShowcase() {
  return (
    <section className="showcase">
      <div className="showcase__container">
        <span className="showcase__badge">ASORTIMAN</span>
        <h2 className="showcase__title">Što nudimo</h2>

        <div className="showcase__grid">
          {categories.map((cat) => (
            <div className="showcase__card" key={cat.name}>
              <div className="showcase__card-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="showcase__card-img"
                  loading="lazy"
                />
              </div>
              <h3 className="showcase__card-name">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
