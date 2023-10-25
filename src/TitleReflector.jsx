import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TitleReflector({ category, themeStyle }) {
  const lightVariants = {
    initial: { transformPerspective: 150, scaleY: 0, rotateX: 0 },
    animate: { transformPerspective: 175, scaleY: 0.9, rotateX: 50 },
    exit: { x: -500, transition: { duration: 0.25 } },
    transition: { duration: 2, ease: "circOut" },
  };

  const darkVariants = {
    initial: { transformPerspective: 2000, scaleY: 0.9, rotateX: 0 },
    animate: { transformPerspective: 2000, scaleY: 0.9, rotateX: 0 },
    transition: { duration: 0, ease: "circOut" },
  };

  const variants = themeStyle ? darkVariants : lightVariants;

  return (
    <>
      {/* these are all children of .ground */}
      <div className="heading-container">
      
        <motion.div className="title-container" style={{ zIndex: 1000 }}
            initial={{ translateX: 2000 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -2000, transition: { duration: 2 } }}
            transition={{ duration: 2 }}
            >
          <h1 className="title-text">{category}</h1>
        </motion.div>
        <div className="title-texture-container">
          <h1 className="title-texture">{category}</h1>
        </div>

        <motion.div
          className="reflection-container"
          variants={variants}
          initial="initial"
          animate="animate"
          exit={{ translateX: -2000, transition: {duration: 2 } }}
          transition={{ duration: 2, ease: "circOut" }}
        >
          <h1 className="reflection-text">{category}</h1>
          {themeStyle ? (
            <>
              <h1 className="reflection-text-highlight">{category}</h1>
              <div className="reflection-cover"></div>
            </>
          ) : (
            ""
          )}
        </motion.div>
        
      {/* </motion.div> */}
      </div>
      {themeStyle ? (
        <>
          <div className="glass-reflection-two"></div>
          <div className="glass-reflection">
            <div className="reflection-blend"></div>
          </div>
        </>
      ) : (
        <div className="ground-color"></div>
      )}

      <div className="ground-texture"></div>
    </>
  );
}

export default TitleReflector;
