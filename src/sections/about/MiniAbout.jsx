import SkillsRight from "./SkillsRight.jsx";
import SkillsLeft from "./SkillsLeft.jsx";
import AboutCircles from "./AboutCircles.jsx";
import ExperienceTop from "./ExperienceTop.jsx";
import ExperienceBottom from "./ExperienceBottom.jsx";
import EducationLeft from "./EducationLeft.jsx";
import EducationRight from "./EducationRight.jsx";
import EducationCenter from "./EducationCenter.jsx";
import Interests from "./Interests.jsx";
import AboutNav from "./AboutNav.jsx";
import Achievements from "./Achievements.jsx";
import MyStory from "./MyStory.jsx";

import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../../assets/svgs/SkylineImgBg.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStatic.jsx";

import { useState, useEffect } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";

import "../../style/MiniAbout.css";

const MiniAbout = ({ svgVariants }) => {
  return (
    <>
      <div className="small-about-container">
        <div className="sm-top-row">
          <div className="sm-top-row-left">
            <div className="sm-photo-wrapper">
              <motion.img
                src={phreshPhoto}
                className="sm-fresh-photo"
                initial={{ filter: "blur(50px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 2 }}
              ></motion.img>
            </div>
          </div>
          <div className="sm-top-row-right">
            {/* <div className="sm-t-r-left"></div> */}
            {/* <div className="sm-t-r-right"></div> */}
            <span className="sm-name-is">My name's Josh</span>
          </div>
        </div>
        <div className="sm-middle-row">
          <div className="sm-b-l-spacer">
            <div className="sm-m-left"></div>
            <span className="sm-i-live">I live in <br />Atlanta</span>

            <div className="sm-m-right"></div>
          </div>
          <motion.div className="sm-skyline-container">
            <SkylineImg
              svgVariants={svgVariants}
              classSetter="sm-skyline-svg"
            />
            <SkylineImgBgStatic
              svgVariants={svgVariants}
              classSetter="sm-skyline-svg-bg"
            />
          </motion.div>
        </div>
        <div className="sm-bottom-row">
          <button className="sm-go-btn">Go</button>
        </div>
        <div className="fourth-row"></div>
      </div>
    </>
  );
};

export default MiniAbout;
