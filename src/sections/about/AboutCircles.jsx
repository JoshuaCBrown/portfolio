import { motion } from "framer-motion";
import phreshPhoto from "../../assets/about-photos/fresh-foto2.jpg";

const AboutCircles = ({ goClicked, animateMe, pageSelected }) => {
  function circleSize(circleNum) {
    const difference = circleNum - pageSelected;
    const absoluteDif = Math.abs(difference);
    if (absoluteDif === 0) {
      return "selected";
    } else if (absoluteDif === 1) {
      return "one-off";
    } else if (absoluteDif === 2) {
      return "two-off";
    } else {
      return "three-off";
    }
  }

  return (
    <div
      className="about-circles-container"
      data-goOn={goClicked}
      data-pageSelected={pageSelected}
    >
      {/* <p>{circleSize(0)}</p>
      <p>{circleSize(1)}</p>
      <p>{circleSize(2)}</p>
      <p>{circleSize(3)}</p> */}
      <motion.div
        className="photo-container circle-group"
        id={circleSize(0)}
        data-animMe={animateMe}
        layout
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="photo-shaper">
          {goClicked ? (
            // <motion.div layout="position" className="circle-text">Sk</motion.div>
            <></>
          ) : (
            <>
              <img src={phreshPhoto} className="fresh-foto" />
              <div className="photo-border-reveal"></div>
            </>
          )}
        </div>
        <div className="photo-container-dashes" data-goOn={goClicked}></div>
      </motion.div>

      <motion.div
        className="circle-design circle-group"
        id={circleSize(1)}
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
      >
        <div className="black-nav-circle"></div>
      </motion.div>
      <motion.div
        className="circle-design circle-group"
        id={circleSize(2)}
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
      >
        <div className="black-nav-circle"></div>
      </motion.div>
      <motion.div
        className="circle-design circle-group"
        id={circleSize(3)}
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
      >
        <div className="black-nav-circle"></div>
      </motion.div>
    </div>
  );
};

export default AboutCircles;
