import { useState } from "react";
import "./style/App.css";
// import "./style/Darkstyle.css";
// import "./style/Posterity.css";
import { motion } from "framer-motion";
import TitleReflector from "./TitleReflector";
import NavCircles from "./home-components/NavImgs";
import Sky from "./home-components/Sky";
import DarkSky from "./home-components/DarkSky";

function App() {
  const [themeStyle, setThemeStyle] = useState(false);

  const toggleTheme = () => setThemeStyle(!themeStyle);

  return (
    <>
      <div className="page-container" id={themeStyle ? "dark" : "light"}>
        <Sky themeStyle={themeStyle} toggleTheme={toggleTheme} />
        <div className="ground">
          <TitleReflector category="DESIGN" themeStyle={themeStyle} />
        </div>
      </div>
    </>
  );
}

export default App;
