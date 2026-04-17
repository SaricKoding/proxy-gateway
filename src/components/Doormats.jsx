export default function Doormats() {
  return (
    <section id="otiraci" className="doormats" aria-labelledby="doormats-heading">
      <div className="container doormats-grid">
        <figure className="doormats-media">
          <img
            src="/images/otirac-hero.jpg"
            alt="Personalizirani otirač s logotipom tvrtke"
            loading="lazy"
            width="900"
            height="600"
          />
        </figure>

        <div className="doormats-copy">
          <p className="eyebrow">Dodatna usluga</p>
          <h2 id="doormats-heading" className="section-title">
            Personalizirani otirači — <span className="gold">s vašim logotipom</span>
          </h2>
          <p className="lead">
            Izrađujemo otirače po narudžbi za poslovne prostore, hotele, restorane i ugostiteljske
            objekte. Dostupni su logotipi, natpisi tvrtki i personalizirani dizajn — trajno,
            praktično i reprezentativno.
          </p>
          <ul className="doormats-list">
            <li>Logotipi tvrtki i brendova</li>
            <li>Natpisi po narudžbi — bilo koji tekst</li>
            <li>Različite dimenzije i gustoće vlakana</li>
            <li>Izrada za ugostiteljstvo i poslovne prostore</li>
          </ul>

          <div className="doormats-cta">
            <a className="btn btn-gold btn-lg" href="https://veleproday.proxy1.hr" rel="noopener">
              Upit za veleprodaju
            </a>
            <a className="btn btn-ghost-dark btn-lg" href="https://maloprodaja.proxy.hr" rel="noopener">
              Maloprodajna ponuda
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
