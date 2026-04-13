import PanoramaStrip from './PanoramaStrip'

export default function PanoramaViewport({ progress }) {
  return (
    <div className="panorama-viewport">
      <PanoramaStrip progress={progress} />

      {/* Progress bar */}
      <div className="panorama-progress">
        <div
          className="panorama-progress__fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  )
}
