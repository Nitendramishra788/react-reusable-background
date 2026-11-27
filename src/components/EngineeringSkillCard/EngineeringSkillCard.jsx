
import "./EngineeringSkillCard.css";

function EngineeringSkillCard({ image, name }) {
  return (
    <div className="engineering-skill-card">

      <div className="skill-card__corner skill-card__corner--tl" />
      <div className="skill-card__corner skill-card__corner--tr" />
      <div className="skill-card__corner skill-card__corner--bl" />
      <div className="skill-card__corner skill-card__corner--br" />

      <div className="skill-card__image-wrapper">
        <img
          src={image}
          alt={name}
          className="skill-card__image"
        />
      </div>

      <h3 className="skill-card__name">
        {name}
      </h3>

      <div className="skill-card__bottom-line" />

    </div>
  );
}

export default EngineeringSkillCard;
