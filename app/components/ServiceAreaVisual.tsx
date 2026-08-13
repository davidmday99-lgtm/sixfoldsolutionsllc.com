export function ServiceAreaVisual() {
  return (
    <div
      className="map-visual"
      role="img"
      aria-label="Stylized map placeholder centered on Alton, Illinois and the Mississippi River"
    >
      <div className="map-grid" aria-hidden="true" />
      <div className="river-path" aria-hidden="true">
        <span />
      </div>
      <div className="map-pin" aria-hidden="true">
        <i />
      </div>
      <div className="map-label">
        <small>HOME BASE</small>
        <strong>ALTON</strong>
        <span>ILLINOIS</span>
      </div>
      <div className="map-coordinate">MISSISSIPPI RIVER REGION</div>
    </div>
  );
}

