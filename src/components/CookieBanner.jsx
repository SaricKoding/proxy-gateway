import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'

const STORAGE_KEY = 'proxy_cookie_consent'
const CONSENT_VERSION = 1

function readConsent() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed && parsed.version === CONSENT_VERSION) return parsed
    return null
  } catch {
    return null
  }
}

function writeConsent(status) {
  try {
    const value = JSON.stringify({
      status,
      version: CONSENT_VERSION,
      ts: new Date().toISOString(),
    })
    window.localStorage.setItem(STORAGE_KEY, value)
    window.dispatchEvent(new CustomEvent('proxy:cookie-consent', { detail: { status } }))
  } catch {
    // ignore (private mode etc.)
  }
}

export default function CookieBanner() {
  const { t } = useLocale()
  const c = t('cookies')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = readConsent()
    if (!consent) setOpen(true)

    const handler = () => {
      const fresh = readConsent()
      setOpen(!fresh)
    }
    window.addEventListener('proxy:open-cookie-banner', () => setOpen(true))
    window.addEventListener('storage', handler)
    return () => {
      window.removeEventListener('proxy:open-cookie-banner', () => setOpen(true))
      window.removeEventListener('storage', handler)
    }
  }, [])

  if (!open) return null

  const accept = () => {
    writeConsent('accepted')
    setOpen(false)
  }
  const reject = () => {
    writeConsent('rejected')
    setOpen(false)
  }

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong id="cookie-title">{c.title}</strong>
          <p id="cookie-desc">
            {c.text} <a href="/politika-kolacica">{c.linkLabel}</a>.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="btn btn-ghost-dark" onClick={reject}>
            {c.reject}
          </button>
          <button type="button" className="btn btn-blue" onClick={accept}>
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
