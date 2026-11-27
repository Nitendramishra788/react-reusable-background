


const circuitPaths = [
  "M 0 100 H 180 V 160 H 280",
  "M 1600 80 H 1420 V 190 H 1300",
  "M 0 650 H 220 V 570 H 350",
  "M 1600 700 H 1380 V 610 H 1260",
  "M 500 0 V 120 H 620 V 180",
  "M 1100 900 V 760 H 980 V 700",
];

const dataLines = [
  "01010110 00110101",
  "11001010 10100110",
  "00110101 11010010",
  "10101001 01101010",
  "01011010 10010101",
];

function SoftwareLayer() {
  return (
    <div className="software-layer" aria-hidden="true">

      {/* PCB Circuit Network */}
      <svg
        className="software-circuits"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        {circuitPaths.map((path, index) => (
          <g key={index}>
            <path
              d={path}
              className="circuit-track"
            />
            <path
              d={path}
              className="circuit-current"
              style={{ animationDelay: `${index * 0.8}s` }}
            />
          </g>
        ))}

        {[
          [180, 160],
          [1420, 190],
          [220, 570],
          [1380, 610],
          [620, 180],
          [980, 700],
        ].map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="5"
            className="circuit-node"
          />
        ))}
      </svg>

      {/* Binary Data Streams */}
      <div className="software-data-stream software-data-stream--left">
        {dataLines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>

      <div className="software-data-stream software-data-stream--right">
        {dataLines.slice().reverse().map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>

      {/* Terminal HUD */}
      <div className="software-terminal software-terminal--left">
        <div className="terminal-header">
          <span className="terminal-dot terminal-dot--red" />
          <span className="terminal-dot terminal-dot--yellow" />
          <span className="terminal-dot terminal-dot--green" />
          <span>system_core.exe</span>
        </div>

        <div className="terminal-body">
          <p><span>01</span> INITIALIZING SYSTEM...</p>
          <p><span>02</span> LOADING MODULES...</p>
          <p><span>03</span> AI CORE CONNECTED</p>
          <p className="terminal-success">
            <span>04</span> SYSTEM STATUS: ONLINE
          </p>
          <div className="terminal-cursor" />
        </div>
      </div>

      {/* System Telemetry */}
      <div className="software-telemetry">
        <div className="telemetry-heading">
          <span className="telemetry-indicator" />
          SYSTEM TELEMETRY
        </div>

        <div className="telemetry-row">
          <span>CPU LOAD</span>
          <div className="telemetry-bar">
            <i className="telemetry-fill telemetry-fill--cpu" />
          </div>
          <span>68%</span>
        </div>

        <div className="telemetry-row">
          <span>DATA FLOW</span>
          <div className="telemetry-bar">
            <i className="telemetry-fill telemetry-fill--data" />
          </div>
          <span>92%</span>
        </div>

        <div className="telemetry-row">
          <span>AI PROCESS</span>
          <div className="telemetry-bar">
            <i className="telemetry-fill telemetry-fill--ai" />
          </div>
          <span>74%</span>
        </div>
      </div>

    </div>
  );
}

export default SoftwareLayer;
