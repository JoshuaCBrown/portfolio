import { useState, useEffect } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Interests from "./Interests.jsx";

import KeysImg from "../../assets/svgs/KeysImg.jsx";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../../assets/svgs/SkylineImgBg.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStatic.jsx";
import SkylineImgBgReverse from "../../assets/svgs/SkylineImgBgReverse.jsx";
import BenchyImg from "../../assets/svgs/BenchyImg.jsx";
import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";
import directionArrow from "../../assets/commonicons/directional-arrow-two.png";

import TransitAnim from "../../transit-routes/TransitAnim";

import SkillsBlackRight from "./SkillsBlack.jsx";

import AboutHome from "./AboutHome";

import "../../style/About.css";

const About = ({ themeStyle }) => {
  const [goClicked, setGoClicked] = useState(false);
  const [aboutSection, setAboutSection] = useState("");
  const [displayShowBox, setDisplayShowBox] = useState(true);
  // const [goClicked, setGoClicked] = useState(true);
  // const [aboutSection, setAboutSection] = useState("skills");
  // const [displayShowBox, setDisplayShowBox] = useState(false);
  const [skylineReady, setSkylineReady] = useState(false);
  const [bgSkylineReady, setBgSkylineReady] = useState(false);
  const [animateMe, setAnimateMe] = useState(false);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    setGoClicked(false);
    const simulOne = () => {
      return (
        animate(
          ".about-left-right-top-dashes",
          { height: "70%" },
          { duration: 0.15 }
        ),
        animate(
          ".about-left-right-bottom-top-dashes",
          { height: "100%" },
          { duration: 0.25 }
        ),
        animate(
          ".about-middle-top-dashes",
          { width: "100%" },
          { duration: 0.25 }
        )
      );
    };
    const simulTwo = () => {
      return (
        animate(
          ".about-left-right-bottom-top-dashes",
          { width: "70%" },
          { duration: 0.15, ease: "easeOut" }
        ),
        animate(
          ".about-right-top-left-dashes",
          { width: "100%" },
          { duration: 0.15 }
        ),
        animate(
          ".about-left-right-bottom-bottom-dashes",
          { height: "100%" },
          { duration: 0.25 }
        ),
        animate(
          ".about-middle-middle-dashes",
          { width: "100%" },
          { duration: 0.5 }
        )
      );
    };
    const simulThree = () => {
      setSkylineReady(true);
      return animate(
        ".livin-in-the-city",
        { filter: "blur(0px)", opacity: 1 },
        { duration: 1 }
      );
    };
    const simulFour = () => {
      setBgSkylineReady(true);
      return animate(
        ".tilted-container-dash",
        { height: "100%" },
        { duration: 0.7, delay: 0.2 }
      );
    };

    const showPhoto = () => {
      return (
        animate(
          ".fresh-foto",
          { filter: "blur(0)" },
          { duration: 1, delay: 1, ease: "easeOut" }
        ),
        animate(
          ".photo-border-reveal",
          { opacity: 1 },
          { duration: 0.5, delay: 0.5 }
        )
      );
    };

    const simulFive = () => {
      return (
        animate(
          ".skyline-svg-bg",
          { opacity: 0.9 },
          { duration: 1, delay: 0.5 }
        ),
        animate(
          ".problem-solving",
          {
            opacity: [0, 0.5, 1, 1],
            filter: ["blur(5px)", "blur(10px)", "blur(1px)", "blur(0px)"],
          },
          { duration: 1.5, delay: 0.5 }
        ),
        animate(".go-button", { opacity: 1 }, { duration: 2, delay: 1 })
      );
    };

    const runAnimation = async () => {
      await showPhoto();
      await animate(
        ".photo-container-dashes",
        { opacity: 1, rotate: [270, 0] },
        { ease: "easeOut", duration: 0.7 }
      );
      await animate(
        ".about-left-right-top-dashes",
        { width: "100%" },
        { duration: 0.25, delay: 0.25 }
      );
      await simulOne();
      await simulTwo();
      await animate(
        ".about-right-middle-left-dashes",
        { width: "100%" },
        { duration: 0.25 }
      );
      await simulThree();
      await simulFour();
      setAnimateMe(true);
      await simulFive();
    };
    runAnimation().catch(console.error);
  }, []);

  const firstCircleVariant = {
    transition: {
      duration: 0.7,
      ease: [0, 0.5, 0.4, 0.95],
    },
  };

  const circleVariants = () => {
    // goClicked ?
  };

  // animate={{ width: ["0%", "100%", "100%"], height: ["0%", "0%", "70%"] }}
  // transition={{ duration: 0.5, delay: 0.25, type: "easeIn" }}

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
    setDisplayShowBox((prevState) => !prevState);
  };

  const showBox = () => {
    return displayShowBox
      // ? { flex: 1, opacity: 1, transition: { duration: 0.25, delay: 0.25 } }
      // : { flex: 0, opacity: 1, transition: { duration: 0.25, delay: 0 } };
      ? { flex: 1, opacity: 1, transition: { duration: 2, delay: 2 } }
      : { flex: 0, opacity: 1, transition: { duration: 2, delay: 0 } };
  };

  const tellBox = () => {
    return displayShowBox
      // ? { flex: 0, transition: { duration: 0.25, delay: 0 } }
      // : { flex: 1, transition: { duration: 0.25, delay: 0.25 } };
      ? { flex: 0, transition: { duration: 2, delay: 0 } }
      : { flex: 1, transition: { duration: 2, delay: 2 } };
  };

  return (
    <>
      <TransitAnim>
        <div className="about-container" data-goOn={goClicked} ref={scope}>
          <div className="about-left-container" data-goOn={goClicked}>
            <div className="about-left-left"></div>
            <div className="about-left-middle" data-goOn={goClicked}>
              <div className="about-circles-container" data-goOn={goClicked}>
                <motion.div
                  className="photo-container circle-group"
                  id="circle-zero"
                  layout
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="photo-shaper">
                    {goClicked ? (
                      <div className="circle-text">Skills</div>
                    ) : (
                      <>
                        <img src={phreshPhoto} className="fresh-foto" />
                        <div className="photo-border-reveal"></div>
                      </>
                    )}
                  </div>
                  <div className="photo-container-dashes"></div>
                </motion.div>

                <motion.div
                  className="circle-design circle-group"
                  id="circle-one"
                  layout
                  data-animMe={animateMe}
                  transition={
                    goClicked
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.4,
                          type: "spring",
                          ease: [0, 0.5, 0.4, 0.95],
                        }
                  }
                ></motion.div>
                <motion.div
                  className="circle-design circle-group"
                  id="circle-two"
                  layout
                  data-animMe={animateMe}
                  transition={
                    goClicked
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.5,
                          ease: [0, 0.5, 0.4, 0.95],
                          type: "spring",
                        }
                  }
                ></motion.div>
                <motion.div
                  className="circle-design circle-group"
                  id="circle-three"
                  layout
                  data-animMe={animateMe}
                  transition={
                    goClicked
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          duration: 0.7,
                          ease: [0, 0.5, 0.4, 0.95],
                          type: "spring",
                        }
                  }
                ></motion.div>
              </div>
            </div>
            <motion.div layout className="about-left-right">
              {goClicked ? (
                <></>
              ) : (
                <>
                  <div className="about-left-right-top">
                    <div className="about-left-right-top-dashes"></div>

                    <motion.div
                      className="my-name-is"
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      My name is Josh
                    </motion.div>
                  </div>
                  <div className="about-left-right-bottom">
                    <div className="about-left-right-bottom-top">
                      <div className="about-left-right-bottom-top-dashes"></div>
                    </div>
                    <div className="about-left-right-bottom-bottom-dashes"></div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
          <div className="flex-show-n-tell">
            <AnimatePresence>
              {!goClicked && (
                <motion.div
                  className="flex-show"
                  layout
                  initial={{ flex: 1, opacity: 1 }}
                  animate={showBox}
                  exit={{ flex: 0, opacity: 0, transition: { duration: 0.25 } }}
                >
                  <div className="about-left-dashes"></div>
                  <motion.div layout className="about-middle-container">
                    <div className="intro-top-container">
                      <div className="about-middle-top-dashes"></div>
                    </div>
                    <div className="intro-mid-container">
                      <p className="problem-solving">
                        I like{" "}
                        <span className="blue-bg-highlight">
                          problem solving
                        </span>{" "}
                        and <br />
                        <span className="blue-bg-highlight-two">
                          making things
                        </span>
                      </p>
                      <button className="go-button" onClick={goClickHandler}>
                        <img src={directionArrow} className="go-arrow" />
                      </button>
                      <div className="about-middle-middle-dash-container">
                        <div className="about-middle-middle-dashes"></div>
                      </div>
                    </div>

                    <div className="intro-bottom-container"></div>
                  </motion.div>
                  <motion.div
                    layout
                    className="about-right-container"
                    data-goOn={goClicked}
                  >
                    <div className="about-right-top">
                      <div className="about-right-top-left">
                        <div className="about-right-top-left-dashes"></div>
                      </div>
                    </div>
                    <div className="about-right-middle">
                      <div className="about-right-middle-left">
                        <div className="about-right-middle-left-dashes"></div>
                      </div>
                      <div className="about-right-middle-middle">
                        <motion.div layout className="skyline-svg-container">
                          {skylineReady && (
                            <SkylineImg svgVariants={lightSvgVariants} />
                          )}
                          {bgSkylineReady && (
                            <SkylineImgBgStatic
                              svgVariants={lightSvgVariants}
                            />
                          )}
                        </motion.div>
                      </div>
                    </div>
                    <div className="about-right-bottom">
                      <div className="about-right-bottom-left"></div>
                      <div className="about-right-bottom-middle">
                        <span className="livin-in-the-city">
                          I live in Atlanta, GA
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="tilted-container"
                    layout="position"
                    initial={{ rotate: -35, y: 0 }}
                    animate={
                      goClicked
                        ? { rotate: [-25, -5, 0], y: [0, 40, 100] }
                        : { rotate: -35, y: 0 }
                    }
                    transition={{
                      type: "tween",
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="tilted-container-dash"></div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div className="flex-tell" layout animate={tellBox}>
              {goClicked && (
                <>
                  <div className="detailed-about-container">
                    <div className="detailed-about-left">
                      <div className="detailed-left-top"></div>
                      <div className="detailed-left-bottom"></div>
                    </div>
                    <div className="detailed-about-middle">
                      <div className="detailed-spacer-top"></div>
                      <div className="detailed-middle-border"></div>
                      <div className="detailed-spacer-bottom"></div>
                    </div>
                    <div className="detailed-about-right">
                      <div className="detailed-right-top">
                        <SkillsBlackRight />
                      </div>
                      <div className="detailed-right-bottom"></div>
                    </div>
                  </div>
                  <div className="detailed-rightside-container">
                    <div className="icons-parent-container">
                      <div className="icon-container">
                        <WoodworkingImg />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
            <motion.div
              className="flex-cape"
              layout
              animate={{ flex: 0 }}
            ></motion.div>
          </div>
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

{
  /* <motion.div
  layout
  transition={{ duration: 2, delay: 2 }}
  className="about-expansion-container"
>
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
          <div className="emblem-outer-bench-container">
                      <div className="emblem-inner-bench-container">
                        <BenchyImg svgVariants={lightSvgVariants} />
                      </div>
                    </div>
                    <div className="emblem-outer-keeys-container">
                      <div className="emblem-inner-keeys-container">
                        <KeysImg svgVariants={lightSvgVariants} />
                      </div>
                    </div> 
        </>
      ) : (
        <></>
      )}
    </div>
    <div></div>
  </div>
</motion.div>; */
}
