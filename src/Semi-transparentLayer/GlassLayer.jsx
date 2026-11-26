
import "./GlassLayer.css";

function GlassLayer({ children, className = "" }) {
  return (
    <div className={`glass-layer ${className}`}>
      {children}
    </div>
  );
}

export default GlassLayer;
