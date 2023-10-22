import { useState } from "react";
import { motion } from "framer-motion";
import NavBtn from "./NavBtn";
import CompImg from "../assets/svgs/CompImg.jsx";
import CubeImg from "../assets/svgs/CubeImg.jsx";
import MannyImg from "../assets/svgs/MannyImg.jsx";
import "../style/NavImgs.css";

function NavImgs() {
  return (
    <>
      <div className="home-nav-container">
        <div className="home-nav" id="comp-nav">
          <div className="img-btn-container">
          <div className="svg-container">
            <CompImg />
          </div>
          
            <NavBtn
              cardClass="home-shape"
              cardId="shapeone"
              cardFront="About"
              cardBack="This is data"
            />
          </div>
        </div>

        <motion.div
          className="home-nav"
          id="cube-nav"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ ease: "circOut", duration: 2 }}
        >
          <div className="img-btn-container">
          <div className="svg-container">
            <CubeImg />
          </div>
          
            <NavBtn
              cardClass="home-shape"
              cardId="shapetwo"
              cardFront="Portfolio"
              cardBack="This is data"
            />
          </div>
        </motion.div>
        <div className="home-nav" id="manny-nav">
        <div className="img-btn-container">
          <div className="svg-container">
            <MannyImg />
          </div>
          
            <NavBtn
              cardClass="home-shape"
              cardId="shapethree"
              cardFront="Contact"
              cardBack="This is data"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavImgs;
