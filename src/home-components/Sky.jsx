import NavImgs from "./NavImgs";
import { motion } from "framer-motion";
import "../style/Sky.css";
import AnimatedNav from "../transit-routes/AnimatedNav";
import NavHeader from "../NavHeader";
import AnimatedRoutes from "../transit-routes/AnimatedRoutes";

function Sky({ themeStyle, toggleTheme, loadedStatus }) {
  const lightVariants = {
    initial: {
      background:
        "linear-gradient(rgb(255, 255, 255) -300%, rgb(230, 230, 230) 0%, gray 100%)",
    },
    animate: {
      background:
        "linear-gradient(rgb(255, 255, 255) 0%, rgb(230, 230, 230) 100%, gray 300%)",
      transition: { duration: 2 },
    },
    transition: { transition: { duration: 2, ease: "circOut" } },
  };

  const darkVariants = {
    initial: {},
    animate: {},
    transition: {},
  };

  const variants = themeStyle ? darkVariants : lightVariants;
  return (
    <>
      {/* <NavHeader /> */}
      <div
        className="toggle-container"
        data-themeStyle={themeStyle}
        onClick={toggleTheme}
      >
        <motion.div
          className="toggle"
          layout
          transition={{ type: "tween", duration: 2 }}
        ></motion.div>
      </div>

      <motion.div
        className="sky"
        style={{
          background: "radial-gradient(at bottom, rgb(46, 46, 46), black)",
        }}
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        <div className="bgimg-container"></div>
        <div className="sky-container">
          <AnimatedRoutes themeStyle={themeStyle} loadedStatus={loadedStatus} />
          {/* <NavImgs themeStyle={themeStyle} /> */}
        </div>
      </motion.div>
    </>
  );
}

export default Sky;
