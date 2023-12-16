import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function NavBtn({ cardClass, cardId, cardFront, cardLink }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const clickHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div id={`${cardId}-div`} className="nav-btn-div">
        <Link to={cardLink}>
          <motion.div
            // initial={{ y: -1000 }}
            // animate={{ y: 0 }}
            // transition={{ duration: 0.25, ease: "easeIn", delay: 0 }}
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
        </Link>
      </div>
    </>
  );
}

export default NavBtn;
