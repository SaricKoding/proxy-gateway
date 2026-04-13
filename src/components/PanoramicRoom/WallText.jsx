export default function WallText({ config, progress }) {
  const { visibleRange, position, style: textStyle } = config
  const [start, end] = visibleRange
  const range = end - start
  const fadeZone = range * 0.25

  let opacity = 0
  let translateY = 30

  if (progress >= start && progress <= end) {
    const inner = progress - start
    if (inner < fadeZone) {
      opacity = inner / fadeZone
      translateY = 30 * (1 - opacity)
    } else if (inner > range - fadeZone) {
      opacity = (range - inner) / fadeZone
      translateY = -20 * (1 - opacity)
    } else {
      opacity = 1
      translateY = 0
    }
  }

  if (opacity <= 0.01) return null

  return (
    <div
      className={`wall-text wall-text--${textStyle}`}
      style={{
        left: position.x,
        top: position.y,
        opacity,
        transform: `translate(-50%, -50%) translateY(${translateY}px)`,
      }}
      aria-live="polite"
    >
      {config.heading && (
        <h2 className="wall-text__heading">{config.heading}</h2>
      )}
      {config.body && (
        <p className="wall-text__body">{config.body}</p>
      )}
      {config.stats && (
        <div className="wall-text__stats">
          {config.stats.map((s) => (
            <div className="wall-text__stat" key={s.label}>
              <span className="wall-text__stat-num">{s.num}</span>
              <span className="wall-text__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}
      {config.values && (
        <div className="wall-text__values">
          {config.values.map((v) => (
            <div className="wall-text__value" key={v.title}>
              <h3 className="wall-text__value-title">{v.title}</h3>
              <p className="wall-text__value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
