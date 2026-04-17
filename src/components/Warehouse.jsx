import { useCallback, useEffect, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'

const sources = [
  '/images/sklad-1.jpg',
  '/images/sklad-2.jpg',
  '/images/sklad-3.jpg',
  '/images/sklad-4.jpg',
  '/images/sklad-5.jpg',
  '/images/sklad-6.jpg',
  '/images/sklad-7.jpg',
  '/images/sklad-8.jpg',
]

export default function Warehouse() {
  const { t } = useLocale()
  const w = t('warehouse')
  const alts = w.images || []

  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const open = useCallback((i) => setActiveIndex(i), [])
  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    (e) => { e?.stopPropagation(); setActiveIndex((i) => (i + 1) % sources.length) },
    []
  )
  const prev = useCallback(
    (e) => { e?.stopPropagation(); setActiveIndex((i) => (i - 1 + sources.length) % sources.length) },
    []
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, next, prev])

  const activeSrc = isOpen ? sources[activeIndex] : null
  const activeAlt = isOpen ? alts[activeIndex] : ''

  return (
    <section id="skladiste" className="warehouse" aria-labelledby="warehouse-heading">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{w.eyebrow}</p>
          <h2 id="warehouse-heading" className="section-title">{w.title}</h2>
          <p className="section-sub">{w.sub}</p>
        </header>

        <ul className="gallery-grid">
          {sources.map((src, i) => (
            <li key={i}>
              <button type="button" className="thumb" onClick={() => open(i)} aria-label={`${w.openImage}: ${alts[i] || ''}`}>
                <img src={src} alt={alts[i] || ''} loading="lazy" />
                <span className="thumb-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={w.dialogLabel} onClick={close}>
          <button className="lb-close" onClick={close} aria-label={w.close}>×</button>
          <button className="lb-nav lb-prev" onClick={prev} aria-label={w.prev}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={activeSrc} alt={activeAlt} />
            <figcaption>
              {activeAlt} <span className="lb-count">{activeIndex + 1} / {sources.length}</span>
            </figcaption>
          </figure>
          <button className="lb-nav lb-next" onClick={next} aria-label={w.next}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      )}
    </section>
  )
}
