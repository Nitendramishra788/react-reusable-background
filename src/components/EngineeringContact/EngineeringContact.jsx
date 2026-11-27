import "./EngineeringContact.css";

function EngineeringContact() {
  return (
    <section className="engineering-contact" id="contact">

      {/* HUD Corners */}
      <span className="contact-corner contact-corner--tl" />
      <span className="contact-corner contact-corner--tr" />
      <span className="contact-corner contact-corner--bl" />
      <span className="contact-corner contact-corner--br" />

      {/* Header */}
      <div className="contact-header">

        <div className="contact-header__label">
          <span className="contact-header__dot" />
          CONTACT / COMMUNICATION
        </div>

        <div className="contact-header__status">
          <span />
          CHANNEL OPEN
        </div>

      </div>

      {/* Main */}
      <div className="contact-main">

        {/* Information */}
        <div className="contact-info">

          <span className="contact-eyebrow">
            ESTABLISH CONNECTION
          </span>

          <h2 className="contact-title">
            LET'S BUILD
            <span>SOMETHING.</span>
          </h2>

          <p className="contact-description">
            Have a project, idea, or opportunity in mind?
            Send a transmission and let's turn the concept
            into something real.
          </p>

          {/* Contact Data */}
          <div className="contact-data">

            <div className="contact-data__item">
              <span className="contact-data__label">
                EMAIL
              </span>

              <span className="contact-data__value">
                your@email.com
              </span>
            </div>

            <div className="contact-data__item">
              <span className="contact-data__label">
                LOCATION
              </span>

              <span className="contact-data__value">
                INDIA
              </span>
            </div>

            <div className="contact-data__item">
              <span className="contact-data__label">
                STATUS
              </span>

              <span className="contact-data__value contact-data__value--online">
                AVAILABLE FOR PROJECTS
              </span>
            </div>

          </div>

          {/* Social Links */}
          <div className="contact-socials">

            <a
              href="#"
              className="contact-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="#"
              className="contact-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN ↗
            </a>

          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-terminal">

          <div className="contact-terminal__header">
            <span>
              TRANSMISSION TERMINAL
            </span>

            <span>
              SECURE_CHANNEL
            </span>
          </div>

          <form className="contact-form">

            <div className="contact-field">
              <label htmlFor="contact-name">
                IDENTIFICATION / NAME
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                COMMUNICATION / EMAIL
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                TRANSMISSION / MESSAGE
              </label>

              <textarea
                id="contact-message"
                rows="5"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              <span>TRANSMIT MESSAGE</span>
              <span>↗</span>
            </button>

          </form>

        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer">

        <span>
          CHANNEL // CONTACT
        </span>

        <span>
          CONNECTION // READY
        </span>

        <span>
          ENDPOINT // ACTIVE
        </span>

      </div>

      {/* Scanline */}
      <div className="contact-scanline" />

    </section>
  );
}

export default EngineeringContact;