import arrow from "../../assets/commonicons/arrow.png";
import { motion } from "framer-motion";
const FlashingArrows = ({ delayMulti }) => {

  const animDelay = () => {
    const delayedVal = delayMulti * .15;
    const fullDelay = 2 + delayedVal;
    return fullDelay;
  };

  return (
    <>
      <motion.div
        className="go-arrow-wrapper"
        key={`go-arrow-${delayMulti}`}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1, delay: animDelay(), repeat: Infinity }}
      >
        <img className="go-btn-arrow" src={arrow} />
      </motion.div>
    </>
  );
};
export default FlashingArrows;
