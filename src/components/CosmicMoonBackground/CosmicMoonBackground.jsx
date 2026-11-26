

function MarsBackground() {
  return (
    <div className="mars-background">
      <svg
        className="mars-background__svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* ================= SKY ================= */}

          <linearGradient id="marsSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#09050d" />
            <stop offset="32%" stopColor="#210b18" />
            <stop offset="62%" stopColor="#641d24" />
            <stop offset="82%" stopColor="#b84b32" />
            <stop offset="100%" stopColor="#ef8a4b" />
          </linearGradient>

          <linearGradient id="horizonGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffb15f" stopOpacity="0" />
            <stop offset="45%" stopColor="#ff9b4b" stopOpacity=".5" />
            <stop offset="100%" stopColor="#ff6a32" stopOpacity=".05" />
          </linearGradient>

          {/* ================= LARGE MOON ================= */}

          <radialGradient id="moonLarge" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#fff5d7" />
            <stop offset="48%" stopColor="#e8d5b4" />
            <stop offset="78%" stopColor="#b89478" />
            <stop offset="100%" stopColor="#674b49" />
          </radialGradient>

          {/* ================= SMALL MOON ================= */}

          <radialGradient id="moonSmall" cx="40%" cy="30%">
            <stop offset="0%" stopColor="#f9dfbd" />
            <stop offset="70%" stopColor="#a96f61" />
            <stop offset="100%" stopColor="#51363e" />
          </radialGradient>

          {/* ================= DUST ================= */}

          <linearGradient id="dustStorm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff9b55" stopOpacity="0" />
            <stop offset="25%" stopColor="#f47a42" stopOpacity=".4" />
            <stop offset="55%" stopColor="#ffbd72" stopOpacity=".72" />
            <stop offset="80%" stopColor="#c65338" stopOpacity=".45" />
            <stop offset="100%" stopColor="#7f302b" stopOpacity="0" />
          </linearGradient>

          {/* ================= CITY ================= */}

          <linearGradient id="cityGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff9b48" />
            <stop offset="100%" stopColor="#7d241f" />
          </linearGradient>

          {/* ================= GROUND ================= */}

          <linearGradient id="marsGround" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#762b28" />
            <stop offset="45%" stopColor="#3d171d" />
            <stop offset="100%" stopColor="#100b12" />
          </linearGradient>

          {/* ================= CRACK ================= */}

          <linearGradient id="lavaCrack" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff7b36" stopOpacity=".1" />
            <stop offset="50%" stopColor="#ff9e43" />
            <stop offset="100%" stopColor="#ff4e25" stopOpacity=".05" />
          </linearGradient>

          {/* ================= FILTERS ================= */}

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter id="smallGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>

          <filter id="moonGlow">
            <feGaussianBlur stdDeviation="14" />
          </filter>

          {/* ================= MOON CLIPS ================= */}

          <clipPath id="largeMoonClip">
            <circle cx="500" cy="190" r="115" />
          </clipPath>

          <clipPath id="smallMoonClip">
            <circle cx="1100" cy="145" r="58" />
          </clipPath>
        </defs>

        {/* =====================================================
            SKY
        ====================================================== */}

        <rect width="1600" height="900" fill="url(#marsSky)" />

        <ellipse
          className="mars-horizon-glow"
          cx="800"
          cy="700"
          rx="760"
          ry="190"
          fill="url(#horizonGlow)"
          filter="url(#softGlow)"
        />

        {/* =====================================================
            STARS
        ====================================================== */}

        <g className="mars-stars">
          <circle cx="90" cy="90" r="1.4" />
          <circle cx="170" cy="210" r="1" />
          <circle cx="250" cy="80" r="1.7" />
          <circle cx="420" cy="100" r="1" />
          <circle cx="520" cy="190" r="1.3" />
          <circle cx="650" cy="75" r="1.5" />
          <circle cx="780" cy="145" r=".9" />
          <circle cx="910" cy="70" r="1.6" />
          <circle cx="1030" cy="180" r="1" />
          <circle cx="1140" cy="85" r="1.3" />
          <circle cx="1360" cy="90" r="1.5" />
          <circle cx="1480" cy="210" r="1" />
          <circle cx="1550" cy="100" r="1.4" />
          <circle cx="70" cy="310" r="1" />
          <circle cx="430" cy="280" r=".8" />
          <circle cx="700" cy="270" r="1" />
          <circle cx="1000" cy="290" r="1.2" />
          <circle cx="1460" cy="310" r=".9" />
        </g>

        {/* =====================================================
            LARGE MOON
        ====================================================== */}

        <circle
          className="large-moon-glow"
          cx="500"
          cy="190"
          r="145"
          fill="#ffd8a3"
          opacity=".12"
          filter="url(#moonGlow)"
        />

        <circle
          className="large-moon"
          cx="500"
          cy="190"
          r="115"
          fill="url(#moonLarge)"
        />

        <g clipPath="url(#largeMoonClip)" opacity=".38">
          <circle cx="450" cy="125" r="24" fill="#967666" />
          <circle cx="535" cy="110" r="17" fill="#a5816d" />
          <circle cx="560" cy="180" r="30" fill="#967464" />
          <circle cx="480" cy="215" r="20" fill="#a47d69" />
          <circle cx="415" cy="205" r="14" fill="#76585b" />
          <circle cx="520" cy="270" r="25" fill="#8b675f" />
          <circle cx="445" cy="275" r="12" fill="#76585b" />

          <path
            d="M380 180 Q450 150 500 170 T620 150"
            stroke="#76585b"
            strokeWidth="9"
            fill="none"
          />

          <path
            d="M410 245 Q470 220 520 245 T610 230"
            stroke="#76585b"
            strokeWidth="6"
            fill="none"
          />
        </g>

        {/* =====================================================
            SMALL MOON
        ====================================================== */}

        <circle
          className="small-moon-glow"
          cx="1100"
          cy="145"
          r="76"
          fill="#ffb986"
          opacity=".1"
          filter="url(#moonGlow)"
        />

        <circle
          className="small-moon"
          cx="1100"
          cy="145"
          r="58"
          fill="url(#moonSmall)"
        />

        <g clipPath="url(#smallMoonClip)" opacity=".4">
          <circle cx="1075" cy="125" r="13" fill="#704d4d" />
          <circle cx="1120" cy="120" r="10" fill="#815955" />
          <circle cx="1130" cy="165" r="17" fill="#6e4c4d" />
          <circle cx="1080" cy="180" r="9" fill="#765052" />
        </g>

        {/* =====================================================
            MASSIVE DUST WALL
        ====================================================== */}

        <g className="dust-wall">
          <path
            d="
              M-100 570
              C120 480 220 540 350 500
              C500 450 610 535 740 485
              C880 430 1000 500 1130 450
              C1300 390 1450 470 1700 400
              L1700 720
              L-100 720 Z
            "
            fill="url(#dustStorm)"
            opacity=".72"
          />

          <path
            d="
              M-100 610
              C160 520 280 590 430 535
              C590 480 710 570 850 515
              C1010 450 1130 530 1270 485
              C1420 435 1540 500 1700 440
              L1700 740
              L-100 740 Z
            "
            fill="#e76f3c"
            opacity=".22"
          />

          <path
            d="
              M-100 660
              C160 580 300 640 460 590
              C650 530 760 620 920 565
              C1080 510 1230 590 1400 530
              C1520 500 1600 540 1700 510
              L1700 760
              L-100 760 Z
            "
            fill="#ff9a4b"
            opacity=".2"
          />
        </g>

        {/* =====================================================
            DISTANT MARS CITY
        ====================================================== */}

        <g className="mars-city">

          {/* LEFT RUIN */}

          <path
            d="
              M330 590
              L340 500
              L360 480
              L380 500
              L385 545
              L410 520
              L425 590
              Z
            "
            fill="#190e14"
          />

          {/* LEFT DOME */}

          <path
            d="M420 565 Q465 485 510 565 Z"
            fill="#170d13"
          />

          <rect
            x="430"
            y="555"
            width="70"
            height="35"
            fill="#160c12"
          />

          {/* LARGE TOWER */}

          <path
            d="
              M690 560
              L700 370
              L720 330
              L740 370
              L750 560
              Z
            "
            fill="#180e14"
          />

          <path
            d="M710 375 L720 325 L730 375"
            fill="none"
            stroke="#25121a"
            strokeWidth="8"
          />

          {/* CENTRAL MEGASTRUCTURE */}

          <path
            d="
              M800 575
              L815 430
              L845 390
              L875 430
              L890 575
              Z
            "
            fill="#130b12"
          />

          <path
            d="M835 390 L850 340 L865 390"
            fill="#120a10"
          />

          <rect
            x="835"
            y="455"
            width="18"
            height="75"
            fill="url(#cityGlow)"
            opacity=".65"
          />

          {/* RIGHT TOWER */}

          <path
            d="
              M980 580
              L990 450
              L1010 425
              L1030 450
              L1040 580
              Z
            "
            fill="#160c12"
          />

          <path
            d="M1005 425 L1015 370 L1025 425"
            fill="#130b11"
          />

          {/* RIGHT DOME */}

          <path
            d="M1100 580 Q1150 500 1200 580 Z"
            fill="#170d13"
          />

          <rect
            x="1110"
            y="565"
            width="80"
            height="35"
            fill="#160c12"
          />

          {/* BROKEN RUINS */}

          <path
            d="
              M1220 590
              L1230 515
              L1250 495
              L1270 520
              L1280 590
              M1300 590
              L1310 470
              L1330 440
              L1350 590
            "
            fill="#150b11"
            stroke="#160b11"
            strokeWidth="12"
          />

          {/* ANTENNA */}

          <line
            x1="1080"
            y1="560"
            x2="1080"
            y2="400"
            stroke="#170c12"
            strokeWidth="6"
          />

          <circle
            cx="1080"
            cy="395"
            r="5"
            fill="#ff8742"
            className="city-light"
          />

          {/* CITY WINDOWS */}

          <g className="city-windows">
            <rect x="450" y="535" width="8" height="5" rx="2" />
            <rect x="475" y="520" width="7" height="5" rx="2" />

            <rect x="700" y="440" width="6" height="4" rx="2" />
            <rect x="730" y="470" width="6" height="4" rx="2" />

            <rect x="830" y="445" width="6" height="4" rx="2" />
            <rect x="865" y="470" width="6" height="4" rx="2" />

            <rect x="995" y="485" width="7" height="5" rx="2" />
            <rect x="1020" y="505" width="7" height="5" rx="2" />

            <rect x="1140" y="545" width="8" height="5" rx="2" />
            <rect x="1170" y="530" width="8" height="5" rx="2" />
          </g>
        </g>

        {/* =====================================================
            CITY DUST
        ====================================================== */}

        <path
          className="city-dust"
          d="
            M0 575
            C180 530 330 590 500 555
            C700 515 820 575 1000 530
            C1200 490 1370 550 1600 510
            L1600 680
            L0 680 Z
          "
          fill="#d7643d"
          opacity=".22"
        />

        {/* =====================================================
            GROUND
        ====================================================== */}

        <path
          d="
            M0 650
            C170 610 310 660 470 625
            C650 585 780 650 930 615
            C1100 580 1280 645 1440 605
            C1510 590 1560 600 1600 590
            L1600 900
            L0 900 Z
          "
          fill="url(#marsGround)"
        />

        {/* DISTANT RIDGE */}

        <path
          d="
            M0 690
            Q150 620 300 675
            T600 650
            T900 670
            T1200 630
            T1600 650
            L1600 760
            L0 760 Z
          "
          fill="#32151b"
          opacity=".85"
        />

        {/* =====================================================
            GLOWING CRACKS
        ====================================================== */}

        <g className="mars-cracks">

          <path
            d="M120 870 L220 820 L270 830 L350 760"
            stroke="url(#lavaCrack)"
            strokeWidth="4"
            fill="none"
          />

          <path
            d="M350 900 L430 850 L470 790 L540 775"
            stroke="url(#lavaCrack)"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M700 900 L760 835 L810 820 L850 750"
            stroke="url(#lavaCrack)"
            strokeWidth="4"
            fill="none"
          />

          <path
            d="M1030 900 L1090 850 L1130 790 L1210 770"
            stroke="url(#lavaCrack)"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="M1330 900 L1380 840 L1440 825 L1510 750"
            stroke="url(#lavaCrack)"
            strokeWidth="4"
            fill="none"
          />
        </g>

        {/* =====================================================
            FOREGROUND ROCKS
        ====================================================== */}

        <g className="foreground-rocks">

          <path
            d="
              M-30 900
              L30 780
              L100 750
              L160 790
              L220 900
              Z
            "
            fill="#0d0a0f"
          />

          <path
            d="
              M1360 900
              L1400 790
              L1460 750
              L1530 800
              L1600 770
              L1630 900
              Z
            "
            fill="#0d0a0f"
          />

          <path
            d="
              M530 900
              L570 835
              L620 810
              L665 850
              L690 900
              Z
            "
            fill="#140b11"
          />
        </g>

        {/* =====================================================
            DUST PARTICLES
        ====================================================== */}

        <g className="dust-particles">
          <circle cx="160" cy="710" r="2" />
          <circle cx="290" cy="760" r="1.5" />
          <circle cx="410" cy="690" r="2" />
          <circle cx="560" cy="730" r="1.5" />
          <circle cx="680" cy="700" r="2" />
          <circle cx="820" cy="760" r="1.5" />
          <circle cx="950" cy="690" r="2" />
          <circle cx="1090" cy="730" r="1.5" />
          <circle cx="1220" cy="700" r="2" />
          <circle cx="1370" cy="750" r="1.5" />
          <circle cx="1500" cy="680" r="2" />
        </g>

        {/* =====================================================
            METEORS
        ====================================================== */}

        <g className="meteors">
          <line x1="900" y1="180" x2="840" y2="230" />
          <line x1="1480" y1="280" x2="1415" y2="325" />
        </g>

        {/* =====================================================
            VIGNETTE
        ====================================================== */}

        <rect
          className="mars-vignette"
          x="0"
          y="0"
          width="1600"
          height="900"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default MarsBackground;