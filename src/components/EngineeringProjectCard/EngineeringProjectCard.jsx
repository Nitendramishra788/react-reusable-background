


function EngineeringProjectCard({ project }) {
  const { image, title, description, live, code } = project;

  return (
    <article className="engineering-project-card">

      {/* Project Image */}
      <div className="project-card__image-wrapper">
        <img
          src={image}
          alt={title}
          className="project-card__image"
        />

        <div className="project-card__image-overlay" />

        <span className="project-card__number">
          PROJECT / 001
        </span>

        <span className="project-card__status">
          <span className="status-dot" />
          PROJECT ARCHIVE
        </span>
      </div>

      {/* Project Information */}
      <div className="project-card__content">

        <div className="project-card__heading">
          <span className="project-card__label">
            ENGINEERING / PROJECT
          </span>

          <span className="project-card__indicator">
            <span />
            SYSTEM READY
          </span>
        </div>

        <h2 className="project-card__title">
          {title}
        </h2>

        <p className="project-card__description">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="project-card__actions">

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--live"
            >
              <span>LIVE PREVIEW</span>
              <span className="project-btn__arrow">↗</span>
            </a>
          )}

          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--code"
            >
              <span>SOURCE CODE</span>
              <span className="project-btn__arrow">↗</span>
            </a>
          )}

        </div>
      </div>

      {/* Decorative HUD Elements */}
      <span className="project-card__corner project-card__corner--tl" />
      <span className="project-card__corner project-card__corner--tr" />
      <span className="project-card__corner project-card__corner--bl" />
      <span className="project-card__corner project-card__corner--br" />

      <div className="project-card__scanline" />

    </article>
  );
}

export default EngineeringProjectCard;
