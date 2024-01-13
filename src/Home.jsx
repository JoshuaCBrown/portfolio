import { useEffect, useState } from "react";

import NavFooter from "./NavFooter";
import Sky from "./home-components/Sky";
import AnimatedTitle from "./transit-routes/AnimatedTitle";

import "./style/App.css";

const Home = () => {
  //<--true for dark, false for light <--coming soon-->
  const [themeStyle, setThemeStyle] = useState(false);

  const [loadedStatus, setLoadedStatus] = useState(false);

  const toggleTheme = () => setThemeStyle(!themeStyle);

  //<--after 3 seconds, the initial page load animation will not show when the home components are rendered-->
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadedStatus(true);
      console.log("initial page load off");
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
          <NavFooter />
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
