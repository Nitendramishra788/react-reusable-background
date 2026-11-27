
import "./MechanicalLayer.css";

function Gear({ className = "", teeth = 12 }) {
  const points = Array.from({ length: teeth * 2 }, (_, i) => {
    const angle = (i * Math.PI) / teeth;
    const radius = i % 2 === 0 ? 48 : 39;

    return [
      60 + Math.cos(angle) * radius,
      60 + Math.sin(angle) * radius,
    ].join(",");
  }).join(" ");

  return (
    <svg
      className={`mechanical-gear ${className}`}
      viewBox="0 0 120 120"
    >
      <polygon points={points} className="gear-body" />
      <circle cx="60" cy="60" r="29" className="gear-inner" />
      <circle cx="60" cy="60" r="10" className="gear-hole" />

      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="60"
          y1="34"
          x2="60"
          y2="47"
          transform={`rotate(${i * 60} 60 60)`}
          className="gear-spoke"
        />
      ))}
    </svg>
  );
}

function MechanicalLayer() {
  return (
    <div className="mechanical-layer" aria-hidden="true">

      {/* Main Gear Assembly */}
      <div className="gear-assembly">
        <Gear className="gear-one" teeth={14} />
        <Gear className="gear-two" teeth={12} />
        <Gear className="gear-three" teeth={10} />
      </div>

      {/* Precision Bearing */}
      <div className="mechanical-bearing">
        <div className="bearing-outer">
          <div className="bearing-middle">
            <div className="bearing-inner" />
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="bearing-ball"
                style={{
                  "--ball-angle": `${i * 45}deg`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hydraulic Piston */}
      <div className="mechanical-piston">
        <div className="piston-cylinder">
          <div className="piston-rod" />
          <div className="piston-head" />
        </div>
        <div className="piston-base" />
      </div>

      {/* Robotic Arm */}
      <div className="mechanical-arm">
        <div className="arm-base" />
        <div className="arm-joint arm-joint-one" />
        <div className="arm-segment arm-segment-one" />
        <div className="arm-joint arm-joint-two" />
        <div className="arm-segment arm-segment-two" />
        <div className="arm-claw">
          <span />
          <span />
        </div>
      </div>

      {/* Mechanical HUD */}
      <div className="mechanical-hud mechanical-hud-one">
        <span>GEAR_SYSTEM_01</span>
        <small>ROTATION: ACTIVE</small>
      </div>

      <div className="mechanical-hud mechanical-hud-two">
        <span>HYDRAULIC_UNIT</span>
        <small>PRESSURE: NOMINAL</small>
      </div>

      <div className="mechanical-hud mechanical-hud-three">
        <span>ROBOTIC_ASSEMBLY</span>
        <small>JOINT STATUS: ACTIVE</small>
      </div>

    </div>
  );
}

export default MechanicalLayer;
