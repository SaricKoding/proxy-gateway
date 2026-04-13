export default function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <svg viewBox="0 0 220 50" width="160" height="36" aria-label="Proxy d.o.o. logo">
              <defs>
                <linearGradient id="fpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
              </defs>
              <path
                d="M6 6h15c7 0 13 4 13 11s-6 11-13 11H14v12H6V6z M14 24h6c3 0 5-2 5-5s-2-5-5-5H14v10z"
                fill="url(#fpGrad)"
              />
              <text x="46" y="30" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="28" fill="#FFFFFF" letterSpacing="2">
                PROXY
              </text>
              <text x="46" y="42" fontFamily="'Barlow Condensed', sans-serif" fontWeight="500" fontSize="8.5" fill="rgba(255,255,255,0.4)" letterSpacing="2">
                SVE ŠTO DOM TREBA
              </text>
            </svg>
            <p className="footer__tagline">
              Pouzdani partner za kvalitetne proizvode za dom i posao od 2016. godine.
            </p>
          </div>

          {/* Kontakt */}
          <div className="footer__col">
            <h4 className="footer__heading">Kontakt</h4>
            <address className="footer__address">
              <p>Solinska 49</p>
              <p>21000 Split, Hrvatska</p>
            </address>
            <ul className="footer__list">
              <li>
                <a href="mailto:komercijala@proxy1.hr">komercijala@proxy1.hr</a>
              </li>
              <li>
                <a href="mailto:web@proxy1.hr">web@proxy1.hr</a>
              </li>
            </ul>
          </div>

          {/* Linkovi */}
          <div className="footer__col">
            <h4 className="footer__heading">Brzi linkovi</h4>
            <ul className="footer__list">
              <li>
                <a href="https://maloprodaja.proxy1.hr">Maloprodaja</a>
              </li>
              <li>
                <a href="https://veleprodaja.proxy1.hr">Veleprodaja</a>
              </li>
              <li>
                <a href="#o-nama">O nama</a>
              </li>
            </ul>
          </div>

          {/* Radno vrijeme */}
          <div className="footer__col">
            <h4 className="footer__heading">Informacije</h4>
            <ul className="footer__list">
              <li>Robert Raič, direktor</li>
              <li>
                <a href="mailto:robert@proxy1.hr">robert@proxy1.hr</a>
              </li>
              <li>OIB: {/* TODO: dodati stvarni OIB */}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2016–{new Date().getFullYear()} Proxy d.o.o. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  )
}
