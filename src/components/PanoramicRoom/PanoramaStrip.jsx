import { useState } from 'react'

export default function PanoramaStrip({ progress }) {
  const translateX = -(progress * 87.5)
  const [openingDoor, setOpeningDoor] = useState(null)

  const handleDoorClick = (e, url, doorId) => {
    e.preventDefault()
    setOpeningDoor(doorId)
    setTimeout(() => {
      window.location.href = url
    }, 800)
  }

  return (
    <div className="strip" style={{ transform: `translateX(${translateX}%)` }}>

      {/* 1. HERO */}
      <section className="s s--hero">
        <div className="s__inner s__inner--hero">
          <img src="/images/logo.svg" alt="Proxy d.o.o." className="hero-logo" />
          <h1 className="hero-tagline">Sve sto dom treba</h1>
          <p className="hero-lead">
            Kvalitetni proizvodi za dom i posao. Od kucanskog pribora
            i sredstava za ciscenje do profesionalnog ugostiteljskog programa.
            Opremamo domove i poslove diljem Hrvatske od 2016.
          </p>
          <div className="scroll-cue">
            <div className="scroll-cue__line" />
            <span className="scroll-cue__label">Istrazite</span>
          </div>
        </div>
      </section>

      {/* 2. MALOPRODAJA */}
      <section className="s s--door-panel">
        <div className="s__inner s__inner--door">
          <h2 className="door-heading door-heading--blue">MALOPRODAJA</h2>
          <p className="door-sub">Za vas dom</p>
          <a
            href="https://maloprodaja.proxy1.hr"
            className={`door-gate door-gate--blue${openingDoor === 'malo' ? ' door-gate--opening' : ''}`}
            onClick={(e) => handleDoorClick(e, 'https://maloprodaja.proxy1.hr', 'malo')}
            aria-label="Ulaz u maloprodaju"
          >
            <div className="door-gate__left" />
            <div className="door-gate__right" />
            <div className="door-gate__glow" />
          </a>
          <span className="door-domain">maloprodaja.proxy1.hr</span>
        </div>
      </section>

      {/* 3. OTIRACI */}
      <section className="s s--products">
        <div className="s__inner">
          <div className="prod-head">
            <h2 className="prod-title">Otiraci po narudzbi</h2>
            <p className="prod-desc">
              Personalizirani otiraci za hotele, restorane i poslovne prostore.
              Vas logo, vase boje. Izrada zavjesa za vrata u raznim dimenzijama
              prema potrebama kupaca.
            </p>
          </div>
          <div className="mosaic mosaic--4">
            <div className="mosaic__item"><img src="/images/otiraci-globo.jpg" alt="Otiraci Globo" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/otiraci-kingtrade.jpg" alt="Otiraci Kingtrade" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/otiraci-hotel.jpg" alt="Otiraci za hotele" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/otiraci-pristav.jpg" alt="Otiraci Pristav" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* 4. CISCENJE */}
      <section className="s s--products">
        <div className="s__inner">
          <div className="prod-head">
            <h2 className="prod-title">Ciscenje i kucanstvo</h2>
            <p className="prod-desc">
              Mopovi, krpe, sredstva za ciscenje, kuhinjski pribor i program
              za odrzavanje. Sve sto trebate za besprijekorno cist prostor.
            </p>
          </div>
          <div className="mosaic mosaic--4">
            <div className="mosaic__item"><img src="/images/proxy-display.jpg" alt="Program ciscenja" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/mopovi.jpg" alt="Kuhinjski program" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/retail-display.jpg" alt="Maloprodajni izlog" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/doormats.jpg" alt="Asortiman otiraca" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* 5. NOZEVI */}
      <section className="s s--products s--alt">
        <div className="s__inner">
          <div className="prod-head">
            <h2 className="prod-title">Inox nozevi Bonomi</h2>
            <p className="prod-desc">
              Profesionalni inox nozevi iz Italije. Od kuhinje do
              ugostiteljstva, celik koji traje generacijama.
            </p>
          </div>
          <div className="mosaic mosaic--2">
            <div className="mosaic__item"><img src="/images/nozevi-bonomi.jpg" alt="Bonomi inox nozevi" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/knives-product.jpg" alt="Bonomi set nozeva" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* 6. O NAMA */}
      <section className="s s--story">
        <div className="s__inner s__inner--story">
          <span className="story-label">O nama</span>
          <h2 className="story-title">Proxy d.o.o.</h2>
          <div className="story-body">
            <p>
              Proxy d.o.o. je trgovina na veliko koja se bavi prodajom asortimana za
              domacinstvo i ugostiteljstvo. Nudimo i izradu personaliziranih otiraca
              s logotipom i natpisima, te izradu zavjesa za vrata u raznim dimenzijama
              prema potrebama kupaca.
            </p>
            <p>
              Tvrtku je 11. svibnja 2016. osnovao Robert Raic, nakon dugogodisnjeg
              iskustva u prodaji, s ciljem da klijentima pruzi najkvalitetnije proizvode
              i usluge. Ozbiljnim pristupom i jasnom vizijom, prodajni asortiman tvrtke
              brzo je popunjen robom vrhunske kvalitete.
            </p>
            <p>
              Kljucna prekretnica bila je prosle godine kada smo zapoceli suradnju s
              velikim trgovackim lancima i presli u skladiste od 700 m². Danas nas
              ima petero: dva komercijalista, dva skladistara i direktor koji radi sve.
            </p>
            <p>
              Fer poslovna praksa i partnerstvo su i ostat ce uvijek na prvom mjestu.
              O kvaliteti ponude svjedoci sve veci broj klijenata kojima pruzamo
              najbolju uslugu. Bonitet tvrtke je A+.
            </p>
          </div>
          <div className="story-facts">
            <div className="story-fact">
              <span className="story-fact__num">792+</span>
              <span className="story-fact__label">Artikala u ponudi</span>
            </div>
            <div className="story-fact">
              <span className="story-fact__num">700 m²</span>
              <span className="story-fact__label">Skladisni prostor</span>
            </div>
            <div className="story-fact">
              <span className="story-fact__num">A+</span>
              <span className="story-fact__label">Bonitet tvrtke</span>
            </div>
          </div>
          <div className="story-usp">
            <div className="story-usp__item">Fleksibilnost u poslovanju, narucivanjima i dostavama</div>
            <div className="story-usp__item">Brza isporuka unutar 3 radna dana</div>
            <div className="story-usp__item">Briga o robi na policama kod kupaca</div>
            <div className="story-usp__item">Brzo rjesavanje reklamacija i povrata</div>
          </div>
        </div>
      </section>

      {/* 7. SKLADISTE */}
      <section className="s s--products">
        <div className="s__inner">
          <div className="prod-head">
            <h2 className="prod-title">Nase skladiste</h2>
            <p className="prod-desc">
              700 m² skladisnog prostora, vise od 792 artikla uvijek na stanju,
              spremno za isporuku na podrucju cijele Hrvatske.
            </p>
          </div>
          <div className="mosaic mosaic--4">
            <div className="mosaic__item"><img src="/images/warehouse-shelves.jpg" alt="Skladisne police" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/veleprodaja-police.jpg" alt="Role na policama" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/veleprodaja-skladiste.jpg" alt="Otiraci na policama" loading="lazy" /></div>
            <div className="mosaic__item"><img src="/images/warehouse-rolls.jpg" alt="Tkanine u skladistu" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* 8. VELEPRODAJA */}
      <section className="s s--door-panel">
        <div className="s__inner s__inner--door">
          <h2 className="door-heading door-heading--gold">VELEPRODAJA</h2>
          <p className="door-sub">Za vas posao</p>
          <a
            href="https://veleprodaja.proxy1.hr"
            className={`door-gate door-gate--gold${openingDoor === 'velo' ? ' door-gate--opening' : ''}`}
            onClick={(e) => handleDoorClick(e, 'https://veleprodaja.proxy1.hr', 'velo')}
            aria-label="Ulaz u veleprodaju"
          >
            <div className="door-gate__left" />
            <div className="door-gate__right" />
            <div className="door-gate__glow" />
          </a>
          <span className="door-domain">veleprodaja.proxy1.hr</span>
        </div>
      </section>
    </div>
  )
}
