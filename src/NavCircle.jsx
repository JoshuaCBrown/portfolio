import { useState } from "react";
import { motion } from "framer-motion";

function NavCircle({ circleId, circleTitle }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <>
      <motion.div
        className="nav-circle"
        id={circleId}
        key={circleId}
        initial={false}
        whileHover={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        {circleTitle}
      </motion.div>
    </>
  );
}

export default NavCircle;
