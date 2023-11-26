import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Interests from "./Interests.jsx";

import KeysImg from "../../assets/svgs/KeysImg.jsx";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import BenchyImg from "../../assets/svgs/BenchyImg.jsx";
import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";

import TransitAnim from "../../transit-routes/TransitAnim";

import "../../style/About.css";

const About = ({ themeStyle }) => {
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

  return (
    <>
      <TransitAnim>
        <div className="about-container">
          <div className="my-name-container">
            <div className="my-name-left"></div>
            <div className="my-name-middle">

              <div className="remaining-circles">
                <div className="photo-container">
                  <img src={phreshPhoto} className="fresh-foto" />
                </div>
                <div className="circle-design" id="circle-one"></div>
                <div className="circle-design" id="circle-two"></div>
                <div className="circle-design" id="circle-three"></div>
              </div>
            </div>
            <div className="my-name-right">
              <div className="introduction-yo">My name is Josh</div>
              <div className="not-introduction-yo"></div>
            </div>
          </div>
          <div className="intro-container">
            <div className="intro-top-container"></div>
            <div className="intro-mid-container">
              I enjoy problem solving and making things
            </div>
            <div className="intro-bottom-container"></div>
          </div>
          <div className="my-city-container">
            <div className="my-top-city"></div>
            <div className="my-middle-city">
              <div className="middle-city-left"></div>
              <div className="skyline-svg-container">
                <SkylineImg svgVariants={lightSvgVariants} />
              </div>
            </div>
            <div className="my-bottom-city">
              I live in Atlanta

            </div>

          </div>
          <div className="tilted-container"></div>
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
