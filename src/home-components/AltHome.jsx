import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBtn from "./NavBtn";
import CompImg from "../assets/svgs/CompImg.jsx";
import BetterCube from "../assets/svgs/new/BetterCube";
import FancyCube from "../assets/svgs/new/FancyCube";
import BetterManny from "../assets/svgs/new/BetterManny";
import FancyManny from "../assets/svgs/new/FancyManny";
import FancyMannyTwo from "../assets/svgs/new/FancyMannyTwo";
import BetterComp from "../assets/svgs/new/BetterComp";
import FancyComp from "../assets/svgs/new/FancyComp";

import MannyImg from "../assets/svgs/MannyImg.jsx";
import "../style/AltHome.css";

const AltHome = ({ themeStyle, animVariant }) => {
  const pathVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { duration: 2 } },
    transition: { duration: 2 },
  };

  const staticVariants = {
    initial: { pathLength: 1 },
    animate: { pathLength: 1, transition: { duration: 1 } },
    transition: { duration: 0 },
  };

  const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1, delay: 1 } },
    transition: { duration: 5 },
  };

  const fadeOutVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 0, transition: { duration: 1, delay: 1 } },
    transition: { duration: 5 },
  };

  const darkSvgVariants = {
    initial: { pathLength: 1 },
    animate: { pathLength: 1, transition: { duration: 0 } },
    transition: { duration: 0 },
  };

  const btnClass = "alt-nav-btn";

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
        {/* <BetterManny
          classSetter="home-svg"
          svgParentVariants={fadeSvgVariants}
          svgVariants={pathVariants}
        /> */}
        <div className="alt-home-group" id="alt-about-group">
          <div className="alt-home-btn-container" id="alt-about-btn-container">
            <NavBtn
              btnClass={btnClass}
              btnId="alt-about-btn"
              btnName="About"
              btnLink="about"
            />
          </div>
          <div className="alt-home-svg-container" id="alt-about-svg-container">
            <div
              className="alt-home-svg-semicircle"
              id="alt-about-svg-semicircle"
            ></div>
            <div className="alt-home-svg-circle"></div>

            <div className="alt-home-svg-wrapper" id="alt-about-svg-wrapper">
            
              <FancyManny fancySvgVariants={fadeInVariants} classSetter="home-bg-svg"/>
              <FancyManny fancySvgVariants={fadeInVariants} classSetter="home-svg-front"/>
              <BetterManny svgVariants={pathVariants} svgParentVariants={fadeOutVariants} classSetter="home-svg"/>
              
            </div>
          </div>
        </div>
        <div className="alt-home-group" id="alt-projects-group">
          
          <div
            className="alt-home-svg-container"
            id="alt-projects-svg-container"
          >
            <div
              className="alt-home-svg-semicircle"
              id="alt-projects-svg-semicircle"
            ></div>
            <div className="alt-home-svg-circle"></div>

            <div className="alt-home-svg-wrapper" id="alt-projects-svg-wrapper">
            <FancyComp fancySvgVariants={fadeInVariants} classSetter="home-bg-svg"/>
            <FancyComp fancySvgVariants={fadeInVariants} classSetter="home-svg-front"/>
              <BetterComp svgVariants={pathVariants} svgParentVariants={fadeOutVariants} classSetter="home-svg"/>
            </div>
          </div>
          <div
            className="alt-home-btn-container"
            id="alt-projects-btn-container"
          >
            <NavBtn
              btnClass={btnClass}
              btnId="alt-projects-btn"
              btnName="Projects"
              btnLink="portfolio"
            />
          </div>
          
        </div>
        <div className="alt-home-group" id="alt-connect-group">
          <div
            className="alt-home-btn-container"
            id="alt-connect-btn-container"
          >
            <NavBtn
              btnClass={btnClass}
              btnId="alt-connect-btn"
              btnName="Connect"
              btnLink="contact"
            />
          </div>
          <div
            className="alt-home-svg-container"
            id="alt-connect-svg-container"
          >
            <div
              className="alt-home-svg-semicircle"
              id="alt-connect-svg-semicircle"
            ></div>
            <div className="alt-home-svg-circle"></div>

            <div className="alt-home-svg-wrapper" id="alt-connect-svg-wrapper">
            <FancyCube fancySvgVariants={fadeInVariants} classSetter="home-bg-svg"/>
            <FancyCube fancySvgVariants={fadeInVariants} classSetter="home-svg-front"/>
              <BetterCube svgVariants={pathVariants} svgParentVariants={fadeOutVariants} classSetter="home-svg"/>
            </div>
          </div>
        </div>
        {/* <motion.div
          className="home-nav"
          id="cube-nav"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ ease: "circOut", duration: 2 }}
        >
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
              </motion.div> */}
      </motion.div>
    </>
  );
};

export default AltHome;
