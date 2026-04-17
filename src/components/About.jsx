export default function About() {
  return (
    <section id="o-nama" className="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow dark">O tvrtki</p>
          <h2 id="about-heading" className="section-title">
            Osnovano 2016. u Solinu — <span className="gold">fer partnerstvo na prvom mjestu</span>
          </h2>

          <p className="lead">
            <strong>Proxy d.o.o.</strong> je trgovina na veliko koja se bavi prodajom asortimana za
            domaćinstvo i ugostiteljstvo. Uz široki katalog roba, nudimo i izradu
            personaliziranih otirača s logotipima i natpisima tvrtki.
          </p>

          <p>
            Tvrtku je <strong>11. svibnja 2016.</strong> osnovao <strong>Robert Raič</strong> nakon
            dugogodišnjeg iskustva u prodaji — s jasnim ciljem da klijentima pruži najkvalitetnije
            proizvode i uslugu, vodeći računa o zaposlenicima i lokalnoj zajednici.
          </p>

          <p>
            Vrlo brzo nakon osnutka, ozbiljnim pristupom i jasnom vizijom, naš je prodajni asortiman
            popunjen robom vrhunske kvalitete. O kvaliteti ponude svjedoči i sve veći broj
            klijenata kojima pružamo najbolju uslugu i najkvalitetnije proizvode.
          </p>

          <p>
            <strong>Fer poslovna praksa i partnerstvo</strong> su i ostat će uvijek na prvom mjestu.
            Naša vizija je širenje poslovanja na strana tržišta, ulaganje u proizvodnju i
            stvaranje tvrtke koja će biti inovativna te fer prema svojim zaposlenicima — kroz
            kontinuiranu edukaciju i razvoj.
          </p>

          <dl className="about-stats">
            <div><dt>Godina osnutka</dt><dd>2016.</dd></div>
            <div><dt>Sjedište</dt><dd>Solin, HR</dd></div>
            <div><dt>Fokus</dt><dd>Veleprodaja i maloprodaja</dd></div>
            <div><dt>Djelokrug</dt><dd>Hrvatska</dd></div>
          </dl>
        </div>

        <figure className="about-media">
          <img
            src="/images/warehouse-wide.jpg"
            alt="Proxy skladište — profesionalno opremljeno za distribuciju"
            loading="lazy"
            width="900"
            height="600"
          />
          <figcaption>Sjedište i skladište · Solin</figcaption>
        </figure>
      </div>
    </section>
  )
}
