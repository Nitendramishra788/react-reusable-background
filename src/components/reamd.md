# Engineering Portfolio Interface

A futuristic engineering-themed portfolio interface built with React, CSS, and SVG.

The project combines scientific visualization, mechanical systems, AI networks, electronics, software interfaces, and HUD-style UI into a single interactive portfolio experience.

The entire visual system is built using code — without relying on background images or pre-rendered visual assets.

---

## Vision

The goal of this project is to create a portfolio that feels less like a traditional developer portfolio and more like a futuristic engineering workstation.

The interface takes inspiration from:

- NASA control systems
- AI research laboratories
- Robotics workstations
- Mechanical engineering systems
- Scientific visualization
- Aerospace interfaces
- Software command centers
- Technical HUD systems

The portfolio is designed around the idea of a digital engineering environment.

---

# System Architecture

```text
ENGINEERING PORTFOLIO
│
├── Engineering Background
│   ├── Scientific Layer
│   ├── Mechanical Layer
│   ├── Software Layer
│   ├── Electronics Layer
│   ├── AI Network Layer
│   ├── Blueprint Grid
│   ├── Particles
│   └── AI Core
│
├── Engineering Navbar
│
├── Engineering Loader
│
├── Profile / Hero
│
├── About
│
├── Skills
│
├── Projects
│
├── Contact
│
├── Engineering Footer
│
└── Engineering 404


<!-- if needed to use  -->


import EngineeringBackground from "./components/EngineeringBackground/EngineeringBackground"
import EngineeringProjectCard from "./components/EngineeringProjectCard/EngineeringProjectCard"
import EngineeringSkillCard from "./components/EngineeringSkillCard/EngineeringSkillCard"
import cosmicMoon from "../src/assets/cosmic-moon-reference.png";
import EngineeringNavbar  from "../src/components/EngineeringBackground/EngineeringNavbar/EngineeringNavbar"
import EngineeringProfile  from "../src/components/EngineeringProfile/EngineeringProfile"
import EngineeringAbout   from  "../src/components/EngineeringAbout/EngineeringAbout"
import EngineeringContact from  "./components/EngineeringContact/EngineeringContact"
import EngineeringFooter  from "./components/EngineeringFooter/EngineeringFooter"
import  EngineeringLoader from "./components/EngineeringLoader/EngineeringLoader"
import EngineeringNotFound  from "./components/EngineeringNotFound/EngineeringNotFound";


// this is profile
const profile = {
  name:"Niten Mishra",
  age: "21",
  image:cosmicMoon,
  message: "Building systems that connect creativity, engineering and technology.",
  about:
    "Full-stack developer focused on building scalable web applications and exploring modern technologies."
};







// this is project
const project = {
  image: cosmicMoon,
  title: "MegaMart E-Commerce",
  description:
    "A multi-vendor e-commerce platform built with MERN stack, featuring authentication, product management, cart, wishlist and secure checkout.",
  live: "https://example.com",
  code: "https://github.com/example/project"
};

function App() {


  return (
    <>

      <EngineeringBackground />
      <main className="projects-container">
        <EngineeringProfile profile={profile} />

        <EngineeringAbout/>

        <EngineeringProjectCard project={project} />

        
        <EngineeringSkillCard
          image={cosmicMoon}
          name="Node.js"
        />

      <EngineeringContact/>
        <EngineeringNavbar/>
        {/* <EngineeringLoader/> */}
        <EngineeringFooter/>
        {/* <EngineeringNotFound /> */}

      </main>
      

    </>
  )
}

export default App
