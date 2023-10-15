import { useState } from "react";
import { motion } from "framer-motion";

function HomeShape({ cardClass, cardId, cardFront, cardBack }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const clickHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div>
        <motion.div
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

export default HomeShape;
