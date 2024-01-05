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

import FlashingArrows from "./FlashingArrows.jsx";

import LoremIpsum from "./LoremIpsum.jsx";

import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import WoodworkingImgBgStatic from "../../assets/svgs/WoodworkingImgBgStatic.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../../assets/svgs/SkylineImgBgPosterity.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStaticPosterity.jsx";
import MannyImg from "../../assets/svgs/MannyImg.jsx";
import MannyImgBgStatic from "../../assets/svgs/MannyImgBgStatic.jsx";

import { useState, useEffect } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";

import "../../style/MiniAbout.css";

const MiniAbout = ({ svgVariants, goClickHandler, goClicked }) => {
  const [showNavBtns, setShowNavBtns] = useState(false);
  const [sectionTitle, setSectionTitle] = useState("");

  useEffect(() => {
    if (goClicked === true) {
      setSectionTitle("Skills");
    }
  }, [goClicked]);

  const showSectionTitle = () => {
    return goClicked
      ? { flex: 1, width: "auto", height: "auto" }
      : { flex: 0, width: 0, height: 0 };
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="small-about-container"
          data-thingSelected={goClicked}
        >
          <AnimatePresence>
            {!goClicked && (
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
                    {/* <div className="tlc-right"></div> */}
                  </div>
                  <div className="sm-t-right">
                    <div className="trc-left"></div>
                    <div className="trc-right">
                      {/* <div className="trc-right-dashes"></div> */}
                      <span className="sm-name-is">
                        My name is <br />
                        Josh
                      </span>
                    </div>
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
                      <>
                        <span className="sm-i-live">I live in Atlanta</span>
                      </>
                    </div>
                  </div>
                  <div className="sm-mt-right"></div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          {goClicked && (
            <motion.div
              className="sm-about-content"
              data-thingSelected={goClicked}
              layout
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ duration: .5 }}
            >
              <div className="sm-ac-wrapper">
                {/* <div className="sm-ac-right-dashes"></div> */}
                <SmallAbout setSectionTitle={setSectionTitle} />
              </div>
            </motion.div>
          )}
          <motion.div
            className="sm-mid-bot-row"
            data-thingSelected={goClicked}
            
            layout
          >
            <div className="sm-mb-left">
              <div className="sm-mbl-top">
                <div className="sm-mbl-t-left">
                  <div
                    className="sm-mblt-dashes"
                    data-shortenDashes={goClicked}
                  ></div>
                  {!goClicked && <span className="making-things">I</span>}
                </div>
                <div className="sm-mbl-t-right">
                  {!goClicked && <span className="making-things">like</span>}
                </div>
              </div>
              <div className="sm-mbl-mid">
                <div className="sm-mbl-m-left">
                  <div className="sm-mblm-dashes"></div>
                </div>
                <div
                  className="sm-mbl-m-mid"
                  // initial={{ flex: 0, width: 0, height: 0 }}
                  // animate={showSectionTitle}
                  // transition={{ duration: 2, delay: 1 }}
                  // layout
                >
                  {goClicked && (
                    <div className="sm-mblm-heading-container">
                      <h2 className="sm-section-heading">{sectionTitle}</h2>
                    </div>
                  )}
                </div>
                <div className="sm-mbl-m-right" layout>
                  <div className="sm-mblm-dashes"></div>
                </div>
              </div>
              <div className="sm-mbl-bot">
                <div className="sm-mbl-b-left">
                  <div
                    className="sm-mblb-dashes"
                    data-shortenDashes={goClicked}
                  ></div>
                  {!goClicked && <span className="making-things">making</span>}
                </div>
                <div className="sm-mbl-b-right">
                  {!goClicked && <span className="making-things">things</span>}
                </div>
              </div>
            </div>
            <div className="sm-mb-right">
              <div className="sm-svg-parent-container">
                <div className="sm-svg-container">
                  {goClicked ? (
                    <>
                      <MannyImg svgVariants={svgVariants} />
                      <MannyImgBgStatic svgVariants={svgVariants} />
                    </>
                  ) : (
                    <>
                      <WoodworkingImg svgVariants={svgVariants} />
                      <WoodworkingImgBgStatic svgVariants={svgVariants} />
                      <motion.button
                        className="sm-go-forth-btn"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                        onClick={() => goClickHandler()}
                      >
                        {/* GO */}
                        <div className="go-btn-img-container">
                          {/* <img className="go-btn-arrow" src={arrow} /> */}
                          <FlashingArrows delayMulti={1} />
                          <FlashingArrows delayMulti={2} />
                          <FlashingArrows delayMulti={3} />
                        </div>
                      </motion.button>
                      {/* <motion.button className="sm-go-forth-btn"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2, delay: 1 }}>
                        GO
                        <div className="go-btn-img-container">
                          <img className="go-btn-arrow" src={arrow} />
                          <img className="go-btn-arrow" src={arrow} />
                          <img className="go-btn-arrow" src={arrow} />
                          <img className="go-btn-arrow" src={arrow} />
                        </div>
                      </motion.button> */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="sm-bot-row"></div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MiniAbout;
