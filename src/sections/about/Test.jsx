import { motion } from "framer-motion";
import React, { useState } from "react";

const MyComponent = () => {
  const [isColumn, setIsColumn] = useState(true);

  const toggleFlexDirection = () => {
    setIsColumn(!isColumn);
  };

  return (
    <div>
      <button onClick={toggleFlexDirection}>Toggle Flex Direction</button>
      <motion.div
        style={
          isColumn ? { flexDirection: "column" } : { flexDirection: "row" }
        }
        initial={
          isColumn ? { flexDirection: "column" } : { flexDirection: "row" }
        }
        animate={
          isColumn ? { flexDirection: "row" } : { flexDirection: "column" }
        }
        transition={{ duration: 0.5 }}
      >
        <motion.h1 layout>hey</motion.h1>
        <motion.h1 layout>hey</motion.h1>
        <motion.h1 layout>hey</motion.h1>
      </motion.div>
    </div>
  );
};

export default MyComponent;
