import { useRef } from 'react'
import useScrollProgress from '../../hooks/useScrollProgress'
import { scrollHeight } from '../../config/roomConfig'
import PanoramaStrip from './PanoramaStrip'
import MobileFallback from './MobileFallback'
import useIsMobile from '../../hooks/useIsMobile'

export default function PanoramicRoom() {
  const spacerRef = useRef(null)
  const progress = useScrollProgress(spacerRef)
  const isMobile = useIsMobile(768)

  if (isMobile) return <MobileFallback />

  return (
    <section className="panoramic-room">
      <div
        ref={spacerRef}
        className="panoramic-room__spacer"
        style={{ height: `${scrollHeight * 100}vh` }}
      >
        <div className="panorama-viewport">
          <PanoramaStrip progress={progress} />
          <div className="panorama-progress">
            <div className="panorama-progress__fill" style={{ transform: `scaleX(${progress})` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
