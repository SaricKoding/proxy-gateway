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
          <svg viewBox="0 0 260 60" width="180" height="42" aria-hidden="true">
            <defs>
              <linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
            </defs>
            <path
              d="M8 8h18c9 0 16 5 16 14s-7 14-16 14H18v14H8V8z M18 30h7c4 0 7-2 7-7s-3-7-7-7H18v14z"
              fill="url(#hpGrad)"
            />
            <text x="58" y="37" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="34" fill="#FFFFFF" letterSpacing="3">
              PROXY
            </text>
            <text x="58" y="52" fontFamily="'Barlow Condensed', sans-serif" fontWeight="500" fontSize="10" fill="rgba(255,255,255,0.5)" letterSpacing="2.5">
              SVE ŠTO DOM TREBA
            </text>
          </svg>
        </a>

        <nav className="header__nav" aria-label="Glavni izbornik">
          <a href="#o-nama" className="header__link">O nama</a>
          <a href="#kontakt" className="header__link">Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
