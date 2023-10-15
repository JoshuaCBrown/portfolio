import { useState } from "react";
import { motion } from "framer-motion";
import HomeShape from "./HomeShape";

function HomeShapes() {
  return (
    <>
      <motion.div
        className="home-shapes"
        initial={{ y: -500 }}
        animate={{ y: 25 }}
        transition={{ ease: "circOut", duration: 2 }}
      >
        <HomeShape
          cardClass="home-shape"
          cardId="shapeone"
          cardFront="About"
          cardBack="This is data"
        />
        <HomeShape
          cardClass="home-shape"
          cardId="shapetwo"
          cardFront="Portfolio"
          cardBack="This is data"
        />
        <HomeShape
          cardClass="home-shape"
          cardId="shapethree"
          cardFront="Contact"
          cardBack="This is data"
        />
      </motion.div>
    </>
  );
}

export default HomeShapes;
