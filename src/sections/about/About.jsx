import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Interests from "./Interests.jsx";

import KeysImg from "../../assets/svgs/KeysImg.jsx";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import BenchyImg from "../../assets/svgs/BenchyImg.jsx";

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
      <div className="about-container">
        <Skills />
        {/* <Education /> */}
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
        )}
      </div>
    </>
  );
};

export default About;
