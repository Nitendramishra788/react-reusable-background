
import "./AILayer.css";

const nodes = [
  { x: 800, y: 450, r: 25, type: "core" },
  { x: 620, y: 300, r: 12 },
  { x: 980, y: 300, r: 12 },
  { x: 600, y: 590, r: 10 },
  { x: 1000, y: 590, r: 10 },
  { x: 800, y: 180, r: 11 },
  { x: 800, y: 720, r: 11 },
  { x: 420, y: 440, r: 9 },
  { x: 1180, y: 440, r: 9 },
  { x: 690, y: 450, r: 8 },
  { x: 910, y: 450, r: 8 },
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [0, 5], [0, 6], [0, 7], [0, 8],
  [1, 5], [2, 5], [3, 6], [4, 6],
  [1, 9], [2, 10], [3, 9], [4, 10],
  [7, 1], [8, 2], [9, 0], [10, 0],
];

function AILayer() {
  return (
    <div className="ai-network-layer" aria-hidden="true">

      {/* Neural Network */}
      <svg
        className="ai-network-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="aiNodeGlow">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#67eaff" />
            <stop offset="100%" stopColor="#167bff" />
          </radialGradient>

          <filter id="aiGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connections */}
        {connections.map(([from, to], index) => {
          const a = nodes[from];
          const b = nodes[to];

          return (
            <g key={index}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="ai-network-connection"
              />

              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="ai-network-pulse"
                style={{ animationDelay: `${index * 0.25}s` }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <g key={index} filter="url(#aiGlow)">
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 7}
              className="ai-node-halo"
            />

            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="url(#aiNodeGlow)"
              className="ai-network-node"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </g>
        ))}

        {/* Central AI Core Rings */}
        <circle
          cx="800"
          cy="450"
          r="48"
          className="ai-core-orbit"
        />

        <circle
          cx="800"
          cy="450"
          r="65"
          className="ai-core-orbit ai-core-orbit--outer"
        />
      </svg>

      {/* AI Status */}
      <div className="ai-status-panel">
        <div className="ai-status-title">
          <span className="ai-status-light" />
          NEURAL NETWORK
        </div>

        <div className="ai-status-main">
          <strong>AI CORE ACTIVE</strong>
          <span>Neural connections established</span>
        </div>

        <div className="ai-status-footer">
          <span>NETWORK NODES: 11</span>
          <span>STATUS: ONLINE</span>
        </div>
      </div>

      {/* Floating AI Labels */}
      <div className="ai-floating-label ai-floating-label--one">
        SYNAPTIC CONNECTION
      </div>

      <div className="ai-floating-label ai-floating-label--two">
        DEEP LEARNING ACTIVE
      </div>

      <div className="ai-floating-label ai-floating-label--three">
        DATA PROCESSING
      </div>

    </div>
  );
}

export default AILayer;
