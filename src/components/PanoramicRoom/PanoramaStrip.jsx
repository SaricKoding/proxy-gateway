import { forwardRef, useState } from 'react'

function Px({ src, alt, panel, x, y, speed = 1, size = 180, rot = 0, delay = 0 }) {
  return (
    <div
      className="px-img"
      data-px="1"
      data-panel={panel}
      data-speed={speed}
      data-rot={rot}
      data-delay={delay}
      style={{ left: x, top: y, width: size, height: size, opacity: 0 }}
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function Orb({ src, alt, panel, angle, radius, size = 150, orbitSpeed = 1 }) {
  return (
    <div
      className="px-img"
      data-px="1"
      data-panel={panel}
      data-speed="0"
      data-rot="0"
      data-delay="0"
      data-orbit="1"
      data-angle={angle}
      data-radius={radius}
      data-ospeed={orbitSpeed}
      style={{ width: size, height: size, opacity: 0, position: 'absolute' }}
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

const PanoramaStrip = forwardRef(function PanoramaStrip(_, ref) {
  const [openingDoor, setOpeningDoor] = useState(null)

  const openDoor = (e, url, id) => {
    e.preventDefault()
    setOpeningDoor(id)
    setTimeout(() => { window.location.href = url }, 800)
  }

  return (
    <div className="strip" ref={ref}>

      {/* 1. HERO */}
      <section className="s s--hero">
        <div className="s__c s__c--center">
          <img src="/images/logo-final.png" alt="Proxy d.o.o. - Sve što dom treba" className="hero-logo" />
          <p className="hero-lead">
            Kvalitetni proizvodi za dom i posao.
            <br />
            Od kućanskog pribora i opreme za čišćenje
            <br />
            do profesionalnog ugostiteljskog programa.
            <br />
            Opremamo domove i poslove diljem Hrvatske od 2016.
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
          <a href="https://maloprodaja.proxy1.hr" className={`door-gate door-gate--blue${openingDoor === 'malo' ? ' door-gate--opening' : ''}`} onClick={(e) => openDoor(e, 'https://maloprodaja.proxy1.hr', 'malo')}>
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
            Izrađujemo personalizirane otirače
            <br />
            za hotele, restorane i poslovne prostore.
            <br />
            Vaš logo, vaše boje, vaše dimenzije.
            <br /><br />
            Također nudimo izradu zavjesa za vrata
            <br />
            u svim dimenzijama prema potrebama kupaca.
          </p>
        </div>
        <Px src="/images/otiraci-globo.jpg" alt="Otirači Globo" panel={2} x="52%" y="6%" size={230} speed={1.2} rot={3} />
        <Px src="/images/otiraci-kingtrade.jpg" alt="Otirači Kingtrade" panel={2} x="62%" y="38%" size={195} speed={0.7} rot={-2} delay={0.08} />
        <Px src="/images/otiraci-hotel.jpg" alt="Otirači za hotele" panel={2} x="42%" y="56%" size={175} speed={1.4} rot={2} delay={0.14} />
        <Px src="/images/otiraci-pristav.jpg" alt="Otirači Pristav" panel={2} x="72%" y="68%" size={160} speed={0.9} rot={-3} delay={0.2} />
      </section>

      {/* 4. OPREMA ZA ČIŠĆENJE */}
      <section className="s s--parallax">
        <div className="s__c s__c--text-right">
          <h2 className="px-title">Oprema za čišćenje kućanstva</h2>
          <p className="px-desc">
            Kompletna ponuda za održavanje prostora.
            <br />
            Mopovi, krpe, metle, kante,
            <br />
            kuhinjski pribor od prirodnog drva
            <br />
            i profesionalni alati za čišćenje.
            <br /><br />
            Sve što trebate za besprijekorno čist
            <br />
            dom ili poslovni prostor.
          </p>
        </div>
        <Px src="/images/proxy-display.jpg" alt="Program čišćenja" panel={3} x="6%" y="8%" size={240} speed={1.0} rot={2} />
        <Px src="/images/mopovi.jpg" alt="Kuhinjski program" panel={3} x="14%" y="46%" size={210} speed={1.3} rot={-2} delay={0.08} />
        <Px src="/images/retail-display.jpg" alt="Izlog" panel={3} x="30%" y="64%" size={180} speed={0.6} rot={1} delay={0.16} />
      </section>

      {/* 5. NOŽEVI */}
      <section className="s s--parallax s--alt">
        <div className="s__c s__c--text-left">
          <h2 className="px-title">Inox noževi Bonomi</h2>
          <p className="px-desc">
            Profesionalni inox noževi iz Italije.
            <br />
            Čelik koji traje generacijama.
            <br /><br />
            Dostupni u svim bojama,
            <br />
            od kuhinje do ugostiteljstva.
            <br />
            Made in Italy.
          </p>
        </div>
        <Px src="/images/nozevi-bonomi.jpg" alt="Bonomi noževi" panel={4} x="48%" y="8%" size={280} speed={0.8} rot={2} />
        <Px src="/images/knives-product.jpg" alt="Set noževa" panel={4} x="58%" y="48%" size={240} speed={1.2} rot={-2} delay={0.1} />
      </section>

      {/* 6. O NAMA */}
      <section className="s s--story">
        <div className="s__c s__c--story">
          <h2 className="story-title">Proxy d.o.o.</h2>
          <div className="story-body">
            <p>
              Trgovina na veliko iz Splita
              <br />
              za domaćinstvo i ugostiteljstvo.
            </p>
            <p>
              Tvrtku je 2016. osnovao Robert Raič.
              <br />
              Prošle godine započeli smo suradnju
              <br />
              s velikim trgovačkim lancima
              <br />
              i prešli u skladište od 700 m².
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
      <section className="s s--parallax s--warehouse">
        <div className="s__c s__c--center s__c--warehouse-text">
          <h2 className="px-title px-title--center">Naše skladište</h2>
          <p className="px-desc px-desc--center">
            700 m² prostora.
            <br />
            Više od 792 artikla uvijek na stanju.
            <br />
            Isporuka unutar 3 radna dana
            <br />
            na području cijele Hrvatske.
          </p>
        </div>
        <Orb src="/images/sklad-1.jpg" alt="Tekstil" panel={6} angle={0} radius={32} size={170} orbitSpeed={0.8} />
        <Orb src="/images/sklad-2.jpg" alt="Role tkanina" panel={6} angle={36} radius={35} size={155} orbitSpeed={1.0} />
        <Orb src="/images/sklad-3.jpg" alt="Stolnjaci" panel={6} angle={72} radius={30} size={145} orbitSpeed={0.6} />
        <Orb src="/images/sklad-4.jpg" alt="Otirači" panel={6} angle={108} radius={33} size={160} orbitSpeed={0.9} />
        <Orb src="/images/sklad-5.jpg" alt="York čišćenje" panel={6} angle={144} radius={28} size={140} orbitSpeed={1.1} />
        <Orb src="/images/sklad-6.jpg" alt="Proizvodi" panel={6} angle={180} radius={34} size={150} orbitSpeed={0.7} />
        <Orb src="/images/sklad-7.jpg" alt="Tepisi" panel={6} angle={216} radius={31} size={145} orbitSpeed={1.0} />
        <Orb src="/images/sklad-8.jpg" alt="Proxy display" panel={6} angle={252} radius={36} size={165} orbitSpeed={0.5} />
        <Orb src="/images/sklad-9.jpg" alt="Pakirana roba" panel={6} angle={288} radius={29} size={140} orbitSpeed={0.8} />
        <Orb src="/images/sklad-10.jpg" alt="Tekstil" panel={6} angle={324} radius={33} size={150} orbitSpeed={1.2} />
      </section>

      {/* 8. VELEPRODAJA */}
      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--gold">VELEPRODAJA</h2>
          <p className="door-sub">Za vaš posao</p>
          <a href="https://veleprodaja.proxy1.hr" className={`door-gate door-gate--gold${openingDoor === 'velo' ? ' door-gate--opening' : ''}`} onClick={(e) => openDoor(e, 'https://veleprodaja.proxy1.hr', 'velo')}>
            <div className="door-gate__left" />
            <div className="door-gate__right" />
            <div className="door-gate__glow" />
          </a>
          <span className="door-domain">veleprodaja.proxy1.hr</span>
        </div>
      </section>
    </div>
  )
})

export default PanoramaStrip
