import { panoramaAsset } from '../../config/roomConfig'

export default function PanoramaStrip({ progress }) {
  // The panorama is 4x viewport width; we translate it based on progress
  const translateX = -(progress * 100 * 3) // 0% to -300% (4 panels worth)

  if (panoramaAsset.usePlaceholder) {
    return (
      <div
        className="panorama-strip panorama-strip--placeholder"
        style={{ transform: `translateX(${translateX}%)` }}
        aria-hidden="true"
      >
        {/* 4-panel room simulation */}
        <div className="panorama-panel panorama-panel--1">
          {/* Maloprodaja door wall */}
          <div className="panorama-room-element panorama-room-element--door-frame panorama-room-element--left" />
          <div className="panorama-room-element panorama-room-element--window" />
        </div>
        <div className="panorama-panel panorama-panel--2">
          {/* Living area - shelves wall */}
          <div className="panorama-room-element panorama-room-element--shelf panorama-room-element--shelf-1" />
          <div className="panorama-room-element panorama-room-element--shelf panorama-room-element--shelf-2" />
          <div className="panorama-room-element panorama-room-element--plant" />
        </div>
        <div className="panorama-panel panorama-panel--3">
          {/* Feature wall */}
          <div className="panorama-room-element panorama-room-element--frame panorama-room-element--frame-1" />
          <div className="panorama-room-element panorama-room-element--frame panorama-room-element--frame-2" />
          <div className="panorama-room-element panorama-room-element--console" />
        </div>
        <div className="panorama-panel panorama-panel--4">
          {/* Veleprodaja door wall */}
          <div className="panorama-room-element panorama-room-element--door-frame panorama-room-element--right" />
          <div className="panorama-room-element panorama-room-element--shelf panorama-room-element--shelf-3" />
        </div>

        {/* Floor */}
        <div className="panorama-floor" />
        {/* Ceiling */}
        <div className="panorama-ceiling" />
      </div>
    )
  }

  return (
    <div
      className="panorama-strip"
      style={{ transform: `translateX(${translateX}%)` }}
      aria-hidden="true"
    >
      <picture>
        <source srcSet={panoramaAsset.src} type="image/webp" />
        <img
          src={panoramaAsset.fallbackSrc}
          alt=""
          className="panorama-strip__image"
          loading="eager"
        />
      </picture>
    </div>
  )
}
