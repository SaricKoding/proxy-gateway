import { useLocale } from '../i18n/LocaleContext'

// Hrvatska zastava: crveno / bijelo / plavo (odozgo), sa šahovnicom u sredini
const FlagHR = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
    <rect y="0"     width="22" height="5.334" fill="#FF0000" />
    <rect y="5.334" width="22" height="5.333" fill="#FFFFFF" />
    <rect y="10.667" width="22" height="5.333" fill="#171796" />
    {/* Šahovnica (5x5 polja), naizmjenicno crveno/bijelo, pocinje crvenim */}
    <g transform="translate(8.2 4.5)">
      {Array.from({ length: 25 }).map((_, i) => {
        const col = i % 5
        const row = Math.floor(i / 5)
        const red = (col + row) % 2 === 0
        return (
          <rect
            key={i}
            x={col * 1.12}
            y={row * 1.4}
            width="1.12"
            height="1.4"
            fill={red ? '#FF0000' : '#FFFFFF'}
          />
        )
      })}
    </g>
  </svg>
)

// Union Jack simplified (EN/UK flag)
const FlagEN = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
    <rect width="22" height="16" fill="#012169" />
    <path d="M0 0L22 16M22 0L0 16" stroke="#FFFFFF" strokeWidth="2.4" />
    <path d="M0 0L22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.2" clipPath="polygon(0 0, 50% 50%, 0 100%, 100% 100%, 50% 50%, 100% 0)" />
    <path d="M11 0V16M0 8H22" stroke="#FFFFFF" strokeWidth="3.8" />
    <path d="M11 0V16M0 8H22" stroke="#C8102E" strokeWidth="2.2" />
  </svg>
)

export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale } = useLocale()

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label="Jezik / Language">
      <button
        type="button"
        className={`lang-btn ${locale === 'hr' ? 'is-active' : ''}`}
        onClick={() => setLocale('hr')}
        aria-pressed={locale === 'hr'}
        aria-label="Hrvatski"
        title="Hrvatski"
      >
        <FlagHR />
        <span>HR</span>
      </button>
      <button
        type="button"
        className={`lang-btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label="English"
        title="English"
      >
        <FlagEN />
        <span>EN</span>
      </button>
    </div>
  )
}
