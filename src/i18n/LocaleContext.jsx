import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLocale, locales, messages } from './index'

const LocaleContext = createContext(null)

const SITE_ORIGIN = 'https://proxy1.hr'

function readLocaleFromPath(pathname) {
  if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) return 'en'
  return defaultLocale
}

function pathFor(locale, rest = '') {
  // rest may contain hash like '#o-nama'
  const base = locale === 'en' ? '/en/' : '/'
  return base + rest.replace(/^\/+/, '')
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() =>
    typeof window === 'undefined' ? defaultLocale : readLocaleFromPath(window.location.pathname)
  )

  // Keep <html lang> and dynamic meta in sync
  useEffect(() => {
    const m = messages[locale]
    document.documentElement.lang = locale === 'en' ? 'en' : 'hr'
    document.title = m.meta.title

    const setMeta = (selector, value) => {
      const el = document.querySelector(selector)
      if (el && value != null) el.setAttribute('content', value)
    }
    setMeta('meta[name="description"]', m.meta.description)
    setMeta('meta[property="og:title"]', m.meta.ogTitle)
    setMeta('meta[property="og:description"]', m.meta.ogDescription)
    setMeta('meta[property="og:locale"]', locale === 'en' ? 'en_US' : 'hr_HR')
    setMeta('meta[name="twitter:title"]', m.meta.ogTitle)
    setMeta('meta[name="twitter:description"]', m.meta.ogDescription)

    // Canonical reflects the active locale
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', SITE_ORIGIN + (locale === 'en' ? '/en/' : '/'))
    }
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', SITE_ORIGIN + (locale === 'en' ? '/en/' : '/'))
    }
  }, [locale])

  // Respond to browser navigation (back/forward)
  useEffect(() => {
    const onPop = () => setLocaleState(readLocaleFromPath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const setLocale = useCallback((next) => {
    if (!locales.includes(next) || next === locale) return
    const hash = window.location.hash || ''
    const newPath = pathFor(next) + hash
    window.history.pushState({}, '', newPath)
    setLocaleState(next)
  }, [locale])

  const t = useCallback(
    (section) => (messages[locale] && messages[locale][section]) || {},
    [locale]
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, all: messages[locale], origin: SITE_ORIGIN }),
    [locale, setLocale, t]
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useT(section) {
  const { t } = useLocale()
  return t(section)
}
