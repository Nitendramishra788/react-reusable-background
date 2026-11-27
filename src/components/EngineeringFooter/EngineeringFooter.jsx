import "./EngineeringFooter.css";

function EngineeringFooter() {
  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="engineering-footer">

      {/* HUD Corners */}
      <span className="footer-corner footer-corner--tl" />
      <span className="footer-corner footer-corner--tr" />
      <span className="footer-corner footer-corner--bl" />
      <span className="footer-corner footer-corner--br" />

      {/* Top System Information */}
      <div className="footer-system">

        <div className="footer-identity">
          <span className="footer-label">
            ENGINEERING PORTFOLIO
          </span>

          <h2 className="footer-name">
            NITIN MISHRA
          </h2>

          <p className="footer-role">
            FULL STACK DEVELOPER / SYSTEM BUILDER
          </p>
        </div>

        <div className="footer-status">

          <div className="footer-status__indicator">
            <span />
            SYSTEM ONLINE
          </div>

          <span className="footer-status__version">
            BUILD // 2026
          </span>

        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Navigation + Social */}
      <div className="footer-navigation">

        <div className="footer-nav">

          <span className="footer-section-label">
            NAVIGATION
          </span>

          <div className="footer-nav__links">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        <div className="footer-social">

          <span className="footer-section-label">
            EXTERNAL CHANNELS
          </span>

          <div className="footer-social__links">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a href="mailto:your@email.com">
              EMAIL ↗
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <span>
          © 2026 NITIN MISHRA
        </span>

        <span>
          DESIGNED &amp; ENGINEERED WITH CODE
        </span>

        <span>
          SYSTEM // TERMINATED
        </span>

      </div>

      {/* Scanline */}
      <div className="footer-scanline" />

    </footer>
  );
}

export default EngineeringFooter;