import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import SkylineImgBgStatic from "../../assets/svgs/SkylineImgBgStatic.jsx";

import { motion } from "framer-motion";

import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";

import "../../style/AboutSmall.css";

const AboutSmall = ({ svgVariants }) => {
  return (
    <>
      <div className="small-about-container">
        <div className="sm-top-row">
          <div className="sm-top-row-left">
            <div className="sm-photo-wrapper">
              <motion.img
                src={phreshPhoto}
                className="sm-fresh-photo"
                initial={{ filter: "blur(50px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 2 }}
              ></motion.img>
            </div>
          </div>
          <div className="sm-top-row-right">
            <div className="sm-t-r-left"></div>
            <div className="sm-t-r-right"></div>
            <span className="sm-name-is">My name's Josh</span>
          </div>
        </div>
        <div className="sm-middle-row">
          <button className="sm-go-btn">Go</button>
        </div>
        <div className="sm-bottom-row">
          <span className="sm-i-live">I live in Atlanta</span>
          <div className="sm-b-l-spacer">
            <div className="u-r-quad"></div>
            <div className="l-r-quad"></div>
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
      </div>
    </>
  );
};

export default AboutSmall;
