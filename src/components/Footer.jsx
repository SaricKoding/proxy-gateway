export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/proxy-logo-final.png" alt="Proxy d.o.o." width="170" height="48" />
          <p className="footer-tag">Sve što dom treba — od 2016.</p>
          <address className="footer-address">
            <strong>Proxy d.o.o.</strong><br />
            Solinska 49, Dujmovača<br />
            21000 Split, Hrvatska
          </address>
          <dl className="footer-legal">
            <div><dt>OIB</dt><dd>79145895043</dd></div>
            <div><dt>MB</dt><dd>04548582</dd></div>
          </dl>
        </div>

        <div className="footer-col">
          <h3>Kanali prodaje</h3>
          <ul>
            <li><a href="https://veleprodaja.proxy1.hr" rel="noopener">Veleprodaja (B2B)</a></li>
            <li><a href="https://maloprodaja.proxy1.hr" rel="noopener">Maloprodaja (B2C)</a></li>
          </ul>

          <h3 className="footer-subhead">Kontakt</h3>
          <ul className="footer-contact">
            <li>
              <span className="contact-name">Robert Raič</span>
              <span className="contact-role">Uprava</span>
              <a href="mailto:robert@proxy1.hr">robert@proxy1.hr</a>
            </li>
          </ul>
        </div>

        <div className="footer-map">
          <h3>Lokacija</h3>
          <div className="map-wrap">
            <iframe
              title="Proxy d.o.o. — lokacija na karti"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d185.27541814892263!2d16.47649882708056!3d43.52654878264487!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shr!2sus!4v1776417425471!5m2!1shr!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <span>© {year} Proxy d.o.o. Sva prava pridržana.</span>
          <span className="footer-credit">
            Web dizajn i održavanje ·{' '}
            <a href="https://www.klikoteka.hr" target="_blank" rel="noopener noreferrer">
              KLIKOTEKA d.o.o.
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
