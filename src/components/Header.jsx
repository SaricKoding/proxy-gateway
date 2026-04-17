import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        <a href="#top" className="brand" aria-label="Proxy d.o.o. — Početna">
          <img src="/images/logo.png" alt="Proxy d.o.o." width="140" height="40" />
        </a>

        <nav className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Glavna navigacija">
          <a href="#izbor" onClick={close}>Izbor</a>
          <a href="#o-nama" onClick={close}>O nama</a>
          <a href="#skladiste" onClick={close}>Skladište</a>
          <a href="#kategorije" onClick={close}>Kategorije</a>
          <a href="#otiraci" onClick={close}>Otirači</a>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="https://maloprodaja.proxy.hr" rel="noopener" onClick={close}>Maloprodaja</a>
            <a className="btn btn-gold" href="https://veleproday.proxy1.hr" rel="noopener" onClick={close}>Veleprodaja</a>
          </div>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Otvori izbornik"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
