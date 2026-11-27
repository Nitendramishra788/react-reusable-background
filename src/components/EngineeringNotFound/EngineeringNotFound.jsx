
import "./EngineeringNotFound.css";

function EngineeringNotFound() {
  return (
    <main className="engineering-not-found">

      {/* Background */}
      <div className="not-found-grid" />
      <div className="not-found-glow" />

      {/* Main Content */}
      <div className="not-found-content">

        {/* System Status */}
        <div className="not-found-status">
          <span className="not-found-status__dot" />
          SYSTEM ERROR / 404
        </div>

        {/* Error Code */}
        <div className="not-found-code">
          404
          <span className="not-found-code__line" />
        </div>

        {/* Error Information */}
        <div className="not-found-heading">
          <span>ROUTE NOT FOUND</span>
          <h1>LOST IN THE SYSTEM?</h1>
        </div>

        <p className="not-found-description">
          The requested destination could not be located.
          The route may have been moved, deleted, or never existed.
        </p>

        {/* Diagnostic Information */}
        <div className="not-found-diagnostics">

          <div>
            <span>ERROR CODE</span>
            <strong>ERR_ROUTE_404</strong>
          </div>

          <div>
            <span>CONNECTION</span>
            <strong className="not-found-offline">
              <i />
              NOT FOUND
            </strong>
          </div>

          <div>
            <span>SYSTEM STATUS</span>
            <strong>OPERATIONAL</strong>
          </div>

        </div>

        {/* Return Home */}
        <a href="/" className="not-found-button">
          <span>RETURN TO HOME</span>
          <span className="not-found-button__arrow">↗</span>
        </a>

        {/* Footer Info */}
        <div className="not-found-footer">
          <span>NITIN MISHRA</span>
          <span>ENGINEERING PORTFOLIO</span>
          <span>END OF TRANSMISSION</span>
        </div>

      </div>

      {/* HUD Corners */}
      <span className="not-found-corner not-found-corner--tl" />
      <span className="not-found-corner not-found-corner--tr" />
      <span className="not-found-corner not-found-corner--bl" />
      <span className="not-found-corner not-found-corner--br" />

      {/* Scanline */}
      <div className="not-found-scanline" />

    </main>
  );
}

export default EngineeringNotFound;
