import { React } from "react";
import { motion } from "framer-motion";

const TransitAnim = ({ children }) => {
  return (
    <>
      <motion.div
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
