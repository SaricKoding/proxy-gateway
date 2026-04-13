import { useState } from 'react'

function PxImg({ src, alt, progress, panelIdx, x, y, speed = 1, size = 180, rotate = 0, delay = 0 }) {
  const panelSize = 1 / 8
  const start = panelIdx * panelSize
  const end = start + panelSize
  const p = Math.max(0, Math.min(1, (progress - start) / (end - start)))
  const enter = Math.min(1, Math.max(0, (p - delay) * 3))
  const offsetY = (30 - 70 * p) * speed
  const offsetX = (10 - 20 * p) * speed * 0.5
  const rot = (-rotate + rotate * 2 * p)
  const scale = 0.88 + 0.12 * enter

  return (
    <div
      className="px-img"
      style={{
        left: x, top: y, width: size, height: size,
        opacity: enter,
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${rot}deg) scale(${scale})`,
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
    <div className="strip" style={{ transform: `translate3d(${translateX}%, 0, 0)` }}>

      {/* 1. HERO */}
      <section className="s s--hero">
        <div className="s__c s__c--center">
          <img src="/images/logo-final.png" alt="Proxy d.o.o. - Sve što dom treba" className="hero-logo" />
          <p className="hero-lead">
            Kvalitetni proizvodi za dom i posao. Od kućanskog pribora
            i sredstava za čišćenje do profesionalnog ugostiteljskog programa.
          </p>
          <div className="scroll-cue">
            <div className="scroll-cue__line" />
            <span className="scroll-cue__label">Istražite</span>
          </div>
        </div>
      </section>

      {/* 2. MALOPRODAJA */}
      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--blue">MALOPRODAJA</h2>
          <p className="door-sub">Za vaš dom</p>
          <a
            href="https://maloprodaja.proxy1.hr"
            className={`door-gate door-gate--blue${openingDoor === 'malo' ? ' door-gate--opening' : ''}`}
            onClick={(e) => handleDoorClick(e, 'https://maloprodaja.proxy1.hr', 'malo')}
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
            Vaš logo, vaše boje. Izrada zavjesa za vrata u raznim dimenzijama.
          </p>
        </div>
        <PxImg src="/images/otiraci-globo.jpg" alt="Otirači Globo" progress={progress} panelIdx={2} x="52%" y="8%" size={220} speed={1.2} rotate={3} />
        <PxImg src="/images/otiraci-kingtrade.jpg" alt="Otirači Kingtrade" progress={progress} panelIdx={2} x="60%" y="40%" size={190} speed={0.7} rotate={-2} delay={0.1} />
        <PxImg src="/images/otiraci-hotel.jpg" alt="Otirači za hotele" progress={progress} panelIdx={2} x="40%" y="58%" size={170} speed={1.5} rotate={2} delay={0.15} />
        <PxImg src="/images/otiraci-pristav.jpg" alt="Otirači Pristav" progress={progress} panelIdx={2} x="70%" y="70%" size={155} speed={0.9} rotate={-3} delay={0.2} />
      </section>

      {/* 4. ČIŠĆENJE */}
      <section className="s s--parallax">
        <div className="s__c s__c--text-right">
          <h2 className="px-title">Čišćenje i kućanstvo</h2>
          <p className="px-desc">
            Mopovi, krpe, sredstva za čišćenje, kuhinjski pribor
            i program za održavanje prostora.
          </p>
        </div>
        <PxImg src="/images/proxy-display.jpg" alt="Program čišćenja" progress={progress} panelIdx={3} x="8%" y="10%" size={230} speed={1.0} rotate={2} />
        <PxImg src="/images/mopovi.jpg" alt="Kuhinjski program" progress={progress} panelIdx={3} x="15%" y="48%" size={200} speed={1.3} rotate={-2} delay={0.1} />
        <PxImg src="/images/retail-display.jpg" alt="Izlog" progress={progress} panelIdx={3} x="28%" y="66%" size={175} speed={0.6} rotate={1} delay={0.18} />
      </section>

      {/* 5. NOŽEVI */}
      <section className="s s--parallax s--alt">
        <div className="s__c s__c--text-left">
          <h2 className="px-title">Inox noževi Bonomi</h2>
          <p className="px-desc">
            Profesionalni inox noževi iz Italije.
            Čelik koji traje generacijama. Made in Italy.
          </p>
        </div>
        <PxImg src="/images/nozevi-bonomi.jpg" alt="Bonomi noževi" progress={progress} panelIdx={4} x="48%" y="10%" size={270} speed={0.8} rotate={2} />
        <PxImg src="/images/knives-product.jpg" alt="Set noževa" progress={progress} panelIdx={4} x="56%" y="50%" size={230} speed={1.2} rotate={-2} delay={0.1} />
      </section>

      {/* 6. O NAMA */}
      <section className="s s--story">
        <div className="s__c s__c--story">
          <h2 className="story-title">Proxy d.o.o.</h2>
          <div className="story-body">
            <p>
              Trgovina na veliko iz Splita za domaćinstvo i ugostiteljstvo.
              Nudimo i izradu personaliziranih otirača s logotipom, te
              zavjesa za vrata u raznim dimenzijama.
            </p>
            <p>
              Tvrtku je 2016. osnovao Robert Raič. Prošle godine započeli smo
              suradnju s velikim trgovačkim lancima i prešli u skladište od 700 m².
            </p>
          </div>
          <div className="story-facts">
            <div className="story-fact">
              <span className="story-fact__num">792+</span>
              <span className="story-fact__label">Artikala</span>
            </div>
            <div className="story-fact">
              <span className="story-fact__num">700 m²</span>
              <span className="story-fact__label">Skladište</span>
            </div>
            <div className="story-fact">
              <span className="story-fact__num">A+</span>
              <span className="story-fact__label">Bonitet</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SKLADIŠTE */}
      <section className="s s--parallax">
        <div className="s__c s__c--text-right">
          <h2 className="px-title">Naše skladište</h2>
          <p className="px-desc">
            700 m² skladišnog prostora. Više od 792 artikla uvijek na stanju,
            isporuka unutar 3 radna dana.
          </p>
        </div>
        <PxImg src="/images/warehouse-shelves.jpg" alt="Skladište" progress={progress} panelIdx={6} x="6%" y="8%" size={230} speed={1.0} rotate={2} />
        <PxImg src="/images/veleprodaja-police.jpg" alt="Police" progress={progress} panelIdx={6} x="12%" y="45%" size={200} speed={1.3} rotate={-1} delay={0.1} />
        <PxImg src="/images/warehouse-rolls.jpg" alt="Tkanine" progress={progress} panelIdx={6} x="22%" y="65%" size={175} speed={0.7} rotate={2} delay={0.15} />
      </section>

      {/* 8. VELEPRODAJA */}
      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--gold">VELEPRODAJA</h2>
          <p className="door-sub">Za vaš posao</p>
          <a
            href="https://veleprodaja.proxy1.hr"
            className={`door-gate door-gate--gold${openingDoor === 'velo' ? ' door-gate--opening' : ''}`}
            onClick={(e) => handleDoorClick(e, 'https://veleprodaja.proxy1.hr', 'velo')}
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
