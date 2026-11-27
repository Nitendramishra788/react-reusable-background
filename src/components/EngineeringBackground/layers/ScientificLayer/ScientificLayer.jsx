

function ScientificLayer() {
  return (
    <div className="scientific-layer" aria-hidden="true">
      {/* DNA Helix */}
      <svg
        className="scientific-dna"
        viewBox="0 0 180 420"
      >
        <path
          className="dna-strand dna-strand-one"
          d="M35 10 C145 70 145 140 35 210 C-75 280 -75 350 35 410"
        />

        <path
          className="dna-strand dna-strand-two"
          d="M145 10 C35 70 35 140 145 210 C255 280 255 350 145 410"
        />

        <g className="dna-rungs">
          <line x1="58" y1="35" x2="122" y2="35" />
          <line x1="78" y1="75" x2="102" y2="75" />
          <line x1="95" y1="115" x2="85" y2="115" />
          <line x1="112" y1="155" x2="68" y2="155" />
          <line x1="122" y1="195" x2="58" y2="195" />
          <line x1="112" y1="235" x2="68" y2="235" />
          <line x1="95" y1="275" x2="85" y2="275" />
          <line x1="78" y1="315" x2="102" y2="315" />
          <line x1="58" y1="355" x2="122" y2="355" />
          <line x1="48" y1="395" x2="132" y2="395" />
        </g>
      </svg>

      {/* Molecule */}
      <svg
        className="scientific-molecule"
        viewBox="0 0 260 220"
      >
        <g className="molecule-bonds">
          <line x1="130" y1="110" x2="55" y2="55" />
          <line x1="130" y1="110" x2="205" y2="55" />
          <line x1="130" y1="110" x2="55" y2="170" />
          <line x1="130" y1="110" x2="205" y2="170" />
        </g>

        <circle className="molecule-core" cx="130" cy="110" r="17" />

        <circle
          className="molecule-node"
          cx="55"
          cy="55"
          r="10"
        />

        <circle
          className="molecule-node"
          cx="205"
          cy="55"
          r="10"
        />

        <circle
          className="molecule-node"
          cx="55"
          cy="170"
          r="10"
        />

        <circle
          className="molecule-node"
          cx="205"
          cy="170"
          r="10"
        />

        <ellipse
          className="electron-orbit"
          cx="130"
          cy="110"
          rx="95"
          ry="38"
        />

        <ellipse
          className="electron-orbit electron-orbit-two"
          cx="130"
          cy="110"
          rx="38"
          ry="95"
        />

        <circle className="electron" cx="225" cy="110" r="4" />
        <circle className="electron electron-two" cx="130" cy="15" r="4" />
      </svg>

      {/* Orbital System */}
      <svg
        className="scientific-orbit"
        viewBox="0 0 360 260"
      >
        <ellipse
          className="orbit orbit-one"
          cx="180"
          cy="130"
          rx="145"
          ry="60"
        />

        <ellipse
          className="orbit orbit-two"
          cx="180"
          cy="130"
          rx="110"
          ry="45"
        />

        <ellipse
          className="orbit orbit-three"
          cx="180"
          cy="130"
          rx="70"
          ry="30"
        />

        <circle
          className="orbit-core"
          cx="180"
          cy="130"
          r="12"
        />

        <circle
          className="orbit-particle orbit-particle-one"
          cx="325"
          cy="130"
          r="5"
        />

        <circle
          className="orbit-particle orbit-particle-two"
          cx="290"
          cy="85"
          r="4"
        />

        <circle
          className="orbit-particle orbit-particle-three"
          cx="250"
          cy="105"
          r="3"
        />
      </svg>

      {/* Floating Scientific Particles */}
      <div className="scientific-particles">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="scientific-particle"
            style={{
              "--particle-index": index,
            }}
          />
        ))}
      </div>

      {/* Scientific HUD Labels */}
      <div className="science-label science-label-one">
        <span>MOLECULAR_SYSTEM</span>
        <small>ACTIVE</small>
      </div>

      <div className="science-label science-label-two">
        <span>PARTICLE_FIELD</span>
        <small>SIMULATION_01</small>
      </div>

      <div className="science-label science-label-three">
        <span>ORBITAL_VECTOR</span>
        <small>CALCULATING...</small>
      </div>
    </div>
  );
}

export default ScientificLayer;