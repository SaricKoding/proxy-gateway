import { useRef, useEffect } from 'react'
import useScrollProgress from '../../hooks/useScrollProgress'
import { scrollHeight } from '../../config/roomConfig'
import MobileFallback from './MobileFallback'
import useIsMobile from '../../hooks/useIsMobile'
import PanoramaStrip from './PanoramaStrip'

export default function PanoramicRoom() {
  const spacerRef = useRef(null)
  const stripRef = useRef(null)
  const progressBarRef = useRef(null)
  const { subscribe } = useScrollProgress(spacerRef)
  const isMobile = useIsMobile(768)

  useEffect(() => {
    if (isMobile) return

    return subscribe((progress) => {
      // Direct DOM update — no React re-render
      if (stripRef.current) {
        stripRef.current.style.transform = `translate3d(${-(progress * 87.5)}%, 0, 0)`
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`
      }

      // Update parallax images
      const pxImgs = stripRef.current?.querySelectorAll('[data-px]')
      if (pxImgs) {
        pxImgs.forEach(el => {
          const panel = parseFloat(el.dataset.panel)
          const speed = parseFloat(el.dataset.speed)
          const rot = parseFloat(el.dataset.rot)
          const delay = parseFloat(el.dataset.delay)
          const orbit = el.dataset.orbit

          const p = Math.max(0, Math.min(1, (progress - panel / 8) / (1 / 8)))
          const enter = Math.min(1, Math.max(0, (p - delay) * 3))

          if (orbit) {
            const angle = parseFloat(el.dataset.angle)
            const radius = parseFloat(el.dataset.radius)
            const oSpeed = parseFloat(el.dataset.ospeed)
            const a = (angle + p * 360 * oSpeed) * Math.PI / 180
            const cx = 50 + Math.cos(a) * radius
            const cy = 50 + Math.sin(a) * radius
            el.style.opacity = enter * 0.95
            el.style.left = `${cx}%`
            el.style.top = `${cy}%`
            el.style.transform = `translate(-50%, -50%) rotate(${p * 15 - 7}deg) scale(${0.85 + 0.15 * enter})`
          } else {
            const oY = (30 - 70 * p) * speed
            const oX = (10 - 20 * p) * speed * 0.5
            const r = -rot + rot * 2 * p
            el.style.opacity = enter
            el.style.transform = `translate3d(${oX}px, ${oY}px, 0) rotate(${r}deg) scale(${0.88 + 0.12 * enter})`
          }
        })
      }
    })
  }, [subscribe, isMobile])

  if (isMobile) {
    return <MobileFallback />
  }

  return (
    <section className="panoramic-room">
      <div
        ref={spacerRef}
        className="panoramic-room__spacer"
        style={{ height: `${scrollHeight * 100}vh` }}
      >
        <div className="panorama-viewport">
          <PanoramaStrip ref={stripRef} />
          <div className="panorama-progress">
            <div ref={progressBarRef} className="panorama-progress__fill" />
          </div>
        </div>
      </div>
    </section>
  )
}
