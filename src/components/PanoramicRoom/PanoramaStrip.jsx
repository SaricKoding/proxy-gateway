export default function PanoramaStrip({ progress }) {
  const translateX = -(progress * 87.5)

  // Calculate which panel is currently centered (0-7)
  const currentPanel = Math.round(progress * 7)

  return (
    <div
      className="strip"
      style={{ transform: `translateX(${translateX}%)` }}
    >
      {/* ── 1. HERO — Logo + Tagline ── */}
      <section className="s s--hero">
        <div className="s__inner">
          <div className="hero-logo">
            <img src="/images/logo.png" alt="Proxy d.o.o." className="hero-logo__img" />
          </div>
          <h1 className="hero-tagline">Sve što dom treba</h1>
          <p className="hero-lead">
            Od kućanskog pribora i sredstava za čišćenje do profesionalnog
            ugostiteljskog programa — opremamo domove i poslove diljem Hrvatske od 2016.
          </p>
          <div className="scroll-cue">
            <div className="scroll-cue__line" />
            <span className="scroll-cue__label">Istražite</span>
          </div>
        </div>
      </section>

      {/* ── 2. MALOPRODAJA VRATA ── */}
      <section className="s s--door">
        <div className="s__inner">
          <a href="https://maloprodaja.proxy1.hr" className="door-card door-card--blue">
            <div className="door-card__visual">
              <div className="door-card__door">
                <div className="door-card__panel-a" />
                <div className="door-card__panel-b" />
                <div className="door-card__knob" />
              </div>
              <div className="door-card__glow" />
            </div>
            <div className="door-card__body">
              <span className="door-card__eyebrow">Maloprodaja</span>
              <h2 className="door-card__title">Za vaš dom</h2>
              <p className="door-card__desc">
                Pronađite sve za uređenje i održavanje doma — od kvalitetnih
                otirača i kuhinjskog pribora do sredstava za čišćenje koje
                profesionalci preporučuju.
              </p>
              <span className="door-card__cta">
                Otvori trgovinu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ── 3. OTIRAČI ── */}
      <section className="s s--products">
        <div className="s__inner">
          <div className="prod-header">
            <span className="prod-header__num">01</span>
            <div>
              <h2 className="prod-header__title">Otirači po narudžbi</h2>
              <p className="prod-header__desc">
                Personalizirani otirači za hotele, restorane i poslovne prostore.
                Vaš logo, vaše boje — mi izrađujemo.
              </p>
            </div>
          </div>
          <div className="prod-mosaic prod-mosaic--4">
            <div className="prod-mosaic__item"><img src="/images/otiraci-globo.jpg" alt="Otirači Globo" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/otiraci-kingtrade.jpg" alt="Otirači Kingtrade" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/otiraci-hotel.jpg" alt="Otirači za hotele" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/otiraci-pristav.jpg" alt="Otirači Pristav" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* ── 4. ČIŠĆENJE & KUĆANSTVO ── */}
      <section className="s s--products">
        <div className="s__inner">
          <div className="prod-header">
            <span className="prod-header__num">02</span>
            <div>
              <h2 className="prod-header__title">Čišćenje & Kućanstvo</h2>
              <p className="prod-header__desc">
                Mopovi, krpe, sredstva za čišćenje i kuhinjski program.
                Sve što trebate za besprijekorno čist prostor — dom ili posao.
              </p>
            </div>
          </div>
          <div className="prod-mosaic prod-mosaic--4">
            <div className="prod-mosaic__item"><img src="/images/proxy-display.jpg" alt="Proxy program čišćenja" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/mopovi.jpg" alt="Drveni kuhinjski program" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/retail-display.jpg" alt="Maloprodajni izlog" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/doormats.jpg" alt="Asortiman otirača" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* ── 5. NOŽEVI ── */}
      <section className="s s--products s--dark">
        <div className="s__inner">
          <div className="prod-header">
            <span className="prod-header__num">03</span>
            <div>
              <h2 className="prod-header__title">Inox noževi — Bonomi</h2>
              <p className="prod-header__desc">
                Made in Italy. Profesionalni inox noževi u svim bojama —
                od kuhinje do ugostiteljstva. Čelik koji traje generacijama.
              </p>
            </div>
          </div>
          <div className="prod-mosaic prod-mosaic--2">
            <div className="prod-mosaic__item prod-mosaic__item--tall"><img src="/images/nozevi-bonomi.jpg" alt="Bonomi inox noževi" loading="lazy" /></div>
            <div className="prod-mosaic__item prod-mosaic__item--tall"><img src="/images/knives-product.jpg" alt="Bonomi set noževa" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* ── 6. O NAMA ── */}
      <section className="s s--story">
        <div className="s__inner">
          <span className="story__eyebrow">Naša priča</span>
          <h2 className="story__title">Proxy d.o.o.</h2>
          <p className="story__text">
            Robert Raič je 2016. u Splitu pokrenuo tvrtku s jasnom vizijom —
            pružiti hrvatskom tržištu vrhunske proizvode za dom i ugostiteljstvo
            uz fer cijene i pouzdanu isporuku. Danas, s više od 792 artikla u ponudi
            i mrežom od 200+ partnera, Proxy je sinonim za kvalitetu i povjerenje.
          </p>
          <div className="story__stats">
            <div className="story__stat">
              <span className="story__stat-num">792+</span>
              <span className="story__stat-label">Artikala u ponudi</span>
            </div>
            <div className="story__stat">
              <span className="story__stat-num">24h</span>
              <span className="story__stat-label">Brza isporuka</span>
            </div>
            <div className="story__stat">
              <span className="story__stat-num">200+</span>
              <span className="story__stat-label">Zadovoljnih partnera</span>
            </div>
          </div>
          <div className="story__values">
            <div className="story__value"><strong>Kvaliteta</strong> — samo provjereni proizvodi</div>
            <div className="story__value"><strong>Pouzdanost</strong> — dostava na vrijeme, uvijek</div>
            <div className="story__value"><strong>Fer poslovanje</strong> — bez skrivenih troškova</div>
          </div>
        </div>
      </section>

      {/* ── 7. SKLADIŠTE ── */}
      <section className="s s--products">
        <div className="s__inner">
          <div className="prod-header">
            <span className="prod-header__num">04</span>
            <div>
              <h2 className="prod-header__title">Naše skladište</h2>
              <p className="prod-header__desc">
                Više od 792 artikala uvijek na stanju — spremno za isporuku
                unutar 24 sata na području cijele Hrvatske.
              </p>
            </div>
          </div>
          <div className="prod-mosaic prod-mosaic--4">
            <div className="prod-mosaic__item"><img src="/images/warehouse-shelves.jpg" alt="Skladišne police" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/veleprodaja-police.jpg" alt="Role na policama" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/veleprodaja-skladiste.jpg" alt="Otirači na policama" loading="lazy" /></div>
            <div className="prod-mosaic__item"><img src="/images/warehouse-rolls.jpg" alt="Tkanine u skladištu" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* ── 8. VELEPRODAJA VRATA ── */}
      <section className="s s--door">
        <div className="s__inner">
          <a href="https://veleprodaja.proxy1.hr" className="door-card door-card--gold">
            <div className="door-card__visual">
              <div className="door-card__door door-card__door--gold">
                <div className="door-card__panel-a" />
                <div className="door-card__panel-b" />
                <div className="door-card__knob" />
              </div>
              <div className="door-card__glow door-card__glow--gold" />
            </div>
            <div className="door-card__body">
              <span className="door-card__eyebrow door-card__eyebrow--gold">Veleprodaja</span>
              <h2 className="door-card__title">Za vaš posao</h2>
              <p className="door-card__desc">
                B2B platforma za poslovne kupce — veleprodajne cijene,
                brza isporuka i osobni komercijalist. Registrirajte se
                i pristupite cijelom katalogu.
              </p>
              <span className="door-card__cta door-card__cta--gold">
                Otvori veleprodaju
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  )
}
