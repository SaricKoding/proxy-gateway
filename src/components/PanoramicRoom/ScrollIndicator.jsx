export default function ScrollIndicator({ progress }) {
  if (progress > 0.08) return null

  return (
    <div className="scroll-indicator" style={{ opacity: 1 - progress * 12 }}>
      <div className="scroll-indicator__mouse">
        <div className="scroll-indicator__wheel" />
      </div>
      <span className="scroll-indicator__text">Scrollajte za obilazak</span>
    </div>
  )
}
