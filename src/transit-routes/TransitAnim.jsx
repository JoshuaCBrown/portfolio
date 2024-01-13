import { motion } from "framer-motion";
import { React } from "react";

const TransitAnim = ({ children }) => {
  return (
    <>
      <motion.div
        className="content-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0, transition: { duration: 0.25 } }}
        exit={{ x: "-100vw", transition: { duration: 0.25 } }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default TransitAnim;
