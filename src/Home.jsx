import { useState, useEffect } from "react";
import "./style/App.css";
// import "./style/Darkstyle.css";
// import "./style/Posterity.css";
import { motion } from "framer-motion";
import TitleReflector from "./TitleReflector";
import Sky from "./home-components/Sky";
import AnimatedTitle from "./transit-routes/AnimatedTitle";

const Home = () => {
  const [themeStyle, setThemeStyle] = useState(false);

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
        <Sky
          themeStyle={themeStyle}
          toggleTheme={toggleTheme}
          loadedStatus={loadedStatus}
        />
        <div className="ground">
          {/* <TitleReflector category={pageTitle} themeStyle={themeStyle} /> */}
          <AnimatedTitle themeStyle={themeStyle} loadedStatus={loadedStatus} />
          {themeStyle ? (
            <>
              <div className="glass-reflection-two" style={{ zIndex: 1 }}></div>
              <div className="glass-reflection" style={{ zIndex: 2 }}>
                <div className="reflection-blend"></div>
              </div>
            </>
          ) : (
            <div className="ground-color" style={{ zIndex: 1 }}></div>
          )}

          <div className="ground-texture" style={{ zIndex: 4 }}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
