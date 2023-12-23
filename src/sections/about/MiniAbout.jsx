import SmallAbout from "./SmallAbout.jsx";
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
import CircleInCircles from "./CircleInCircles";

import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import WoodworkingImgBgStatic from "../../assets/svgs/WoodworkingImgBgStatic.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../../assets/svgs/SkylineImgBgPosterity.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStaticPosterity.jsx";
import MannyImg from "../../assets/svgs/MannyImg.jsx";

import { useState, useEffect } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";

import "../../style/MiniAbout.css";

const MiniAbout = ({ svgVariants }) => {
  const [showNavBtns, setShowNavBtns] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="small-about-container"
          data-thingSelected={aboutSelected}
        >
          <AnimatePresence>
            {!aboutSelected && (
              <>
                <motion.div
                  className="sm-top-row"
                  initial={false}
                  animate={{ y: 0 }}
                  exit={{ y: -500, transition: { duration: 2 } }}
                >
                  <div className="sm-t-left">
                    <div className="tlc-left">
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
                    <div className="tlc-right"></div>
                  </div>
                  <div className="sm-t-right">
                    <span className="sm-name-is">My name is Josh</span>
                  </div>
                </motion.div>
                <motion.div
                  className="sm-mid-top-row"
                  initial={{ width: "0%", y: 0 }}
                  animate={{ width: "100%", y: 0 }}
                  exit={{
                    width: "100%",
                    y: -1000,
                    transition: { duration: 1 },
                  }}
                >
                  <div className="sm-mt-left">
                    <div className="sm-m-left"></div>

                    <div className="sm-m-right"></div>
                  </div>
                  <div className="sm-mt-mid">
                    <div className="sm-mt-mid-dashes"></div>

                    <div className="sm-mt-mu-space"></div>
                    <motion.div className="sm-skyline-container">
                      <div className="sm-mt-mid-underline"></div>
                      <div className="sm-skyline-inner-container">
                        <SkylineImg
                          svgVariants={svgVariants}
                          classSetter="sm-skyline-svg"
                        />
                        <SkylineImgBgStatic
                          svgVariants={svgVariants}
                          classSetter="sm-skyline-svg-bg"
                        />
                      </div>
                    </motion.div>
                    <div className="sm-mt-ml-space">
                      

                      {showNavBtns ? (
                        <>
                          <div className="sm-main-nav-container">
                            {/* <div className="nav-spacer left-nav-spacer">
                            <div className="mini-dashes">
                              <div className="mini-dash-itself"></div>
                            </div>
                            <div className="mini-dashes">
                              <div className="mini-dash-itself"></div>
                            </div>
                            <div className="mini-dashes">
                              <div className="mini-dash-itself"></div>
                            </div>
                          </div> */}
                            <nav className="sm-main-nav">
                              <ul className="sm-nav-btns-list">
                                <li className="sm-nav-btn-item">
                                  <button
                                    className="go-sm-button"
                                    id="sm-about-nav"
                                    onClick={() => setAboutSelected(true)}
                                  >
                                    About
                                  </button>
                                </li>
                                <li className="sm-nav-btn-item">
                                  <button
                                    className="go-sm-button"
                                    id="sm-projects-nav"
                                  >
                                    Projects
                                  </button>
                                </li>
                                <li className="sm-nav-btn-item">
                                  <button
                                    className="go-sm-button"
                                    id="sm-connect-nav"
                                  >
                                    Connect
                                  </button>
                                </li>
                              </ul>
                            </nav>
                            {/* <div className="nav-spacer right-nav-spacer"></div> */}
                          </div>
                        </>
                      ) : (
                        <>
                        <span className="sm-i-live">I live in Atlanta</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="sm-mt-right"></div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {aboutSelected && (
            <div className="sm-about-content">
              <div className="sm-ac-left">
                
              </div>
              <div className="sm-ac-right">
              {/* <div className="sm-ac-right-dashes"></div> */}
              <SmallAbout />
              
              </div>
            </div>
          )}
          <motion.div
            className="sm-mid-bot-row"
            data-thingSelected={aboutSelected}
            layout
          >
            <div className="sm-mb-left">
              <div className="sm-mb-left-dashes"></div>
              <div className="sm-mb-left-horizontal-dash"></div>
              <div className="sm-mb-lu-text">
                <span className="making-things">I</span>
              </div>
              <div className="sm-mb-ll-text">
                <span className="making-things">making</span>
              </div>
            </div>
            <div className="sm-mb-mid">
              <div className="sm-mb-mu"></div>
              <div className="sm-mb-mu-text">
                <span className="making-things">like</span>
              </div>
              <div className="sm-mb-ml-text">
                <span className="making-things">things</span>
              </div>
            </div>
            <div className="sm-mb-right">
              <div className="sm-woodwork-parent-container">
                <div className="sm-woodwork-container">
                  {aboutSelected ? (
                    <>
                      <MannyImg svgVariants={svgVariants} />
                    </>
                  ) : (
                    <>
                    <WoodworkingImg svgVariants={svgVariants} />
                  <WoodworkingImgBgStatic svgVariants={svgVariants} />
                    </>
                  )}
                  
                </div>
              </div>
            </div>
            {/* <button className="sm-go-btn">Go</button>
          <button className="sm-go-btn">Skills</button>
          <button className="sm-go-btn">Experience</button>
          <button className="sm-go-btn">Education</button> */}
            {/* <button className="sm-go-btn">Interests</button>
          <button className="sm-go-btn">About</button>
          <button className="sm-go-btn">Portfolio</button>
          <button className="sm-go-btn">Contact</button> */}
          </motion.div>
          <div className="sm-bot-row"></div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MiniAbout;
