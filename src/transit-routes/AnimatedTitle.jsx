import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TitleReflector from "../TitleReflector";
import { AnimatePresence } from "framer-motion";

function AnimatedTitle({ themeStyle, loadedStatus }) {
  const location = useLocation();

  const groundInitAnim = {
    initial: { transformPerspective: 150, scaleY: 0, rotateX: 0, x: 0 },
    animate: {
      transformPerspective: 175,
      scaleY: 0.9,
      rotateX: 50,
      x: 0,
      transition: { duration: 2, ease: "circOut" },
    },
    exit: {
      transformPerspective: 175,
      scaleY: 0.9,
      rotateX: 50,
      x: "-100vw",
      transition: { duration: 0.25 },
    },
    transition: { duration: 0.25 },
  };

  const groundLoadedAnim = {
    initial: { transformPerspective: 175, scaleY: .9, rotateX: 50, x: "100vw" },
    animate: {
      transformPerspective: 175,
      scaleY: 0.9,
      rotateX: 50,
      x: 0,
      transition: { type: "tween", duration: .25 },
    },
    exit: {
      transformPerspective: 175,
      scaleY: 0.9,
      rotateX: 50,
      x: "-100vw",
      transition: { duration: 0.25 },
    },
    transition: { duration: 0.25 },
  };

  const titleInitAnim = {
    initial: { x: 0 },
  };
  const titleLoadedAnim = {
    initial: { x: "100vw" },
  };

  //page loaded status will decide if it passes the shadow animation lightVariant or the nonAnimating lightVariant shadow

  return (
    <>
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <TitleReflector
                category="JoshDOTdev"
                themeStyle={themeStyle}
                lightVariants={loadedStatus ? groundLoadedAnim : groundInitAnim}
                titleVariants={loadedStatus ? titleLoadedAnim : titleInitAnim}
              />
            }
          />
          <Route
            path="about"
            element={
              <TitleReflector
                category="ABOUT"
                themeStyle={themeStyle}
                lightVariants={loadedStatus ? groundLoadedAnim : groundInitAnim}
                titleVariants={loadedStatus ? titleLoadedAnim : titleInitAnim}
              />
            }
          />
          <Route
            path="portfolio"
            element={
              <TitleReflector
                category="PROJECTS"
                themeStyle={themeStyle}
                lightVariants={loadedStatus ? groundLoadedAnim : groundInitAnim}
                titleVariants={loadedStatus ? titleLoadedAnim : titleInitAnim}
              />
            }
          />
          <Route
            path="connect"
            element={
              <TitleReflector
                category="CONNECT"
                themeStyle={themeStyle}
                lightVariants={loadedStatus ? groundLoadedAnim : groundInitAnim}
                titleVariants={loadedStatus ? titleLoadedAnim : titleInitAnim}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedTitle;
