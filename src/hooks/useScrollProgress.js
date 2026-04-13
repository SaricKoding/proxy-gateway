import { useState, useEffect, useRef, useCallback } from 'react'

export default function useScrollProgress(spacerRef) {
  const [progress, setProgress] = useState(0)
  const interpolatedRef = useRef(0)
  const targetRef = useRef(0)
  const rafRef = useRef(null)

  const tick = useCallback(() => {
    const diff = targetRef.current - interpolatedRef.current
    if (Math.abs(diff) > 0.0001) {
      interpolatedRef.current += diff * 0.6
    } else {
      interpolatedRef.current = targetRef.current
    }
    setProgress(interpolatedRef.current)
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!spacerRef.current) return
      const spacerTop = spacerRef.current.offsetTop
      const spacerHeight = spacerRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollY = window.scrollY

      const start = spacerTop
      const end = spacerTop + spacerHeight - viewportHeight
      const raw = (scrollY - start) / (end - start)
      targetRef.current = Math.max(0, Math.min(1, raw))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [spacerRef, tick])

  return progress
}
