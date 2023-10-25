import { useState } from "react";
import "./style/App.css";
// import "./style/Darkstyle.css";
// import "./style/Posterity.css";
import { motion } from "framer-motion";
import TitleReflector from "./TitleReflector";
import Sky from "./home-components/Sky";
import AnimatedTitle from "./AnimatedTitle";

const Home = () => {
  const [themeStyle, setThemeStyle] = useState(false);
  
  const [pageTitle, setPageTitle] = useState('');

  const toggleTheme = () => setThemeStyle(!themeStyle);
  const reTitle = (newTitle) => setPageTitle(newTitle);
  ;

  return (
    <>
      <div className="page-container" id={themeStyle ? "dark" : "light"}>
        <Sky themeStyle={themeStyle} toggleTheme={toggleTheme} reTitle={reTitle} />
        <div className="ground">
          {/* <TitleReflector category={pageTitle} themeStyle={themeStyle} /> */}
          <AnimatedTitle themeStyle={themeStyle} />
        </div>
      </div>
    </>
  );
};

export default Home;
