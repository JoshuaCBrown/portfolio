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
  const CircleInCircles = () => {
    //weighted front or weighted back if you want larger changes at the beginning or end of the circle spre  
    //change these seven? variables to change circle sizes and # of circles around icon image

    const numOfCircles = 8;;
    const startingDiameter = 2; //<-- in pixels
    const endingDiamater = 20; //<-- in pixels
    const parentCircleRadius = 85; //<--in pixels
    const circleRange = 120; // <-- number of degrees that the circles should appear within. between 0 - 360
    const bigToSmall = true; // < -- true/false - reverse the direction of circles
    const offset = 0; // <-- offset starting rotation
    //STARTMATH
    const circleDif = (endingDiamater - startingDiameter) / numOfCircles;
    const circleArr = [];
    const degreesOfSeparation = circleRange / (numOfCircles - 1);
    for (let i = 0; i < numOfCircles; ++i) {
      let circleMultiplier = (i + 1) * circleDif;
      let circleSize = startingDiameter + circleMultiplier;
      let circleDefaultRotation = bigToSmall
        ? degreesOfSeparation * (numOfCircles - 1 - i)
        : degreesOfSeparation * i;
      let circleRotation = circleDefaultRotation - offset;
      let circleRadius = circleSize / 2;
      const newCircle = {
        size: circleSize,
        rotation: circleRotation,
        radius: circleRadius,
      };
      circleArr.push(newCircle);
    }
    // const circleArr = bigToSmall ? rawCircleArr.reverse() : rawCircleArr;

    return (
      <>
        {circleArr.map((circ, i) => (
          <div
            style={{
              height: `${circ.size}px`,
              width: `${circ.size}px`,
              transform: `rotate(${circ.rotation}deg) translateX(${parentCircleRadius}px)`,
              top: `calc(50% - ${circ.radius})`,
              left: `calc(50% - ${circ.radius})`,
            }}
            className="surround-circle"
            id={`surround-circ-id-${i}`}
          ></div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="small-about-container">
        <div className="sm-top-row">
          <div className="sm-t-left">
            <div className="sm-photo-wrapper">
              <motion.img
                src={phreshPhoto}
                className="sm-fresh-photo"
                initial={{ filter: "blur(50px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 2 }}
              ></motion.img>
            </div>
            <CircleInCircles />
          </div>
          <div className="sm-t-right">
            {/* <div className="sm-t-r-left"></div>
            <div className="sm-t-r-right"></div>
            <span className="sm-name-is">My name is Josh</span> */}
          </div>
        </div>
        <div className="sm-mid-top-row">
          <div className="sm-b-l-spacer">
            <div className="sm-m-left"></div>
            {/* <span className="sm-i-live">
              I live in <br />
              Atlanta <br />and problem solving
            </span> */}
            <div className="sm-m-right"></div>
          </div>
          {/* <motion.div className="sm-skyline-container">
            <SkylineImg
              svgVariants={svgVariants}
              classSetter="sm-skyline-svg"
            />
            <SkylineImgBgStatic
              svgVariants={svgVariants}
              classSetter="sm-skyline-svg-bg"
            />
            
          </motion.div> */}
        </div>
        <div className="sm-mid-bot-row">
          {/* <button className="sm-go-btn">Go</button>
          <button className="sm-go-btn">Skills</button>
          <button className="sm-go-btn">Experience</button>
          <button className="sm-go-btn">Education</button> */}
          {/* <button className="sm-go-btn">Interests</button>
          <button className="sm-go-btn">About</button>
          <button className="sm-go-btn">Portfolio</button>
          <button className="sm-go-btn">Contact</button> */}
        </div>
        <div className="sm-bot-row"></div>
      </div>
    </>
  );
};

export default MiniAbout;
