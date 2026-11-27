
import "./ElectronicsLayer.css";

function ElectronicsLayer() {
  return (
    <div className="electronics-layer">

      <svg
        className="electronics-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >

        <defs>
          <filter id="electricGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="chipGradient">
            <stop offset="0%" stopColor="#163b59" />
            <stop offset="100%" stopColor="#071421" />
          </radialGradient>
        </defs>

        {/* PCB CIRCUIT TRACKS */}

        <g className="pcb-tracks">
          <path d="M0 180 H170 V260 H330 V340 H500" />
          <path d="M1600 150 H1430 V240 H1280 V330 H1120" />
          <path d="M0 650 H190 V570 H350 V490 H500" />
          <path d="M1600 680 H1420 V590 H1260 V510 H1100" />

          <path d="M300 0 V130 H420 V230 H560" />
          <path d="M1300 0 V120 H1180 V220 H1040" />
          <path d="M520 900 V770 H650 V680" />
          <path d="M1080 900 V780 H950 V680" />

          <path d="M0 430 H220 V390 H400" />
          <path d="M1600 440 H1380 V400 H1200" />
        </g>

        {/* ELECTRIC CURRENT */}

        <g className="pcb-electric-flow">
          <path d="M0 180 H170 V260 H330 V340 H500" />
          <path d="M1600 150 H1430 V240 H1280 V330 H1120" />
          <path d="M0 650 H190 V570 H350 V490 H500" />
          <path d="M1600 680 H1420 V590 H1260 V510 H1100" />
          <path d="M300 0 V130 H420 V230 H560" />
          <path d="M1300 0 V120 H1180 V220 H1040" />
          <path d="M520 900 V770 H650 V680" />
          <path d="M1080 900 V780 H950 V680" />
        </g>

        {/* CENTRAL MICROCHIP */}

        <g className="electronics-chip" transform="translate(800 450)">

          <rect
            className="chip-body"
            x="-95"
            y="-65"
            width="190"
            height="130"
            rx="12"
          />

          <rect
            className="chip-inner"
            x="-72"
            y="-43"
            width="144"
            height="86"
            rx="7"
          />

          <text
            className="chip-label"
            x="0"
            y="5"
            textAnchor="middle"
          >
            CORE
          </text>

          {/* CHIP PINS */}

          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <path
                className="chip-pin"
                d={`M${-65 + i * 26} -65 V-83`}
              />
              <path
                className="chip-pin"
                d={`M${-65 + i * 26} 65 V83`}
              />
            </g>
          ))}

          {Array.from({ length: 4 }, (_, i) => (
            <g key={i}>
              <path
                className="chip-pin"
                d={`M-95 ${-30 + i * 20} H-113`}
              />
              <path
                className="chip-pin"
                d={`M95 ${-30 + i * 20} H113`}
              />
            </g>
          ))}

        </g>

        {/* ENERGY NODES */}

        {[
          [170, 180],
          [330, 340],
          [1430, 150],
          [1280, 330],
          [190, 650],
          [350, 490],
          [1420, 680],
          [1260, 510],
          [420, 130],
          [1180, 120],
          [650, 770],
          [950, 780],
          [220, 390],
          [1380, 400],
        ].map(([x, y], i) => (
          <g key={i} className="energy-node">
            <circle cx={x} cy={y} r="8" />
            <circle cx={x} cy={y} r="3" />
          </g>
        ))}

      </svg>

    </div>
  );
}

export default ElectronicsLayer;
