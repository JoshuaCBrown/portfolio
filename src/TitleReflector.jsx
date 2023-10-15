import { motion } from "framer-motion";

function TitleReflector({ category, themeStyle }) {
  const lightVariants = {
    initial: { transformPerspective: 150, scaleY: 0, rotateX: 0 },
    animate: { transformPerspective: 175, scaleY: 0.9, rotateX: 50 },
    transition: { duration: 2, ease: "circOut" },
  };

  const darkVariants = {
    initial: { transformPerspective: 2000, scaleY: 0.9, rotateX: 0 },
    animate: { transformPerspective: 2000, scaleY: 0.9, rotateX: 0 },
    transition: { duration: 2, ease: "circOut" },
  };

  const variants = themeStyle ? darkVariants : lightVariants;

  return (
    <>
      {/* these are all children of .ground */}
      <div className="heading-container">
        <div className="title-container">
          <h1 className="title-text">Joshbrown{category}</h1>
        </div>
        <motion.div
          className="reflection-container"
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 2, ease: "circOut" }}
        >
          <h1 className="reflection-text">Joshbrown{category}</h1>
          {themeStyle ? (
            <>
              <h1 className="reflection-text-highlight">Joshbrown{category}</h1>
              <div className="reflection-cover"></div>
            </>
          ) : (
            ""
          )}
          {/* <div className="gradient-reflection"></div> */}
        </motion.div>
      </div>
      {themeStyle ? (
        <>
          <div className="glass-reflection-two"></div>
          <div className="glass-reflection">
            <div className="reflection-blend"></div>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="ground-texture"></div>
    </>
  );
}

export default TitleReflector;
