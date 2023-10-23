import { useState } from "react";
import { motion } from "framer-motion";
import NavBtn from "./NavBtn";
import CompImg from "../assets/svgs/CompImg.jsx";

import MannyImg from "../assets/svgs/MannyImg.jsx";
import "../style/NavImgs.css";

function NavImgs({ themeStyle }) {
  return (
    <>
      <div className="home-nav-container">
        <div className="home-nav" id="comp-nav">
          <div className="home-third">
            {themeStyle ? (
              <div className="svg-container" id="svg-comp-bg">
                <CompImg />
              </div>
            ) : (
              <></>
            )}
            <div className="svg-container" id="svg-comp-front">
              <CompImg />
            </div>
          </div>
        </div>

        <motion.div
          className="home-nav"
          id="cube-nav"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ ease: "circOut", duration: 2 }}
        >
          <div className="home-third">
            <div className="nav-btn-container">
              <NavBtn
                cardClass="nav-btn"
                cardId="about-nav"
                cardFront="About"
                cardBack=""
              />
              <NavBtn
                cardClass="nav-btn"
                cardId="portfolio-nav"
                cardFront="Portfolio"
                cardBack=""
              />
              <NavBtn
                cardClass="nav-btn"
                cardId="contact-nav"
                cardFront="Contact"
                cardBack=""
              />
              <motion.div
                initial={{ height: 0, width: 0 }}
                animate={{ height: "80%", width: "40%" }}
                transition={{ duration: 2 }}
                className="right-dashed"
              ></motion.div>
              <motion.div
                initial={{ height: 0, width: 0 }}
                animate={{ height: "50%", width: "20%" }}
                transition={{ duration: 2 }}
                className="left-dashed"
              ></motion.div>
            </div>
          </div>
        </motion.div>
        <div className="home-nav" id="manny-nav">
          <div className="home-third">
            {themeStyle ? (
              <div className="svg-container" id="svg-manny-bg">
                <MannyImg />
              </div>
            ) : (
              <></>
            )}
            <div className="svg-container" id="svg-manny-front">
              <MannyImg />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavImgs;
