import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


import "./components/FlowingBerryBackground/FlowingBerryBackground.css"
import "./components/CosmicMoonBackground/CosmicMoonBackground.css"

// portfolio
import "./components/EngineeringBackground/EngineeringBackground.css"
import "./components/EngineeringBackground/layers/ScientificLayer/ScientificLayer.css"
import "./components/EngineeringBackground/layers/MechanicalLayer/MechanicalLayer.css"
import "./components/EngineeringBackground/layers/SoftwareLayer/SoftwareLayer.css"
import "./components/EngineeringBackground/layers/AILayer/AILayer.css"
import "./components/EngineeringBackground/layers/ElectronicsLayer/ElectronicsLayer.css"
import "./components/EngineeringProjectCard/EngineeringProjectCard.css"
import "./components/EngineeringSkillCard/EngineeringSkillCard.css"
import "./components/EngineeringBackground/EngineeringNavbar/EngineeringNavbar.css"
import "./components/EngineeringProfile/EngineeringProfile.css"
import "./components/EngineeringAbout/EngineeringAbout.css"
import "./components/EngineeringContact/EngineeringContact.css"
import "./components/EngineeringFooter/EngineeringFooter.css"
import "./components/EngineeringLoader/EngineeringLoader.css"
import "./components/EngineeringNotFound/EngineeringNotFound.css"
// this is part of importing Semi-transparentLayer

import "./Semi-transparentLayer/GlassLayer.css"



// this is part of importing card 
import "./components/FlowingBerryBackground/PremiumCard/PremiumCard.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
