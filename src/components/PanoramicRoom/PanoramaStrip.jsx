export default function PanoramaStrip({ progress }) {
  const translateX = -(progress * 100 * 3)

  return (
    <div
      className="panorama-strip"
      style={{ transform: `translateX(${translateX}%)` }}
      aria-hidden="true"
    >
      {/* ── Panel 1: Maloprodaja Door Wall ── */}
      <div className="pan pan--1">
        <div className="pan__wall" />

        {/* Light rays from window */}
        <div className="pan__light-ray pan__light-ray--1" />
        <div className="pan__light-ray pan__light-ray--2" />

        {/* Window */}
        <div className="pan__window">
          <div className="pan__window-glass" />
          <div className="pan__window-frame-h" />
          <div className="pan__window-frame-v" />
          <div className="pan__window-sill" />
        </div>

        {/* Maloprodaja Door */}
        <div className="pan__door pan__door--blue">
          <div className="pan__door-panel" />
          <div className="pan__door-panel pan__door-panel--bottom" />
          <div className="pan__door-handle" />
          <div className="pan__door-light" />
        </div>

        {/* Side table with product */}
        <div className="pan__furniture pan__furniture--side-table">
          <img src="/images/knives-product.jpg" alt="" className="pan__product-img pan__product-img--framed" />
        </div>

        {/* Baseboard */}
        <div className="pan__baseboard" />
        {/* Crown molding */}
        <div className="pan__crown" />
      </div>

      {/* ── Panel 2: Shelves & Products Wall ── */}
      <div className="pan pan--2">
        <div className="pan__wall" />

        {/* Ambient light */}
        <div className="pan__ambient pan__ambient--warm" />

        {/* Floating shelves with real products */}
        <div className="pan__shelf-unit">
          <div className="pan__shelf-bar pan__shelf-bar--1" />
          <div className="pan__shelf-bar pan__shelf-bar--2" />
          <div className="pan__shelf-bar pan__shelf-bar--3" />

          <img src="/images/proxy-display.jpg" alt="" className="pan__shelf-product pan__shelf-product--1" />
          <img src="/images/knives-stand.jpg" alt="" className="pan__shelf-product pan__shelf-product--2" />
          <img src="/images/doormats.jpg" alt="" className="pan__shelf-product pan__shelf-product--3" />
        </div>

        {/* Pendant light */}
        <div className="pan__pendant">
          <div className="pan__pendant-cord" />
          <div className="pan__pendant-shade" />
          <div className="pan__pendant-glow" />
        </div>

        {/* Plant */}
        <div className="pan__plant">
          <div className="pan__plant-pot" />
          <div className="pan__plant-leaf pan__plant-leaf--1" />
          <div className="pan__plant-leaf pan__plant-leaf--2" />
          <div className="pan__plant-leaf pan__plant-leaf--3" />
        </div>

        <div className="pan__baseboard" />
        <div className="pan__crown" />
      </div>

      {/* ── Panel 3: Gallery / Feature Wall ── */}
      <div className="pan pan--3">
        <div className="pan__wall" />

        <div className="pan__ambient pan__ambient--cool" />

        {/* Gallery frames with real products */}
        <div className="pan__gallery">
          <div className="pan__frame pan__frame--large">
            <img src="/images/retail-display.jpg" alt="" className="pan__frame-img" />
          </div>
          <div className="pan__frame pan__frame--medium">
            <img src="/images/wholesale-fabric.jpg" alt="" className="pan__frame-img" />
          </div>
          <div className="pan__frame pan__frame--small">
            <img src="/images/warehouse-shelves.jpg" alt="" className="pan__frame-img" />
          </div>
        </div>

        {/* Console table */}
        <div className="pan__console">
          <div className="pan__console-top" />
          <div className="pan__console-leg pan__console-leg--l" />
          <div className="pan__console-leg pan__console-leg--r" />
        </div>

        {/* Floor lamp */}
        <div className="pan__floor-lamp">
          <div className="pan__lamp-pole" />
          <div className="pan__lamp-head" />
          <div className="pan__lamp-glow" />
        </div>

        <div className="pan__baseboard" />
        <div className="pan__crown" />
      </div>

      {/* ── Panel 4: Veleprodaja Door Wall ── */}
      <div className="pan pan--4">
        <div className="pan__wall" />

        {/* Industrial shelf */}
        <div className="pan__industrial-shelf">
          <div className="pan__ind-shelf-bar pan__ind-shelf-bar--1" />
          <div className="pan__ind-shelf-bar pan__ind-shelf-bar--2" />
          <div className="pan__ind-shelf-bar pan__ind-shelf-bar--3" />
          <div className="pan__ind-shelf-upright pan__ind-shelf-upright--l" />
          <div className="pan__ind-shelf-upright pan__ind-shelf-upright--r" />
          <img src="/images/warehouse-rolls.jpg" alt="" className="pan__shelf-product pan__shelf-product--ind" />
        </div>

        {/* Veleprodaja Door */}
        <div className="pan__door pan__door--yellow">
          <div className="pan__door-panel" />
          <div className="pan__door-panel pan__door-panel--bottom" />
          <div className="pan__door-handle" />
          <div className="pan__door-light" />
        </div>

        {/* Spot light */}
        <div className="pan__spot-light" />

        <div className="pan__baseboard" />
        <div className="pan__crown" />
      </div>

      {/* ── Global room elements ── */}
      <div className="pan__floor" />
      <div className="pan__ceiling" />
      <div className="pan__ceiling-shadow" />
    </div>
  )
}
