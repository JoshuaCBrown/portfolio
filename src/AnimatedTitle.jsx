import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TitleReflector from "./TitleReflector";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function AnimatedTitle({ themeStyle }) {
  const location = useLocation();

//page loaded status will decide if it passes the shadow animation lightVariant or the nonAnimating lightVariant shadow

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <TitleReflector
                category="JoshbrownDESIGN"
                themeStyle={themeStyle}
              />
            }
          />
          <Route
            path="about"
            element={
              <TitleReflector category="ABOUT" themeStyle={themeStyle} />
            }
          />
          <Route
            path="portfolio"
            element={
              <TitleReflector category="PORTFOLIO" themeStyle={themeStyle} />
            }
          />
          <Route
            path="connect"
            element={
              <TitleReflector category="CONNECT" themeStyle={themeStyle} />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedTitle;
