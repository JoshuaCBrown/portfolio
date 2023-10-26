import { useState, useEffect } from "react";
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

  const [loadedStatus, setLoadedStatus] = useState(false);

  const toggleTheme = () => setThemeStyle(!themeStyle);
  

  //after 3 seconds, the initial page load animation will not show when the home components are rendered
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadedStatus(true);
      console.log("initial page oad off");
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="page-container" id={themeStyle ? "dark" : "light"}>
        <Sky themeStyle={themeStyle} toggleTheme={toggleTheme} loadedStatus={loadedStatus} />
        <div className="ground">
          {/* <TitleReflector category={pageTitle} themeStyle={themeStyle} /> */}
          <AnimatedTitle themeStyle={themeStyle} />
          
        </div>
      </div>
    </>
  );
};

export default Home;
