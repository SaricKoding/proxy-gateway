export default function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/logo.png" alt="Proxy d.o.o." width="140" style={{ height: '40px', width: 'auto' }} />
            <p className="footer__tagline">
              Pouzdani partner za kvalitetne proizvode za dom i posao od 2016. godine.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Kontakt</h4>
            <address className="footer__address">
              <p>Solinska 49</p>
              <p>21000 Split, Hrvatska</p>
            </address>
            <ul className="footer__list">
              <li><a href="mailto:komercijala@proxy1.hr">komercijala@proxy1.hr</a></li>
              <li><a href="mailto:web@proxy1.hr">web@proxy1.hr</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Linkovi</h4>
            <ul className="footer__list">
              <li><a href="https://maloprodaja.proxy1.hr">Maloprodaja</a></li>
              <li><a href="https://veleprodaja.proxy1.hr">Veleprodaja</a></li>
              <li><a href="#o-nama">O nama</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Direktor</h4>
            <ul className="footer__list">
              <li>Robert Raič</li>
              <li><a href="mailto:robert@proxy1.hr">robert@proxy1.hr</a></li>
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
