import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useLocale()
  const nav = t('nav')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Proxy d.o.o.">
          <span className="brand-wordmark">PROXY</span>
        </a>

        <nav className={`primary-nav ${open ? 'is-open' : ''}`} aria-label={nav.main}>
          <a href="#kategorije" onClick={close}>{nav.kategorije}</a>
          <a href="#izbor" onClick={close}>{nav.izbor}</a>
          <a href="#otiraci" onClick={close}>{nav.otiraci}</a>
          <a href="#o-nama" onClick={close}>{nav.onama}</a>
          <a href="#zasto-proxy" onClick={close}>{nav.zasto}</a>
          <a href="#skladiste" onClick={close}>{nav.skladiste}</a>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="https://maloprodaja.proxy1.hr" rel="noopener" onClick={close}>{nav.maloprodaja}</a>
            <a className="btn btn-gold" href="https://veleprodaja.proxy1.hr" rel="noopener" onClick={close}>{nav.veleprodaja}</a>
          </div>
          <LanguageSwitcher className="in-drawer" />
        </nav>

        <LanguageSwitcher className="in-header" />

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
