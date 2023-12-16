import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/Ground.css";

function TitleReflector({
  category,
  themeStyle,
  lightVariants,
  titleVariants,
}) {
  const darkVariants = {
    initial: {
      transformPerspective: 2000,
      scaleY: 0.9,
      rotateX: 0,
      x: "100vw",
    },
    animate: {
      transformPerspective: 2000,
      scaleY: 0.9,
      rotateX: 0,
      x: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      transformPerspective: 2000,
      scaleY: 0.9,
      rotateX: 0,
      x: "-100vw",
      transition: { duration: 0.25 },
    },
    transition: { duration: 0, ease: "circOut" },
  };

  const variants = themeStyle ? darkVariants : lightVariants;

  return (
    <>
      {/* these are all children of .ground */}
      <div className="heading-container">
        <motion.div
          className="title-container"
          style={{ zIndex: 10 }}
          variants={titleVariants}
          initial="initial"
          animate={{ x: 0, transition: { duration: 0.25 } }}
          exit={{ x: "-100vw", transition: { duration: 0.25 } }}
        >
          <h1 className="title-text">{category}</h1>
        </motion.div>
        <motion.div
          className="title-texture-container"
          style={{ zIndex: 10 }}
          variants={titleVariants}
          initial="initial"
          animate={{ x: 0, transition: { duration: 0.25 } }}
          exit={{ x: "-100vw", transition: { duration: 0.25 } }}
        >
          <h1 className="title-texture">{category}</h1>
        </motion.div>

        <motion.div
          className="reflection-container"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
        >
          <h1 className="reflection-text">{category}</h1>
          {themeStyle ? (
            <>
              <h1 className="reflection-text-highlight">{category}</h1>
              <div className="reflection-cover"></div>
            </>
          ) : (
            <></>
          )}
          
        </motion.div>
      </div>
      
    </>
  );
}

export default TitleReflector;
