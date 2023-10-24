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

function AnimatedRoutes({ themeStyle, reTitle }) {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<NavImgs themeStyle={themeStyle} reTitle={reTitle} />}
          />
          <Route
            path="about"
            element={<About themeStyle={themeStyle} reTitle={reTitle} />}
          />
          <Route
            path="portfolio"
            element={<Portfolio themeStyle={themeStyle} reTitle={reTitle} />}
          />
          <Route
            path="connect"
            element={<Connect themeStyle={themeStyle} reTitle={reTitle} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
