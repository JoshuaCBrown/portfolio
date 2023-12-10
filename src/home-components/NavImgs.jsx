import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBtn from "./NavBtn";
import CompImg from "../assets/svgs/CompImg.jsx";

import MannyImg from "../assets/svgs/MannyImg.jsx";
import "../style/NavImgs.css";

function NavImgs({ themeStyle, animVariant }) {
  const lightSvgVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { duration: 2 }},
    transition: { duration: 2 },
  };

  const darkSvgVariants = {
    initial: { pathLength: 1 },
    animate: { pathLength: 1, transition: { duration: 0 }},
    transition: { duration: 0 },
  };

  return (
    <>
      <motion.div
        className="home-nav-container"
        variants={animVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
      >
        <div className="home-nav" id="comp-nav">
          <div className="home-third">
            <div className="svg-container" id="svg-comp-bg">
              <CompImg svgVariants={lightSvgVariants} />
            </div>
            {themeStyle ? (
              <div className="svg-container" id="svg-comp-bg">
                <CompImg svgVariants={darkSvgVariants} />
              </div>
            ) : (
              <></>
            )}
            <div className="svg-container" id="svg-comp-front">
              <CompImg svgVariants={themeStyle ? darkSvgVariants : lightSvgVariants} />
            </div>
          </div>
        </div>

        <motion.div
          className="home-nav"
          id="cube-nav"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ ease: "circOut", duration: 2 }}
        >
          <div className="home-third">
            <div className="nav-btn-container">
              <NavBtn
                cardClass="nav-btn"
                cardId="about-nav"
                cardFront="About"
                cardLink="about"
              />
              <NavBtn
                cardClass="nav-btn"
                cardId="portfolio-nav"
                cardFront="Portfolio"
                cardLink="portfolio"
              />
              <NavBtn
                cardClass="nav-btn"
                cardId="connect-nav"
                cardFront="Connect"
                cardLink="connect"
              />
              <motion.div
                initial={{ height: 0, width: 0 }}
                animate={{ height: "80%", width: "40%" }}
                transition={{ duration: 2 }}
                className="right-dashed"
              ></motion.div>
              <motion.div
                initial={{ height: 0, width: 0 }}
                animate={{ height: "50%", width: "20%" }}
                transition={{ duration: 2 }}
                className="left-dashed"
              ></motion.div>
            </div>
          </div>
        </motion.div>
        <div className="home-nav" id="manny-nav">
          <div className="home-third">
            {themeStyle ? (
              <div className="svg-container" id="svg-manny-bg">
                <MannyImg svgVariants={darkSvgVariants} />
              </div>
            ) : (
              <></>
            )}
            <div className="svg-container" id="svg-manny-front">
              <MannyImg svgVariants={themeStyle ? darkSvgVariants : lightSvgVariants} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavImgs;
