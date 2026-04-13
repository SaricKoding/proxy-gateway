import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Proxy d.o.o. — Početna">
          <img src="/images/logo.png" alt="Proxy" width="120" height="auto" style={{ height: '32px', width: 'auto' }} />
        </a>
        <nav className="header__nav" aria-label="Glavni izbornik">
          <a href="#o-nama" className="header__link">O nama</a>
          <a href="#kontakt" className="header__link">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
