import { useState } from 'react'

function lerp(a, b, t) { return a + (b - a) * t }

// Get 0-1 progress within a specific panel (0-indexed)
function panelProgress(globalProgress, panelIndex, totalPanels = 8) {
  const panelSize = 1 / totalPanels
  const start = panelIndex * panelSize
  const end = start + panelSize
  return Math.max(0, Math.min(1, (globalProgress - start) / (end - start)))
}

// Parallax image component
function PxImg({ src, alt, progress, panelIdx, x, y, speed = 1, size = 180, rotate = 0, delay = 0 }) {
  const p = panelProgress(progress, panelIdx)
  const enter = Math.min(1, Math.max(0, (p - delay) * 3))
  const offsetY = lerp(60, -40, p) * speed
  const offsetX = lerp(20, -20, p) * speed * 0.5
  const rot = lerp(-rotate, rotate, p)
  const scale = lerp(0.85, 1, enter)

  return (
    <div
      className="px-img"
      style={{
        left: x, top: y, width: size, height: size,
        opacity: enter,
        transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rot}deg) scale(${scale})`,
      }}
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

export default function PanoramaStrip({ progress }) {
  const translateX = -(progress * 87.5)
  const [openingDoor, setOpeningDoor] = useState(null)

  const handleDoorClick = (e, url, id) => {
    e.preventDefault()
    setOpeningDoor(id)
    setTimeout(() => { window.location.href = url }, 800)
  }

  return (
    <div className="strip" style={{ transform: `translateX(${translateX}%)` }}>

      {/* 1. HERO */}
      <section className="s s--hero">
        <div className="s__c s__c--center">
          <img src="/images/logo.svg" alt="Proxy d.o.o." className="hero-logo" />
          <h1 className="hero-tagline">Sve što dom treba</h1>
          <p className="hero-lead">
            Kvalitetni proizvodi za dom i posao. Od kućanskog pribora
            i sredstava za čišćenje do profesionalnog ugostiteljskog programa.
            Opremamo domove i poslove diljem Hrvatske od 2016.
          </p>
          <div className="scroll-cue">
            <div className="scroll-cue__line" />
            <span className="scroll-cue__label">Istražite</span>
          </div>
        </div>
      </section>

      {/* 2. MALOPRODAJA VRATA */}
      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--blue">MALOPRODAJA</h2>
          <p className="door-sub">Za vaš dom</p>
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

      {/* 3. OTIRAČI */}
      <section className="s s--parallax">
        <div className="s__c s__c--text-left">
          <h2 className="px-title">Otirači po narudžbi</h2>
          <p className="px-desc">
            Personalizirani otirači za hotele, restorane i poslovne prostore.
            Vaš logo, vaše boje. Izrada zavjesa za vrata u raznim dimenzijama
            prema potrebama kupaca.
          </p>
        </div>
        <PxImg src="/images/otiraci-globo.jpg" alt="Otirači Globo" progress={progress} panelIdx={2} x="55%" y="8%" size={220} speed={1.2} rotate={3} delay={0} />
        <PxImg src="/images/otiraci-kingtrade.jpg" alt="Otirači Kingtrade" progress={progress} panelIdx={2} x="62%" y="42%" size={190} speed={0.7} rotate={-2} delay={0.1} />
        <PxImg src="/images/otiraci-hotel.jpg" alt="Otirači za hotele" progress={progress} panelIdx={2} x="38%" y="60%" size={170} speed={1.5} rotate={2} delay={0.15} />
        <PxImg src="/images/otiraci-pristav.jpg" alt="Otirači Pristav" progress={progress} panelIdx={2} x="72%" y="72%" size={160} speed={0.9} rotate={-3} delay={0.2} />
      </section>

      {/* 4. ČIŠĆENJE I KUĆANSTVO */}
      <section className="s s--parallax">
        <div className="s__c s__c--text-right">
          <h2 className="px-title">Čišćenje i kućanstvo</h2>
          <p className="px-desc">
            Mopovi, krpe, sredstva za čišćenje, kuhinjski pribor i program
            za održavanje. Sve što trebate za besprijekorno čist prostor.
          </p>
        </div>
        <PxImg src="/images/proxy-display.jpg" alt="Program čišćenja" progress={progress} panelIdx={3} x="8%" y="10%" size={240} speed={1.0} rotate={2} delay={0} />
        <PxImg src="/images/mopovi.jpg" alt="Kuhinjski program" progress={progress} panelIdx={3} x="15%" y="50%" size={200} speed={1.4} rotate={-2} delay={0.1} />
        <PxImg src="/images/retail-display.jpg" alt="Maloprodajni izlog" progress={progress} panelIdx={3} x="30%" y="68%" size={180} speed={0.6} rotate={1} delay={0.2} />
        <PxImg src="/images/doormats.jpg" alt="Asortiman otirača" progress={progress} panelIdx={3} x="5%" y="78%" size={150} speed={1.8} rotate={-3} delay={0.25} />
      </section>

      {/* 5. NOŽEVI */}
      <section className="s s--parallax s--alt">
        <div className="s__c s__c--text-left">
          <h2 className="px-title">Inox noževi Bonomi</h2>
          <p className="px-desc">
            Profesionalni inox noževi iz Italije. Od kuhinje do
            ugostiteljstva, čelik koji traje generacijama. Made in Italy.
          </p>
        </div>
        <PxImg src="/images/nozevi-bonomi.jpg" alt="Bonomi inox noževi" progress={progress} panelIdx={4} x="50%" y="12%" size={280} speed={0.8} rotate={2} delay={0} />
        <PxImg src="/images/knives-product.jpg" alt="Bonomi set noževa" progress={progress} panelIdx={4} x="58%" y="52%" size={240} speed={1.3} rotate={-2} delay={0.1} />
      </section>

      {/* 6. O NAMA */}
      <section className="s s--story">
        <div className="s__c s__c--story">
          <span className="story-label">O nama</span>
          <h2 className="story-title">Proxy d.o.o.</h2>
          <div className="story-body">
            <p>
              Proxy d.o.o. je trgovina na veliko koja se bavi prodajom asortimana za
              domaćinstvo i ugostiteljstvo. Nudimo i izradu personaliziranih otirača
              s logotipom i natpisima, te izradu zavjesa za vrata u raznim dimenzijama
              prema potrebama kupaca.
            </p>
            <p>
              Tvrtku je 11. svibnja 2016. osnovao Robert Raič, nakon dugogodišnjeg
              iskustva u prodaji, s ciljem da klijentima pruži najkvalitetnije proizvode
              i usluge. Ozbiljnim pristupom i jasnom vizijom, prodajni asortiman tvrtke
              brzo je popunjen robom vrhunske kvalitete.
            </p>
            <p>
              Ključna prekretnica bila je prošle godine kada smo započeli suradnju s
              velikim trgovačkim lancima i prešli u skladište od 700 m². Danas nas
              ima petero: dva komercijalista, dva skladištara i direktor koji radi sve.
            </p>
            <p>
              Fer poslovna praksa i partnerstvo su i ostat će uvijek na prvom mjestu.
              O kvaliteti ponude svjedoči sve veći broj klijenata kojima pružamo
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
              <span className="story-fact__label">Skladišni prostor</span>
            </div>
            <div className="story-fact">
              <span className="story-fact__num">A+</span>
              <span className="story-fact__label">Bonitet tvrtke</span>
            </div>
          </div>
          <div className="story-usp">
            <div className="story-usp__item">Fleksibilnost u poslovanju, naručivanjima i dostavama</div>
            <div className="story-usp__item">Brza isporuka unutar 3 radna dana</div>
            <div className="story-usp__item">Briga o robi na policama kod kupaca</div>
            <div className="story-usp__item">Brzo rješavanje reklamacija i povrata</div>
          </div>
        </div>
      </section>

      {/* 7. SKLADIŠTE */}
      <section className="s s--parallax">
        <div className="s__c s__c--text-right">
          <h2 className="px-title">Naše skladište</h2>
          <p className="px-desc">
            700 m² skladišnog prostora, više od 792 artikla uvijek na stanju,
            spremno za isporuku na području cijele Hrvatske.
          </p>
        </div>
        <PxImg src="/images/warehouse-shelves.jpg" alt="Skladišne police" progress={progress} panelIdx={6} x="6%" y="8%" size={240} speed={1.0} rotate={2} delay={0} />
        <PxImg src="/images/veleprodaja-police.jpg" alt="Role na policama" progress={progress} panelIdx={6} x="12%" y="45%" size={200} speed={1.4} rotate={-1} delay={0.1} />
        <PxImg src="/images/veleprodaja-skladiste.jpg" alt="Otirači na policama" progress={progress} panelIdx={6} x="25%" y="65%" size={180} speed={0.7} rotate={2} delay={0.15} />
        <PxImg src="/images/warehouse-rolls.jpg" alt="Tkanine u skladištu" progress={progress} panelIdx={6} x="8%" y="80%" size={160} speed={1.6} rotate={-2} delay={0.2} />
      </section>

      {/* 8. VELEPRODAJA VRATA */}
      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--gold">VELEPRODAJA</h2>
          <p className="door-sub">Za vaš posao</p>
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
