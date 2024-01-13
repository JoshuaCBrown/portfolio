import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStatic.jsx";

import { motion } from "framer-motion";

import "../../style/MiniAbout2.css";

const MiniAbout2 = ({ svgVariants }) => {
  return (
    <>
      {/* <WoodworkingImg svgVariants={svgVariants} /> */}
      <div className="small-about-container">
        <div className="sm-top-row">
          <div className="sm-top-row-left">
            {/* <div className="sm-photo-wrapper">
              <motion.img
                src={phreshPhoto}
                className="sm-fresh-photo"
                initial={{ filter: "blur(50px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 2 }}
              ></motion.img>
            </div> */}
          </div>
          <div className="sm-top-row-right">
            {/* <div className="sm-t-r-left"></div>
            <div className="sm-t-r-right"></div>
            <span className="sm-name-is">My name is Josh</span> */}
          </div>
        </div>
        <div className="sm-middle-row">
          <div className="sm-b-l-spacer">
            <div className="sm-m-left"></div>
            {/* <span className="sm-i-live">
              I live in <br />
              Atlanta <br />and problem solving
            </span> */}
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
          {/* <button className="sm-go-btn">Go</button>
          <button className="sm-go-btn">Skills</button>
          <button className="sm-go-btn">Experience</button>
          <button className="sm-go-btn">Education</button> */}
          {/* <button className="sm-go-btn">Interests</button>
          <button className="sm-go-btn">About</button>
          <button className="sm-go-btn">Portfolio</button>
          <button className="sm-go-btn">Contact</button> */}
        </div>
        <div className="fourth-row"></div>
      </div>
    </>
  );
};

export default MiniAbout2;
