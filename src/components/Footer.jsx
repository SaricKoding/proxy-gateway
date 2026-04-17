export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo-inverse.svg" alt="Proxy d.o.o." width="160" height="44" />
          <p className="footer-tag">Sve što dom treba — od 2016.</p>
        </div>

        <div className="footer-col">
          <h3>Kanali prodaje</h3>
          <ul>
            <li><a href="https://veleproday.proxy1.hr" rel="noopener">Veleprodaja (B2B)</a></li>
            <li><a href="https://maloprodaja.proxy.hr" rel="noopener">Maloprodaja (B2C)</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Tvrtka</h3>
          <ul>
            <li>Proxy d.o.o.</li>
            <li>Solin, Hrvatska</li>
            <li>Osn. 11.05.2016.</li>
            <li>Osnivač: Robert Raič</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Djelatnost</h3>
          <ul>
            <li>Kućanski pribor</li>
            <li>Sredstva za čišćenje</li>
            <li>Ugostiteljski program</li>
            <li>Personalizirani otirači</li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>© {year} Proxy d.o.o. Sva prava pridržana.</span>
          <span>Fer poslovna praksa · Kvaliteta · Partnerstvo</span>
        </div>
      </div>
    </footer>
  )
}
