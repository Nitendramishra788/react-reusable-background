

function FlowingBerryBackground() {
  return (
    <div className="flowing-background">
      <svg
        className="flowing-background__svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main background */}
          <linearGradient
            id="baseGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#8b004f" />
            <stop offset="32%" stopColor="#ed6f9d" />
            <stop offset="55%" stopColor="#ffe0dc" />
            <stop offset="75%" stopColor="#ef7e91" />
            <stop offset="100%" stopColor="#850047" />
          </linearGradient>

          {/* Pink flowing ribbon */}
          <linearGradient
            id="pinkRibbon"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#970052" />
            <stop offset="45%" stopColor="#ef4f91" />
            <stop offset="100%" stopColor="#ffb2ae" />
          </linearGradient>

          {/* Peach ribbon */}
          <linearGradient
            id="peachRibbon"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#ff9d9e" />
            <stop offset="50%" stopColor="#ffd8d2" />
            <stop offset="100%" stopColor="#ff9c87" />
          </linearGradient>

          {/* Deep berry */}
          <linearGradient
            id="berryRibbon"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#650038" />
            <stop offset="55%" stopColor="#a9005c" />
            <stop offset="100%" stopColor="#e34386" />
          </linearGradient>

          {/* Glow */}
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <filter id="largeBlur">
            <feGaussianBlur stdDeviation="35" />
          </filter>

          {/* Light line */}
          <linearGradient
            id="lightLine"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity=".9" />
            <stop offset="65%" stopColor="#fff5f0" stopOpacity=".9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base */}
        <rect
          width="1600"
          height="900"
          fill="url(#baseGradient)"
        />

        {/* ===== TOP LEFT BERRY FLOW ===== */}

        <path
          d="
            M -150 50
            C 80 170, 120 250, 360 160
            C 570 80, 650 -40, 850 -70
            L 500 -100
            L -150 -100
            Z
          "
          fill="url(#berryRibbon)"
        />

        <path
          d="
            M -100 230
            C 100 330, 250 300, 390 210
            C 550 105, 650 60, 850 70
            C 620 170, 500 330, 280 370
            C 100 405, 10 350, -100 300
            Z
          "
          fill="url(#pinkRibbon)"
          opacity=".85"
        />

        {/* ===== CENTRAL SOFT RIBBON ===== */}

        <path
          d="
            M -100 500
            C 180 390, 380 450, 580 500
            C 820 560, 1000 520, 1190 400
            C 1320 315, 1460 280, 1700 300

            L 1700 600

            C 1460 560, 1300 550, 1110 630
            C 880 730, 650 720, 430 640
            C 220 565, 80 600, -100 690
            Z
          "
          fill="url(#peachRibbon)"
          opacity=".82"
        />

        {/* ===== LOWER BERRY WAVE ===== */}

        <path
          d="
            M -100 760
            C 120 620, 350 690, 540 760
            C 760 840, 980 840, 1150 700
            C 1310 570, 1490 540, 1700 610

            L 1700 1000
            L -100 1000
            Z
          "
          fill="url(#berryRibbon)"
        />

        {/* Deep lower-right shape */}

        <path
          d="
            M 900 900
            C 1050 760, 1200 650, 1370 630
            C 1510 610, 1590 650, 1700 710
            L 1700 950
            L 900 950
            Z
          "
          fill="#98004f"
          opacity=".75"
        />

        {/* ===== SOFT LIGHT RIBBONS ===== */}

        <path
          d="
            M -50 375
            C 170 430, 320 470, 500 400
            C 680 330, 800 250, 970 250
            C 1150 250, 1310 340, 1680 210
          "
          fill="none"
          stroke="url(#lightLine)"
          strokeWidth="4"
          filter="url(#softGlow)"
          opacity=".8"
        />

        <path
          d="
            M -100 700
            C 150 610, 300 650, 500 710
            C 720 780, 950 810, 1170 700
            C 1370 600, 1510 540, 1700 500
          "
          fill="none"
          stroke="url(#lightLine)"
          strokeWidth="3"
          filter="url(#softGlow)"
          opacity=".7"
        />

        {/* Crisp highlight lines */}

        <path
          d="
            M -50 355
            C 170 420, 330 445, 500 380
            C 700 305, 800 220, 1000 240
            C 1200 260, 1350 330, 1680 190
          "
          fill="none"
          stroke="#fff5f2"
          strokeWidth="1.5"
          opacity=".75"
        />

        <path
          d="
            M -80 690
            C 180 600, 330 645, 510 705
            C 720 775, 950 790, 1170 680
            C 1380 575, 1520 535, 1700 490
          "
          fill="none"
          stroke="#fff8f5"
          strokeWidth="1.2"
          opacity=".7"
        />

        {/* ===== CENTRAL LIGHT ===== */}

        <ellipse
          cx="800"
          cy="430"
          rx="500"
          ry="260"
          fill="#fff4ef"
          opacity=".16"
          filter="url(#largeBlur)"
        />
      </svg>

      <div className="flowing-background__grain" />
    </div>
  );
}

export default FlowingBerryBackground;