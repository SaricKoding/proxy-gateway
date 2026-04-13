export default function DoorPortal({ door, progress }) {
  const [start, end] = door.activeRange
  const range = end - start
  const mid = start + range * 0.5

  let opacity = 0
  let scale = 0.7

  if (progress >= start && progress <= end) {
    const distFromCenter = Math.abs(progress - mid) / (range * 0.5)
    opacity = 1 - distFromCenter * 0.6
    scale = 0.7 + (1 - distFromCenter) * 0.3
  }

  if (opacity <= 0.01) return null

  const isBlue = door.color === 'blue'

  return (
    <div
      className={`door-portal door-portal--${door.color}`}
      style={{
        opacity,
        transform: `translate(-50%, -50%) scale(${scale})`,
        pointerEvents: opacity > 0.5 ? 'auto' : 'none',
      }}
    >
      <div className="door-portal__frame">
        {/* Door visual */}
        <div className="door-portal__door">
          <div className="door-portal__handle" />
        </div>

        {/* Content overlay */}
        <div className="door-portal__content">
          <span className="door-portal__label">{door.label}</span>
          <h2 className="door-portal__title">{door.title}</h2>
          <p className="door-portal__subtitle">{door.subtitle}</p>

          <a
            href={door.url}
            className={`door-portal__cta ${isBlue ? 'door-portal__cta--blue' : 'door-portal__cta--yellow'}`}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = door.url
            }}
          >
            <span>Uđite</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <span className="door-portal__subdomain">{door.subdomain}</span>
        </div>
      </div>

      {/* Glow effect */}
      <div className={`door-portal__glow ${isBlue ? 'door-portal__glow--blue' : 'door-portal__glow--yellow'}`} />
    </div>
  )
}
