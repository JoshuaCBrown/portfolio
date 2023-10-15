import NavCircles from "./HomeShapes";
import { motion } from "framer-motion";

function Sky({ themeStyle, toggleTheme }) {
  const lightVariants = {
    initial: {
      background:
        "linear-gradient(rgb(255, 255, 255) -300%, rgb(230, 230, 230) 0%, gray 100%)",
    },
    animate: {
      background:
        "linear-gradient(rgb(255, 255, 255) 0%, rgb(230, 230, 230) 100%, gray 300%)",
      transition: { duration: 2 }
    },
    transition: { transition: { duration: 2, ease: "circOut" }},
  };

  const darkVariants = {
    initial: {},
    animate: {},
    transition: {},
  };

  const variants = themeStyle ? darkVariants : lightVariants;
  return (
    <>
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
        <div className="sky-container"><NavCircles /></div>
      </motion.div>
    </>
  );
}

export default Sky;
