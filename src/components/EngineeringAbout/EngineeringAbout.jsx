import cosmicMoon from "../../../src/assets/cosmic-moon-reference.png";

function EngineeringAbout() {
  return (
    <section className="engineering-about" id="about">

      {/* HUD Corners */}
      <span className="about-corner about-corner--tl" />
      <span className="about-corner about-corner--tr" />
      <span className="about-corner about-corner--bl" />
      <span className="about-corner about-corner--br" />

      {/* Header */}
      <div className="about-header">

        <div className="about-header__label">
          <span className="about-header__dot" />
          ABOUT / SYSTEM INFORMATION
        </div>

        <div className="about-header__status">
          <span />
          PROFILE ACTIVE
        </div>

      </div>

      {/* Main Content */}
      <div className="about-main">

        {/* Image Side */}
        <div className="about-image-section">

          <div className="about-image-frame">

            <img
              src="assets/cosmic-moon-reference.png"
              alt="About me"
              className="about-image"
            />

            <span className="about-image-corner about-image-corner--tl" />
            <span className="about-image-corner about-image-corner--tr" />
            <span className="about-image-corner about-image-corner--bl" />
            <span className="about-image-corner about-image-corner--br" />

            <div className="about-image-scan" />

          </div>

          <div className="about-image-id">
            VISUAL_DATA // 001
          </div>

        </div>

        {/* Content Side */}
        <div className="about-content">

          <span className="about-eyebrow">
            ENGINEERING PROFILE
          </span>

          <h2 className="about-title">
            I BUILD
            <span> DIGITAL SYSTEMS.</span>
          </h2>

          <p className="about-description">
            I’m a developer who enjoys understanding how things work
            beneath the surface — from backend architecture and APIs
            to interactive frontend experiences.
          </p>

          <p className="about-description">
            My approach is simple: understand the problem, design the
            system, build it cleanly, and keep improving it. I enjoy
            turning ideas into real, usable software rather than
            simply writing code for the sake of it.
          </p>

          {/* Technical Stats */}
          <div className="about-stats">

            <div className="about-stat">
              <span className="about-stat__value">MERN</span>
              <span className="about-stat__label">
                DEVELOPMENT
              </span>
            </div>

            <div className="about-stat">
              <span className="about-stat__value">API</span>
              <span className="about-stat__label">
                ARCHITECTURE
              </span>
            </div>

            <div className="about-stat">
              <span className="about-stat__value">∞</span>
              <span className="about-stat__label">
                LEARNING MODE
              </span>
            </div>

          </div>

          {/* Engineering Approach */}
          <div className="about-approach">

            <div className="about-approach__header">
              <span />
              ENGINEERING APPROACH
            </div>

            <div className="about-approach__items">

              <span>01 / SYSTEM THINKING</span>
              <span>02 / CLEAN ARCHITECTURE</span>
              <span>03 / PROBLEM SOLVING</span>
              <span>04 / CONTINUOUS LEARNING</span>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="about-footer">
        <span>MODULE // ABOUT</span>
        <span>DATA_STREAM // STABLE</span>
        <span>↓ CONTINUE EXPLORING</span>
      </div>

      {/* Scanline */}
      <div className="about-scanline" />

    </section>
  );
}

export default EngineeringAbout;