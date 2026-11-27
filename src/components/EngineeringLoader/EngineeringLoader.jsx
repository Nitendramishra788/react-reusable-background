

function EngineeringLoader() {
  return (
    <div className="engineering-loader">

      {/* Background Grid */}
      <div className="loader-grid" />

      {/* Ambient Glow */}
      <div className="loader-glow loader-glow--one" />
      <div className="loader-glow loader-glow--two" />

      {/* Main Loader */}
      <div className="loader-system">

        {/* System Label */}
        <div className="loader-label">
          <span className="loader-label__dot" />
          ENGINEERING INTERFACE
        </div>

        {/* Core */}
        <div className="loader-core">

          <div className="loader-ring loader-ring--outer" />
          <div className="loader-ring loader-ring--middle" />
          <div className="loader-ring loader-ring--inner" />

          <div className="loader-core__energy" />

          <div className="loader-core__lines">
            <span />
            <span />
            <span />
            <span />
          </div>

        </div>

        {/* Status */}
        <div className="loader-status">
          <span className="loader-status__main">
            SYSTEM INITIALIZING
          </span>

          <span className="loader-status__sub">
            ESTABLISHING DIGITAL ENVIRONMENT
          </span>
        </div>

        {/* Progress */}
        <div className="loader-progress">

          <div className="loader-progress__header">
            <span>BOOT SEQUENCE</span>
            <span className="loader-progress__percentage">
              0%
            </span>
          </div>

          <div className="loader-progress__track">
            <div className="loader-progress__bar" />
          </div>

        </div>

        {/* System Modules */}
        <div className="loader-modules">

          <div className="loader-module">
            <span className="loader-module__name">
              CORE ENGINE
            </span>

            <span className="loader-module__status">
              INITIALIZING
            </span>
          </div>

          <div className="loader-module">
            <span className="loader-module__name">
              DATABASE
            </span>

            <span className="loader-module__status">
              WAITING
            </span>
          </div>

          <div className="loader-module">
            <span className="loader-module__name">
              DATA STREAM
            </span>

            <span className="loader-module__status">
              WAITING
            </span>
          </div>

          <div className="loader-module">
            <span className="loader-module__name">
              INTERFACE
            </span>

            <span className="loader-module__status">
              WAITING
            </span>
          </div>

        </div>

        {/* Identity */}
        <div className="loader-identity">
          <span>NITIN MISHRA</span>
          <span>ENGINEERING PORTFOLIO</span>
        </div>

      </div>

      {/* Scanline */}
      <div className="loader-scanline" />

    </div>
  );
}

export default EngineeringLoader;