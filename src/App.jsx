import { useState } from "react";
import "./style/App.css";
// import "./style/Darkstyle.css";
// import "./style/Posterity.css";
import { motion } from "framer-motion";
import TitleReflector from "./TitleReflector";
import NavCircles from "./home-components/NavCircles"; 
import LightSky from "./home-components/LightSky";
import DarkSky from "./home-components/DarkSky";

function App() {
  const [themeStyle, setThemeStyle] = useState(false);
  return (
    <>
      <div className="page-container" id={themeStyle ? "dark" : "light"}>
        {themeStyle === true ? <DarkSky /> : <LightSky />}
        <div className="ground">
          <TitleReflector category="DESIGN" themeStyle={themeStyle}/> 
        </div>
      </div>
    </>
  );
}

export default App;
