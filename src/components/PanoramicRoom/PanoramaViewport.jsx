import { memo } from 'react'
import PanoramaStrip from './PanoramaStrip'

function PanoramaViewport({ progress }) {
  return (
    <div className="panorama-viewport">
      <PanoramaStrip progress={progress} />
      <div className="panorama-progress">
        <div
          className="panorama-progress__fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  )
}

export default memo(PanoramaViewport)
