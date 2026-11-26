import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


import "./components/FlowingBerryBackground/FlowingBerryBackground.css"
import "./components/CosmicMoonBackground/CosmicMoonBackground.css"

// this is part of importing Semi-transparentLayer

import "./Semi-transparentLayer/GlassLayer.css"



// this is part of importing card 
import "./components/FlowingBerryBackground/PremiumCard/PremiumCard.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
