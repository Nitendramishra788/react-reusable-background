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
