
import { useState } from "react";
import "./PremiumCard.css";

function PremiumCard({
  children,
  title,
  description,
  className = "",
  maxLength = 120,
}) {
  const [expanded, setExpanded] = useState(false);

  const isLong = description && description.length > maxLength;

  const visibleDescription =
    isLong && !expanded
      ? description.slice(0, maxLength).trimEnd() + "..."
      : description;

  return (
    <div className={`premium-card ${className}`}>
      <div className="premium-card__content">

        {title && (
          <h2 className="premium-card__title">
            {title}
          </h2>
        )}

        {description && (
          <div className="premium-card__description-wrapper">
            <p className="premium-card__description">
              {visibleDescription}
            </p>

            {isLong && (
              <button
                className="premium-card__toggle"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? "See Less ↑" : "See More ↓"}
              </button>
            )}
          </div>
        )}

        {children}

      </div>
    </div>
  );
}

export default PremiumCard;
