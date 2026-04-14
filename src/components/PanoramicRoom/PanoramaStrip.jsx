import { useState } from 'react'

function Px({ src, alt, progress, panel, x, y, speed = 1, size = 180, rot = 0, delay = 0 }) {
  const p = Math.max(0, Math.min(1, (progress - panel / 8) / 0.125))
  const enter = Math.min(1, Math.max(0, (p - delay) * 3))
  const oY = (30 - 70 * p) * speed
  const oX = (10 - 20 * p) * speed * 0.5
  const r = -rot + rot * 2 * p
  return (
    <div className="px-img" style={{
      left: x, top: y, width: size, height: size, opacity: enter,
      transform: `translate3d(${oX}px,${oY}px,0) rotate(${r}deg) scale(${0.88 + 0.12 * enter})`
    }}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function Orb({ src, alt, progress, panel, angle, radius, size = 150, speed = 1 }) {
  const p = Math.max(0, Math.min(1, (progress - panel / 8) / 0.125))
  const enter = Math.min(1, p * 4)
  const a = (angle + p * 360 * speed) * Math.PI / 180
  const cx = 50 + Math.cos(a) * radius
  const cy = 50 + Math.sin(a) * radius
  return (
    <div className="px-img" style={{
      left: `${cx}%`, top: `${cy}%`, width: size, height: size, opacity: enter * 0.95,
      transform: `translate(-50%,-50%) rotate(${p * 15 - 7}deg) scale(${0.85 + 0.15 * enter})`
    }}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

export default function PanoramaStrip({ progress }) {
  const [openingDoor, setOpeningDoor] = useState(null)
  const openDoor = (e, url, id) => {
    e.preventDefault()
    setOpeningDoor(id)
    setTimeout(() => { window.location.href = url }, 800)
  }

  return (
    <div className="strip" style={{ transform: `translate3d(${-(progress * 87.5)}%,0,0)` }}>

      <section className="s s--hero">
        <div className="s__c s__c--center">
          <img src="/images/logo-final.png" alt="Proxy d.o.o." className="hero-logo" />
          <p className="hero-lead">
            Kvalitetni proizvodi za dom i posao.
            <br />Od kućanskog pribora i opreme za čišćenje
            <br />do profesionalnog ugostiteljskog programa.
            <br />Opremamo domove i poslove diljem Hrvatske od 2016.
          </p>
          <div className="scroll-cue">
            <div className="scroll-cue__line" />
            <span className="scroll-cue__label">Istražite</span>
          </div>
        </div>
      </section>

      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--blue">MALOPRODAJA</h2>
          <p className="door-sub">Za vaš dom</p>
          <a href="https://maloprodaja.proxy1.hr" className={`door-gate door-gate--blue${openingDoor === 'malo' ? ' door-gate--opening' : ''}`} onClick={(e) => openDoor(e, 'https://maloprodaja.proxy1.hr', 'malo')}>
            <div className="door-gate__left" /><div className="door-gate__right" /><div className="door-gate__glow" />
          </a>
          <span className="door-domain">maloprodaja.proxy1.hr</span>
        </div>
      </section>

      <section className="s s--parallax">
        <div className="s__c s__c--text-left">
          <span className="px-badge">Asortiman</span>
          <h2 className="px-title">Otirači po narudžbi</h2>
          <h3 className="px-subtitle">Personalizirani otirači i zavjese za vrata</h3>
          <p className="px-desc">Izrađujemo otirače s logom za hotele, restorane i poslovne prostore — vaš logo, vaše boje, vaše dimenzije. Također nudimo izradu zavjesa za vrata u svim dimenzijama prema potrebama kupaca.</p>
          <span className="px-highlight">Širok izbor uzoraka i dimenzija →</span>
        </div>
        <Px src="/images/otiraci-globo.jpg" alt="Otirači Globo" progress={progress} panel={2} x="50%" y="4%" size={420} speed={1.2} rot={3} />
        <Px src="/images/otiraci-kingtrade.jpg" alt="Otirači Kingtrade" progress={progress} panel={2} x="64%" y="42%" size={360} speed={0.7} rot={-2} delay={0.08} />
        <Px src="/images/otiraci-hotel.jpg" alt="Otirači za hotele" progress={progress} panel={2} x="38%" y="55%" size={320} speed={1.4} rot={2} delay={0.14} />
        <Px src="/images/otiraci-pristav.jpg" alt="Otirači Pristav" progress={progress} panel={2} x="72%" y="65%" size={300} speed={0.9} rot={-3} delay={0.2} />
      </section>

      <section className="s s--parallax">
        <div className="s__c s__c--text-right">
          <span className="px-badge">Asortiman</span>
          <h2 className="px-title">Oprema za čišćenje</h2>
          <h3 className="px-subtitle">Profesionalni alati za dom i ugostiteljstvo</h3>
          <p className="px-desc">Kompletna ponuda za održavanje prostora — mopovi, krpe, metle, kante, kuhinjski pribor od prirodnog drva i profesionalni alati za čišćenje. Sve što trebate za besprijekorno čist dom ili poslovni prostor.</p>
          <span className="px-highlight">Više od 300 artikala →</span>
        </div>
        <Px src="/images/proxy-display.jpg" alt="Program čišćenja" progress={progress} panel={3} x="4%" y="5%" size={440} speed={1.0} rot={2} />
        <Px src="/images/mopovi.jpg" alt="Kuhinjski program" progress={progress} panel={3} x="12%" y="46%" size={380} speed={1.3} rot={-2} delay={0.08} />
        <Px src="/images/retail-display.jpg" alt="Izlog" progress={progress} panel={3} x="30%" y="60%" size={330} speed={0.6} rot={1} delay={0.16} />
      </section>

      <section className="s s--parallax s--alt">
        <div className="s__c s__c--text-left">
          <span className="px-badge">Kuhinjski program</span>
          <h2 className="px-title">Inox noževi Bonomi</h2>
          <h3 className="px-subtitle">Profesionalni talijanski čelik</h3>
          <p className="px-desc">Noževi iz Italije koji traju generacijama. Dostupni u svim bojama — od kućne kuhinje do profesionalnog ugostiteljstva. Made in Italy kvaliteta po fer cijenama.</p>
          <span className="px-highlight">Ekskluzivni zastupnik za Hrvatsku →</span>
        </div>
        <Px src="/images/nozevi-bonomi.jpg" alt="Bonomi noževi" progress={progress} panel={4} x="45%" y="5%" size={500} speed={0.8} rot={2} />
        <Px src="/images/knives-product.jpg" alt="Set noževa" progress={progress} panel={4} x="55%" y="48%" size={440} speed={1.2} rot={-2} delay={0.1} />
      </section>

      <section className="s s--story">
        <div className="s__c s__c--story">
          <span className="story-badge">O nama</span>
          <h2 className="story-title">Proxy d.o.o.</h2>
          <h3 className="story-subtitle">Sve što dom treba — od 2016. godine</h3>
          <div className="story-body">
            <p>Proxy d.o.o. je veleprodajna i maloprodajna tvrtka iz Splita specijalizirana za opskrbu širokim asortimanom proizvoda za domaćinstvo i ugostiteljstvo. Tvrtku je 11. svibnja 2016. osnovao Robert Raič s jasnom vizijom — ponuditi najkvalitetnije proizvode uz fer poslovnu praksu.</p>
            <p>Danas iz našeg skladišta od 700 m² na adresi Solinska 49 opslužujemo široku mrežu trgovaca, ugostiteljskih objekata i poslovnih subjekata diljem Hrvatske. Naš asortiman obuhvaća kućanski pribor, opremu za čišćenje, personalizirane otirače, zavjese za vrata i profesionalne inox noževe.</p>
          </div>
          <div className="story-values">
            <div className="story-value">
              <div className="story-value__icon">
                <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 2L4 8v8c0 7.7 5.1 14.9 12 16 6.9-1.1 12-8.3 12-16V8L16 2z" /><path d="M11 16l4 4 8-8" /></svg>
              </div>
              <div>
                <h4 className="story-value__title">Kvaliteta</h4>
                <p className="story-value__desc">Samo provjereni, vrhunski proizvodi u ponudi</p>
              </div>
            </div>
            <div className="story-value">
              <div className="story-value__icon">
                <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="16" cy="16" r="14" /><path d="M16 8v8l5 5" /></svg>
              </div>
              <div>
                <h4 className="story-value__title">Pouzdanost</h4>
                <p className="story-value__desc">Isporuka unutar 3 radna dana na cijelom području RH</p>
              </div>
            </div>
            <div className="story-value">
              <div className="story-value__icon">
                <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z" /><path d="M10 16h12M16 10v12" /></svg>
              </div>
              <div>
                <h4 className="story-value__title">Fleksibilnost</h4>
                <p className="story-value__desc">Prilagodljivi u narudžbama, isporuci i briga o policama</p>
              </div>
            </div>
            <div className="story-value">
              <div className="story-value__icon">
                <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 28L16 4l12 24H4z" /><path d="M16 12v8M16 24h.01" /></svg>
              </div>
              <div>
                <h4 className="story-value__title">Fer poslovanje</h4>
                <p className="story-value__desc">Transparentnost i partnerstvo bez skrivenih troškova</p>
              </div>
            </div>
          </div>
          <div className="story-facts">
            <div className="story-fact"><span className="story-fact__num">792+</span><span className="story-fact__label">Artikala</span></div>
            <div className="story-fact"><span className="story-fact__num">700 m²</span><span className="story-fact__label">Skladište</span></div>
            <div className="story-fact"><span className="story-fact__num">200+</span><span className="story-fact__label">Partnera</span></div>
            <div className="story-fact"><span className="story-fact__num">A+</span><span className="story-fact__label">Bonitet</span></div>
            <div className="story-fact"><span className="story-fact__num">24h</span><span className="story-fact__label">Isporuka</span></div>
          </div>
        </div>
      </section>

      <section className="s s--parallax s--warehouse">
        <div className="s__c s__c--center s__c--warehouse-text">
          <span className="px-badge">Logistika</span>
          <h2 className="px-title px-title--center">Naše skladište</h2>
          <h3 className="px-subtitle" style={{ textAlign: 'center' }}>700 m² u srcu Splita</h3>
          <p className="px-desc px-desc--center">Više od 792 artikla uvijek na stanju. Brza isporuka unutar 3 radna dana na području cijele Hrvatske. Solinska 49, Split.</p>
        </div>
        <Orb src="/images/sklad-1.jpg" alt="Tekstil" progress={progress} panel={6} angle={0} radius={32} size={310} speed={0.8} />
        <Orb src="/images/sklad-2.jpg" alt="Role" progress={progress} panel={6} angle={36} radius={35} size={280} speed={1.0} />
        <Orb src="/images/sklad-3.jpg" alt="Stolnjaci" progress={progress} panel={6} angle={72} radius={30} size={270} speed={0.6} />
        <Orb src="/images/sklad-4.jpg" alt="Otirači" progress={progress} panel={6} angle={108} radius={33} size={290} speed={0.9} />
        <Orb src="/images/sklad-5.jpg" alt="Čišćenje" progress={progress} panel={6} angle={144} radius={28} size={260} speed={1.1} />
        <Orb src="/images/sklad-6.jpg" alt="Proizvodi" progress={progress} panel={6} angle={180} radius={34} size={280} speed={0.7} />
        <Orb src="/images/sklad-7.jpg" alt="Tepisi" progress={progress} panel={6} angle={216} radius={31} size={270} speed={1.0} />
        <Orb src="/images/sklad-8.jpg" alt="Display" progress={progress} panel={6} angle={252} radius={36} size={300} speed={0.5} />
        <Orb src="/images/sklad-9.jpg" alt="Roba" progress={progress} panel={6} angle={288} radius={29} size={260} speed={0.8} />
        <Orb src="/images/sklad-10.jpg" alt="Tekstil" progress={progress} panel={6} angle={324} radius={33} size={280} speed={1.2} />
      </section>

      <section className="s s--door-panel">
        <div className="s__c s__c--center">
          <h2 className="door-heading door-heading--gold">VELEPRODAJA</h2>
          <p className="door-sub">Za vaš posao</p>
          <a href="https://veleprodaja.proxy1.hr" className={`door-gate door-gate--gold${openingDoor === 'velo' ? ' door-gate--opening' : ''}`} onClick={(e) => openDoor(e, 'https://veleprodaja.proxy1.hr', 'velo')}>
            <div className="door-gate__left" /><div className="door-gate__right" /><div className="door-gate__glow" />
          </a>
          <span className="door-domain">veleprodaja.proxy1.hr</span>
        </div>
      </section>
    </div>
  )
}
