import { motion } from "framer-motion";

function TitleReflector({ themeStyle }) {

  const lightVariants = {
    initial: { transformPerspective: 150, scaleY: 0, rotateX: 0 },
    animate: {transformPerspective: 150, scaleY: .9, rotateX: 50 },
    transition: {duration: 2, ease: "circOut"},
  };

  const darkVariants = {
    initial: { transformPerspective: 150, scaleY: 0.9, rotateX: 1 },
    animate: { transformPerspective: 150, scaleY: 0.9, rotateX: 1 },
    transition: {duration: 2, ease: "circOut"},
  };

  const variants = themeStyle ? darkVariants : lightVariants;

  return (
    <>
      {/* these are all children of .ground */}
      <div className="heading-container">
        <div className="title-container">
          <h1 className="title-text">JoshbrownDESIGN</h1>
        </div>
        {/* <motion.div
        className="reflection-container"
        initial={{ transformPerspective: 150, scaleY: 0, rotateX: 0 }}
        animate={{ transformPerspective: 150, scaleY: .9, rotateX: 50 }}
        transition={{ duration: 2, ease: "circOut" }}
      > */}
        <motion.div
          className="reflection-container"
          style={{ transformPerspective: 150, scaleY: 0.9, rotateX: 1 }}
          // animate={{ transformPerspective: 500, scaleY: 0.9, rotateX: 1 }}
          // transition={{ duration: 2, ease: "circOut" }}
        >
        {/* <motion.div 
        className="reflection-container"
        variants={variants}
        initial="initial"
        animate="animate"
        transition="transition"
        > */}
          <motion.h1
            className="reflection-text"
            // style={{ rotateX: 90 }}
            // animate={{ transformPerspective: 300, rotateX: 20 }}
            // transition={{ duration: 2 }}
          >
            JoshbrownDESIGN
          </motion.h1>
          <div className="gradient-reflection"></div>
          <div className="reflection-cover"></div>
        </motion.div>
      </div>
      <div className="glass-reflection-two"></div>
      <div className="glass-reflection">
        <div className="reflection-blend"></div>
      </div>
    </>
  );
}

export default TitleReflector;


// DEFAULT THIS WORKS

import { motion } from "framer-motion";

function TitleReflector() {
  return (
    <>
    {/* these are all children of .ground */}
    <div className="heading-container">
      <div className="title-container">
        <h1 className="title-text">JoshbrownDESIGN</h1>
      </div>
      {/* <motion.div
        className="reflection-container"
        style={{ transformPerspective: 150, scaleY: 0, rotateX: 0 }}
        animate={{ transformPerspective: 150, scaleY: .9, rotateX: 50 }}
        transition={{ duration: 2, ease: "circOut" }}
      > */}
      <motion.div
        className="reflection-container"
        style={{ transformPerspective: 150, scaleY: 0.9, rotateX: 1 }}
        // animate={{ transformPerspective: 500, scaleY: 0.9, rotateX: 1 }}
        // transition={{ duration: 2, ease: "circOut" }}
      >
        
        <motion.h1
          className="reflection-text"
          // style={{ rotateX: 90 }}
          // animate={{ transformPerspective: 300, rotateX: 20 }}
          // transition={{ duration: 2 }}
        >
          JoshbrownDESIGN
        </motion.h1>
        <div className="gradient-reflection">
        </div>
        <div className="reflection-cover">
          
        </div>
      </motion.div>
    </div>
    <div className="glass-reflection-two"></div>
    <div className="glass-reflection">
      <div className="reflection-blend"></div>
    </div>
    </>
  );
}

export default TitleReflector;
