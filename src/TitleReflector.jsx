import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style/Ground.css";

function TitleReflector({ category, themeStyle }) {

  const lightVariants = {
    initial: { transformPerspective: 150, scaleY: 0, rotateX: 0 },
    animate: { transformPerspective: 175, scaleY: 0.9, rotateX: 50, transition: {duration: 2} },
    transition: { duration: 0, ease: "circOut" }
  };

  const darkVariants = {
    initial: { transformPerspective: 2000, scaleY: 0.9, rotateX: 0 },
    animate: { transformPerspective: 2000, scaleY: 0.9, rotateX: 0 },
    exit: { transformPerspective: 150, scaleY: 0, rotateX: 0, transition: {duration: 0 }},
    transition: { duration: 0, ease: "circOut" },
  };

  const variants = themeStyle ? darkVariants : lightVariants;

  return (
    <>
      {/* these are all children of .ground */}
      <div className="heading-container">
        <motion.div
          className="title-container"
          style={{ zIndex: 1000 }}
          // initial={{ translateX: 2000 }}
          // animate={{ translateX: 0 }}
          // exit={{ translateX: -2000, transition: { duration: 2 } }}
          // transition={{ duration: 2 }}
        >
          <h1 className="title-text">{category}</h1>
        </motion.div>
        <motion.div
          className="title-texture-container"
          style={{ zIndex: 1000 }}
          initial={{ translateX: 2000 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: -2000, transition: { duration: 2 } }}
          transition={{ duration: 2 }}
        >
          <h1 className="title-texture">{category}</h1>
        </motion.div>

        <motion.div
          className="reflection-container"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          // exit={{ translateX: -2000, transition: { duration: 2 } }}
          // transition={{ duration: 2, ease: "circOut" }}
          // style={{zIndex: 0}}
          // initial={{ translateX: 2000 }}
          // animate={{ translateX: 0 }}
          // exit={{ translateX: -2000, transition: { duration: 2 } }}
          // transition={{ duration: 2 }}
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
        {/* </div> */}

        </motion.div>
      </div>
      {themeStyle ? (
        <>
          <div className="glass-reflection-two" style={{zIndex: 1 }}></div>
          <div className="glass-reflection" style={{zIndex: 2}}>
            <div className="reflection-blend"></div>
          </div>
        </>
      ) : (
        <div className="ground-color" style={{zIndex: 1}}></div>
      )}

      <div className="ground-texture" style={{zIndex: 4}}></div>
      {/* </motion.div> */}
    </>
  );
}

export default TitleReflector;
