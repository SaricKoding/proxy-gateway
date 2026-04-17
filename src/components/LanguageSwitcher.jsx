import { useLocale } from '../i18n/LocaleContext'

// Croatian flag (šahovnica simplified as a red/white pattern)
const FlagHR = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
    <rect width="22" height="16" fill="#171796" />
    <rect width="22" height="5.33" fill="#FF0000" />
    <rect y="10.66" width="22" height="5.33" fill="#FFFFFF" />
    <g>
      <rect x="8.5" y="5" width="5" height="5" fill="#FFFFFF" />
      <rect x="8.5" y="5" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="11" y="5" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="9.75" y="6.25" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="12.25" y="6.25" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="8.5" y="7.5" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="11" y="7.5" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="9.75" y="8.75" width="1.25" height="1.25" fill="#FF0000" />
      <rect x="12.25" y="8.75" width="1.25" height="1.25" fill="#FF0000" />
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
