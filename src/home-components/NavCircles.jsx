import { useState } from "react";
import { motion } from "framer-motion";
import NavCircle from "./NavCircle";

function NavCircles() {
  return (
    <>
      <motion.div
        className="nav-circles"
        initial={{ y: -500 }}
        animate={{ y: 25 }}
        transition={{ ease: "circOut", duration: 2 }}
      >
        <NavCircle
          cardClass="nav-circle"
          cardId="circleone"
          cardFront="About"
          cardBack="This is data"
        />
        <NavCircle
          cardClass="nav-circle"
          cardId="circletwo"
          cardFront="Portfolio"
          cardBack="This is data"
        />
        <NavCircle
          cardClass="nav-circle"
          cardId="circlethree"
          cardFront="Contact"
          cardBack="This is data"
        />
      </motion.div>
    </>
  );
}

export default NavCircles;
