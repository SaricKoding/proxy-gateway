export default function ProductHotspot({ config, progress }) {
  const [start, end] = config.visibleRange
  const range = end - start
  const fadeZone = range * 0.2

  let opacity = 0
  if (progress >= start && progress <= end) {
    const inner = progress - start
    if (inner < fadeZone) {
      opacity = inner / fadeZone
    } else if (inner > range - fadeZone) {
      opacity = (range - inner) / fadeZone
    } else {
      opacity = 1
    }
  }

  if (opacity <= 0.01) return null

  return (
    <div
      className="product-hotspot"
      style={{
        left: config.position.x,
        top: config.position.y,
        opacity,
        transform: `translate(-50%, -50%) scale(${0.85 + opacity * 0.15})`,
      }}
    >
      <div className="product-hotspot__card">
        <div className="product-hotspot__img-wrap">
          <img
            src={config.image}
            alt={config.label}
            className="product-hotspot__img"
            loading="lazy"
          />
        </div>
        <div className="product-hotspot__info">
          <span className="product-hotspot__category">{config.category}</span>
          <span className="product-hotspot__label">{config.label}</span>
        </div>
      </div>
    </div>
  )
}
