import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import About from "./sections/About";
import NavImgs from "./home-components/NavImgs";
import Portfolio from "./sections/Portfolio";
import Connect from "./sections/Connect";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function AnimatedRoutes({ themeStyle, loadedStatus }) {
  const skyInitAnim = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0, transition: { duration: .5 }},
    exit: { opacity: 1, x: "-100vw", transition: { duration: .25 } },
    transition: { duration: 1 },
  };
  const skyLoadedAnim = {
    initial: { opacity: 1, x: "100vw" },
    animate: { opacity: 1, x: 0, transition: { duration: .25 }},
    exit: { opacity: 1, x: "-100vw", transition: { duration: .25 } },
    transition: { duration: 4 },
  };

  const groundInitAnim = {
    
  }

  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<NavImgs themeStyle={themeStyle} animVariant={loadedStatus ? skyLoadedAnim : skyInitAnim} />}
          />
          <Route path="about" element={<About themeStyle={themeStyle} />} />
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
