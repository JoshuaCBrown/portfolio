import NavCircles from "./NavCircles";
import { motion } from "framer-motion";

function LightSky() {
  return (
    <>
      <motion.div
        className="sky"
        initial={{
          background:
            "linear-gradient(rgb(255, 255, 255) -300%, rgb(236, 236, 236) 0%, gray 100%)",
        }}
        animate={{
          background:
            "linear-gradient(rgb(255, 255, 255) 0%, rgb(236, 236, 236) 100%, gray 300%)",
        }}
        transition={{ duration: 2, ease: "circOut" }}
      >
        <NavCircles />
      </motion.div>
    </>
  );
}

export default LightSky;
