import { useState } from "react";
import { motion } from "framer-motion";

function NavBtn({ cardClass, cardId, cardFront, cardBack }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const clickHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div>
        <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5, ease: "easeIn", delay: 1 }}
          className={cardClass}
          id={cardId}
          key={cardId}
          // initial={false}
          // onClick={() => clickHandler}
          // animate={{ rotateY: isFlipped ? 180 : 360 }}
          // transition={{ ease: "easeIn", duration: 0.5 }}
        >
          {cardFront}
        </motion.div>
      </div>
    </>
  );
}

export default NavBtn;
