import { useState, useEffect } from "react";
import { useAnimate, motion, AnimatePresence } from "framer-motion";

import KeysImg from "../../assets/svgs/KeysImg.jsx";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../../assets/svgs/SkylineImgBg.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStatic.jsx";
import SkylineImgBgReverse from "../../assets/svgs/SkylineImgBgReverse.jsx";
import BenchyImg from "../../assets/svgs/BenchyImg.jsx";

import directionArrow from "../../assets/commonicons/directional-arrow-two.png";

import arrow from "../../assets/commonicons/arrow.png";

import TransitAnim from "../../transit-routes/TransitAnim";

import SkillsRight from "./SkillsRight.jsx";
import SkillsLeft from "./SkillsLeft.jsx";
import AboutCircles from "./AboutCircles.jsx";
import ExperienceTop from "./ExperienceTop.jsx";
import ExperienceBottom from "./ExperienceBottom.jsx";
import EducationLeft from "./EducationLeft.jsx";
import EducationRight from "./EducationRight.jsx";
import EducationCenter from "./EducationCenter.jsx";
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
  const [pageSelected, setPageSelected] = useState(0);

  const [scope, animate] = useAnimate();

  const pageArr = [0, 1, 2, 3];

  // <--- key: [top, left div flex, bottom, right div flex, optional third flex-grow, optional third Top Spacer, Optional Third bottom spacer] --->
  const dimensionsArr = [
    ["23%", 1, "20%", 1, 0, "80%", "20%"],
    ["42%", 1, "15%", 2, 1, "30%", "15%"],
    ["57%", 1, "43%", 0, 0, "57%", "43%"],
    ["77%", 0, "23%", 2, 1, "25%", "23%"],
  ];

  const iconSpacing = ["5%", "55%", "28%", "60%"];

  const iconPlace = () => {
    const newIconSpacing = iconSpacing[pageSelected];
    return {
      height: newIconSpacing,
    };
  };
  const aboutTopSpacing = () => {
    const newHeightSpacing = dimensionsArr[pageSelected][0];

    return {
      height: newHeightSpacing,
    };
  };

  const aboutBottomSpacing = () => {
    const newHeightSpacing = dimensionsArr[pageSelected][2];
    return {
      height: newHeightSpacing,
    };
  };

  const aboutLeftSpacing = () => {
    const newWidthSpacing = dimensionsArr[pageSelected][1];
    return { flex: newWidthSpacing };
  };

  const aboutRightSpacing = () => {
    const newWidthSpacing = dimensionsArr[pageSelected][3];
    return { flex: newWidthSpacing };
  };

  const optionalThirdOnOff = () => {
    const newWidthSpacing = dimensionsArr[pageSelected][4];
    return { flex: newWidthSpacing };
  };

  const optionalThirdTop = () => {
    const newWidthSpacing = dimensionsArr[pageSelected][5];
    return { height: newWidthSpacing };
  };

  const optionalThirdBot = () => {
    const newWidthSpacing = dimensionsArr[pageSelected][6];
    return { height: newWidthSpacing };
  };

  const abtNav = (whichWay) => {
    if (pageSelected + whichWay === 4) {
      setPageSelected(0);
    } else if (pageSelected + whichWay === -1) {
      setPageSelected(3);
    } else {
      const thisWay = pageSelected + whichWay;
      setPageSelected(thisWay);
    }
  };

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
      ? { flex: 1, opacity: 1, transition: { duration: 0.25, delay: 0.25 } }
      : { flex: 0, opacity: 1, transition: { duration: 0.25, delay: 0 } };
    //  ? { flex: 1, opacity: 1, transition: { duration: 2, delay: 2 } }
    // : { flex: 0, opacity: 1, transition: { duration: 2, delay: 0 } };
  };

  const tellBox = () => {
    return displayShowBox
      ? { flex: 0, transition: { duration: 0.25, delay: 0 } }
      : { flex: 1, transition: { duration: 0.25, delay: 0.25 } };
    // ?  { flex: 0, transition: { duration: 2, delay: 0 } }
    // : { flex: 1, transition: { duration: 2, delay: 2 } };
  };

  return (
    <>
      <TransitAnim>
        <div className="about-container" data-goOn={goClicked} ref={scope}>
          <div className="about-left-container" data-goOn={goClicked}>
            <div className="about-left-left"></div>
            <div className="about-left-middle" data-goOn={goClicked}>
              <AboutCircles
                goClicked={goClicked}
                animateMe={animateMe}
                pageSelected={pageSelected}
              />
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
                    <div className="about-detailed-nav">
                      <button
                        className="left-abt-arrow"
                        onClick={() => abtNav(-1)}
                      >
                        <img src={arrow} id="left-arrow-img" />
                      </button>
                      <button
                        className="right-abt-arrow"
                        onClick={() => abtNav(1)}
                      >
                        <img src={arrow} id="right-arrow-img" />
                      </button>
                    </div>
                    <motion.div
                      className="detailed-about-left"
                      initial={{ flex: 1 }}
                      animate={aboutLeftSpacing}
                    >
                      <motion.div
                        className="detailed-left-top"
                        initial={{ height: "var(--aboutTopSpacer)" }}
                        animate={aboutTopSpacing}
                      >
                        <AnimatePresence>
                          {pageSelected === 2 && (
                            <motion.div
                              className="about-content-left"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <ExperienceTop />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <motion.div
                        className="detailed-left-middle"
                        layout
                        initial={{ flex: 1 }}
                        animate={{ flex: 1 }}
                      >
                        <AnimatePresence>
                          {pageSelected === 0 && (
                            <motion.div
                              className="about-content-left"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <SkillsLeft />
                            </motion.div>
                          )}
                          {pageSelected === 1 && (
                            <motion.div
                              className="about-content-left"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <EducationLeft />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <motion.div
                        className="detailed-left-bottom"
                        initial={{ height: "var(--aboutBottomSpacer)" }}
                        animate={aboutBottomSpacing}
                      >
                        <AnimatePresence>
                          {pageSelected === 2 && (
                            <motion.div
                              className="about-content-left"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <ExperienceBottom />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                    <div className="detailed-about-middle">
                      <motion.div
                        className="detailed-spacer-top"
                        initial={{ height: "var(--aboutTopSpacer)" }}
                        animate={aboutTopSpacing}
                      ></motion.div>
                      <div className="detailed-middle-border"></div>
                      <motion.div
                        className="detailed-spacer-bottom"
                        initial={{ height: "var(--aboutBottomSpacer)" }}
                        animate={aboutBottomSpacing}
                      ></motion.div>
                    </div>
                    <motion.div
                      className="detailed-about-right"
                      initial={{ flex: 1 }}
                      animate={aboutRightSpacing}
                    >
                      <motion.div
                        className="detailed-right-top"
                        initial={{ height: "var(--aboutTopSpacer" }}
                        animate={aboutTopSpacing}
                      ></motion.div>
                      <div className="detailed-right-middle">
                        <AnimatePresence>
                          {pageSelected === 0 && (
                            <motion.div
                              className="about-content-right"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <SkillsRight />
                            </motion.div>
                          )}
                          {pageSelected === 1 && (
                            <motion.div
                              className="about-content-right"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <EducationCenter />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.div
                        className="detailed-right-bottom"
                        initial={{ height: "var(--aboutBottomSpacer" }}
                        animate={aboutBottomSpacing}
                      ></motion.div>
                    </motion.div>
                    <motion.div
                      className="detailed-optional-third"
                      initial={{ flex: 0 }}
                      animate={optionalThirdOnOff}
                    >
                      <motion.div
                        className="optional-third-top"
                        initial={{ height: "var(--aboutTopSpacer)" }}
                        animate={optionalThirdTop}
                      ></motion.div>
                      <div className="optional-third-middle-content">
                        <AnimatePresence>
                          {pageSelected === 1 && (
                            <>
                              <motion.div
                                className="content-third-spacer"
                                initial={{ height: "22%" }}
                                animate={{ height: "22%" }}
                                exit={{ height: "0%" }}
                                transition={{ duration: 0.25 }}
                              ></motion.div>
                              <motion.div
                                className="about-content-third"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                              >
                                <EducationRight />
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.div
                        className="optional-third-bot"
                        initial={{ height: "var(--aboutBottomSpacer)" }}
                        animate={optionalThirdBot}
                      ></motion.div>
                    </motion.div>
                  </div>

                  <div className="detailed-rightside-container">
                    <div className="icons-parent-container">
                      <div className="icon-spacer-top"></div>
                      <div className="icon-container">
                        <WoodworkingImg svgVariants={lightSvgVariants} />
                      </div>
                      <motion.div
                        className="icon-spacer-bottom"
                        initial={{ height: "5%" }}
                        animate={iconPlace}
                      ></motion.div>
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
