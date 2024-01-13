import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";

import TransitAnim from "../../transit-routes/TransitAnim.jsx";

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
            <div className="my-name-top-container">
              <div className="circle-container">
                <img src={phreshPhoto} className="fresh-foto" />
              </div>
              <div className="intro-name-container">
                <div className="introduction-yo">My name is Josh</div>
                <div className="not-introduction-yo"></div>
              </div>
            </div>
            <div className="my-name-bottom-container"></div>
          </div>
          <div className="intro-container">
            <div className="intro-top-container"></div>
            <div className="intro-mid-container">
              I enjoy problem solving and making things from nothing.
            </div>
            <div className="intro-bottom-container"></div>
          </div>
          <div className="my-city-container">
            <div className="my-top-city"></div>
            <div className="my-middle-city"></div>
            <div className="my-bottom-city">
              <div className="skyline-svg">
                <SkylineImg svgVariants={lightSvgVariants} />
              </div>
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
