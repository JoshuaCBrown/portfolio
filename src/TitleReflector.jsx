import { motion } from "framer-motion";

function TitleReflector() {
  return (
    <div className="heading-container">
      <div className="text-container">
        <h1 className="title-text">JoshbrownDESIGN</h1>
      </div>
      <motion.div
        className="reflection-container"
        style={{ transformPerspective: 150, scaleY: 0, rotateX: 0 }}
        animate={{ transformPerspective: 150, scaleY: .9, rotateX: 50 }}
        transition={{ duration: 2, ease: "circOut" }}
      >
        <motion.h1
          className="reflection-text"
          // style={{ rotateX: 90 }}
          // animate={{ transformPerspective: 300, rotateX: 20 }}
          // transition={{ duration: 2 }}
        >
          JoshbrownDESIGN
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default TitleReflector;
