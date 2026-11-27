
import ScientificLayer from "./layers/ScientificLayer/ScientificLayer";
import MechanicalLayer from "./layers/MechanicalLayer/MechanicalLayer";
import SoftwareLayer from "./layers/SoftwareLayer/SoftwareLayer";
import AILayer  from "./layers/AILayer/AILayer"
import ElectronicsLayer  from "./layers/ElectronicsLayer/ElectronicsLayer"

function EngineeringBackground() {
  return (
    <div className="engineering-background">

      {/* Blueprint Grid */}
      <div className="engineering-background__grid" />

      {/* Background Particles */}
      <div className="engineering-background__particles" />

      {/* Scientific Layer */}
      <ScientificLayer />
      <MechanicalLayer/>
      <SoftwareLayer />
       <ElectronicsLayer/>
      <AILayer/>
      
      {/* AI Core */}
      <div className="engineering-ai-core">
        <div className="ai-core__ring" />
        <div className="ai-core__core" />
      </div>

    </div>
  );
}

export default EngineeringBackground;