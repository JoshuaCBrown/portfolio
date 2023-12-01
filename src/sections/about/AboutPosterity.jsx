import { useState } from "react";
import { motion } from "framer-motion";

import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Interests from "./Interests.jsx";

import KeysImg from "../../assets/svgs/KeysImg.jsx";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../../assets/svgs/SkylineImgBg.jsx";
import BenchyImg from "../../assets/svgs/BenchyImg.jsx";
import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";
import directionArrow from "../../assets/commonicons/directional-arrow-two.png";

import TransitAnim from "../../transit-routes/TransitAnim";

import AboutHome from "./AboutHome";

import "../../style/About.css";

const About = ({ themeStyle }) => {
  const [goClicked, setGoClicked] = useState(false);
  const [aboutSection, setAboutSection] = useState("");

  const lightSvgVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { duration: 2 } },
    transition: { duration: 2 },
  };

  const darkSvgVariants = {
    initial: { pathLength: 1 },
    animate: { pathLength: 1, transition: { duration: 0 } },
    transition: { duration: 0 },
  };

  const goClickHandler = () => {
    setGoClicked(true);
    setAboutSection("skills");
  };

  return (
    <>
      <TransitAnim>
        <div className="about-container" data-goOn={goClicked}>
          <div className="about-left-container" data-goOn={goClicked}>
            <div className="about-left-left"></div>
            <div className="about-left-middle" data-goOn={goClicked}>
              <div className="about-circles-container" data-goOn={goClicked}>
                <motion.div layout className="photo-container">
                  <div className="photo-shaper">
                    {goClicked ? (
                      <h2 className="about-sub-heading">{aboutSection}</h2>
                    ) : (
                      <img src={phreshPhoto} className="fresh-foto" />
                    )}
                  </div>
                </motion.div>
                <div className="remaining-circles" data-goOn={goClicked}>
                  <motion.div
                    className="circle-design"
                    id="circle-one"
                    layout
                  ></motion.div>
                  <motion.div
                    className="circle-design"
                    id="circle-two"
                    layout
                  ></motion.div>
                  <motion.div
                    className="circle-design"
                    id="circle-three"
                    layout
                  ></motion.div>
                </div>
                {{ goClicked } ? <div className="place-holder"></div> : <></>}
              </div>
            </div>
            <motion.div layout className="about-left-right">
              {goClicked ? (
                <></>
              ) : (
                <>
                  <div className="about-left-right-top">My name is Josh</div>
                  <div className="about-left-right-bottom">
                    <div className="about-left-right-bottom-top"></div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
          <motion.div layout className="about-expansion-container">
            <div className="about-expansion-middle">
              <div className="about-expansion-upper-middle"></div>
              <div className="about-expansion-lower-middle">
                {aboutSection === "skills" && (
                  <>
                    <Skills />
                  </>
                )}
                {aboutSection === "experience" && (
                  <>
                    <Experience />
                  </>
                )}
                {aboutSection === "education" && (
                  <>
                    <Education />
                  </>
                )}
                {aboutSection === "everything" && (
                  <>
                    <EverythingAboutMe />
                  </>
                )}
              </div>
            </div>
            <div className="about-expansion-right">
              <div className="empty-space"></div>
              <div className="about-expansion-upper-right">
                {goClicked ? (
                  <>
                    <div className="emblem-outer-ww-container">
                      <div className="emblem-inner-ww-container">
                        <WoodworkingImg svgVariants={lightSvgVariants} />
                      </div>
                    </div>
                    {/* <div className="emblem-outer-bench-container">
                      <div className="emblem-inner-bench-container">
                        <BenchyImg svgVariants={lightSvgVariants} />
                      </div>
                    </div>
                    <div className="emblem-outer-keeys-container">
                      <div className="emblem-inner-keeys-container">
                        <KeysImg svgVariants={lightSvgVariants} />
                      </div>
                    </div> */}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div></div>
            </div>
          </motion.div>
          <div className="about-left-dashes"></div>
          <motion.div layout className="about-middle-container">
            <div className="intro-top-container"></div>
            <div className="intro-mid-container">
              <p>I like problem solving and making things</p>
              <button className="go-button" onClick={goClickHandler}>
                <img src={directionArrow} className="go-arrow" />
              </button>
            </div>

            <div className="intro-bottom-container"></div>
          </motion.div>
          <motion.div layout className="about-right-container">
            <div className="about-right-top">
              <div className="about-right-top-left"></div>
            </div>
            <div className="about-right-middle">
              <div className="about-right-middle-left"></div>
              <div className="about-right-middle-middle">
                <div className="skyline-svg-container">
                  <SkylineImg svgVariants={lightSvgVariants} />
                  <SkylineImgBg svgVariants={lightSvgVariants} />
                </div>
              </div>
            </div>
            <div className="about-right-bottom">
              <div className="about-right-bottom-left"></div>
              <div className="about-right-bottom-middle">
                I live in Atlanta, GA
              </div>
            </div>
          </motion.div>
          <motion.div
            className="tilted-container"
            layout="size"
            initial={{ scale: 1 }}
            animate={goClicked ? { scale: 0 } : { scale: 1 }}
          ></motion.div>
          {/* <Skills />
        <Education /> 
        {themeStyle ? (
          <>
            <BenchyImg svgVariants={darkSvgVariants} />{" "}
            <SkylineImg svgVariants={darkSvgVariants} />
          </>
        ) : (
          <div style={{display: 'flex', width: '500px'}}>
            <KeysImg svgVariants={lightSvgVariants} />
            <WoodworkingImg svgVariants={lightSvgVariants} />
            <BenchyImg svgVariants={lightSvgVariants} />
            <SkylineImg svgVariants={lightSvgVariants} />
          </div>
        )} */}
        </div>
      </TransitAnim>
    </>
  );
};

export default About;
