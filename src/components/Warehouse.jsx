const images = [
  { src: '/images/sklad-1.jpg',  alt: 'Skladište Proxy — glavna hala' },
  { src: '/images/sklad-2.jpg',  alt: 'Regalni sustav u skladištu' },
  { src: '/images/sklad-3.jpg',  alt: 'Organizirane zone skladištenja' },
  { src: '/images/sklad-4.jpg',  alt: 'Spremljena roba po kategorijama' },
  { src: '/images/sklad-5.jpg',  alt: 'Priprema narudžbi za otpremu' },
  { src: '/images/sklad-6.jpg',  alt: 'Radni prostor skladišta' },
  { src: '/images/sklad-7.jpg',  alt: 'Police s asortimanom' },
  { src: '/images/sklad-8.jpg',  alt: 'Skladišne police — detalj' },
]

export default function Warehouse() {
  return (
    <section id="skladiste" className="warehouse" aria-labelledby="warehouse-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Infrastruktura</p>
          <h2 id="warehouse-heading" className="section-title">Naše skladište</h2>
          <p className="section-sub">
            Organizirano, uredno i spremno — garancija brze i točne isporuke.
          </p>
        </header>

        <div className="gallery">
          {images.map((img, i) => (
            <figure key={i} className={`gallery-item ${i === 0 ? 'gi-wide' : ''}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
