import { useLocale } from '../i18n/LocaleContext'

export default function Footer() {
  const { t } = useLocale()
  const f = t('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/proxy-logo-final.png" alt="Proxy d.o.o." width="170" height="48" />
          <p className="footer-tag">{f.tag}</p>
          <address className="footer-address">
            <strong>Proxy d.o.o.</strong><br />
            {f.address[0]}<br />
            {f.address[1]}
          </address>
          <dl className="footer-legal">
            <div><dt>OIB</dt><dd>79145895043</dd></div>
            <div><dt>MB</dt><dd>04548582</dd></div>
          </dl>
        </div>

        <div className="footer-col">
          <h3>{f.channelsHead}</h3>
          <ul>
            <li><a href="https://veleprodaja.proxy1.hr" rel="noopener">{f.channels.wholesale}</a></li>
            <li><a href="https://maloprodaja.proxy1.hr" rel="noopener">{f.channels.retail}</a></li>
          </ul>

          <h3 className="footer-subhead">{f.contactHead}</h3>
          <ul className="footer-contact">
            <li>
              <span className="contact-name">Robert Raič</span>
              <span className="contact-role">{f.contactRole}</span>
              <a href="mailto:robert@proxy1.hr">robert@proxy1.hr</a>
            </li>
          </ul>
        </div>

        <div className="footer-map">
          <h3>{f.locationHead}</h3>
          <div className="map-wrap">
            <iframe
              title={f.mapTitle}
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
          <span>© {year} Proxy d.o.o. {f.rights}</span>
          <span className="footer-credit">
            {f.credit[0]}·{' '}
            <a href="https://www.klikoteka.hr" target="_blank" rel="noopener noreferrer">
              {f.credit[1]}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
