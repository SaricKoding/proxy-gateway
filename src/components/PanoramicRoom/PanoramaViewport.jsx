import PanoramaStrip from './PanoramaStrip'
import WallText from './WallText'
import DoorPortal from './DoorPortal'
import ProductHotspot from './ProductHotspot'
import ScrollIndicator from './ScrollIndicator'
import { wallTexts, doors, productHotspots } from '../../config/roomConfig'

export default function PanoramaViewport({ progress }) {
  return (
    <div className="panorama-viewport">
      <PanoramaStrip progress={progress} />

      {/* Room overlays */}
      <div className="panorama-overlays">
        {/* Doors */}
        {doors.map((door) => (
          <DoorPortal key={door.id} door={door} progress={progress} />
        ))}

        {/* Wall texts */}
        {wallTexts.map((wt) => (
          <WallText key={wt.id} config={wt} progress={progress} />
        ))}

        {/* Product hotspots */}
        {productHotspots.map((ph) => (
          <ProductHotspot key={ph.id} config={ph} progress={progress} />
        ))}
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator progress={progress} />

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
