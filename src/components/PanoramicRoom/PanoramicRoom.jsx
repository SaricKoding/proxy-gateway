import { useRef } from 'react'
import useScrollProgress from '../../hooks/useScrollProgress'
import { scrollHeight } from '../../config/roomConfig'
import PanoramaViewport from './PanoramaViewport'
import MobileFallback from './MobileFallback'
import useIsMobile from '../../hooks/useIsMobile'

export default function PanoramicRoom() {
  const spacerRef = useRef(null)
  const progress = useScrollProgress(spacerRef)
  const isMobile = useIsMobile(768)

  if (isMobile) {
    return <MobileFallback />
  }

  return (
    <section className="panoramic-room" aria-label="Interaktivni obilazak Proxy showrooma">
      <div
        ref={spacerRef}
        className="panoramic-room__spacer"
        style={{ height: `${scrollHeight * 100}vh` }}
      >
        <PanoramaViewport progress={progress} />
      </div>
    </section>
  )
}
