import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../Home";
import About from "../sections/about/About";
import NavImgs from "../home-components/NavImgs";
import Portfolio from "../sections/portfolio/Portfolio";
import Connect from "../sections/Connect";
import Achievements from "../sections/about/Achievements";

import Experience from "../sections/about/Experience";
import Interests from "../sections/about/Interests";
import Skills from "../sections/about/Skills";

function AnimatedRoutes({ themeStyle, loadedStatus }) {
  const skyInitAnim = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1, x: "-100vw", transition: { duration: 0.25 } },
    transition: { duration: 1 },
  };
  const skyLoadedAnim = {
    initial: { opacity: 1, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
    exit: { opacity: 1, x: "-100vw", transition: { duration: 0.25 } },
    transition: { duration: 4 },
  };

  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <NavImgs
                themeStyle={themeStyle}
                animVariant={loadedStatus ? skyLoadedAnim : skyInitAnim}
              />
            }
          />
          <Route path="about/*" element={<About themeStyle={themeStyle} />} />
          <Route
            path="portfolio"
            element={<Portfolio themeStyle={themeStyle} />}
          />
          <Route path="connect" element={<Connect themeStyle={themeStyle} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
