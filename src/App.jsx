import { useState } from "react";
// import "./style/App.css";
// import "./style/Darkstyle.css";
import "./style/Posterity.css";
import { motion } from "framer-motion";
import TitleReflector from "./TitleReflector";
import NavCircles from "./home-components/NavCircles";
import LightSky from "./home-components/LightSky";
import DarkSky from "./home-components/DarkSky";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className="page-container">
        {darkMode === true ? (<DarkSky />) : (<LightSky />)}
        <div className="ground">
          <TitleReflector category="DESIGN" />
          <div className="glass-reflection-two"></div>
          <div className="glass-reflection">
          <div className="reflection-blend"></div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
