import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header only appears after scrolling (minimal, just logo)
  if (!scrolled) return null

  return (
    <header className="header header--scrolled">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Proxy d.o.o.">
          <img src="/images/logo.svg" alt="Proxy" style={{ height: '28px', width: 'auto' }} />
        </a>
      </div>
    </header>
  )
}
