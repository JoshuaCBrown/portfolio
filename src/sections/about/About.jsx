import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import TransitAnim from "../../transit-routes/TransitAnim";

import TextBlockShaper from "./TextBlockShaper";

import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Interests from "./Interests.jsx";

import "../../style/About.css";

const About = ({ themeStyle }) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [catSelected, setCatSelected] = useState("");

  const clickHandler = (itemId) => {
    console.log("btn clicked");
    console.log(btnClicked);
    setBtnClicked(true);
    setCatSelected(itemId);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const abtNavBtns = [
    { id: "education-box", title: "Education", link: "about/education" },
    { id: "experience-box", title: "Experience", link: "about/experience" },
    { id: "skills-box", title: "Skills", link: "about/skills" },
    {
      id: "achievements-box",
      title: "Achievements",
      link: "about/achievements",
    },
    { id: "interests-box", title: "Interests", link: "about/interests" },
  ];

  return (
    <>
      <TransitAnim>
        <div className="about-page-container">
          <div className="about-content-container">
            {btnClicked ? (
              <></>
            ) : (
              <div className="about-summary">
                <TextBlockShaper />
              </div>
            )}
            {/* <MyComponent /> */}
            <div className="about-nav-container">
              <div className="left-spacer"></div>
              <nav>
                <ul className="about-nav" data-btnClicked={btnClicked}>
                  {abtNavBtns.map((item) => (
                    <motion.li
                      key={item.id}
                      className="about-box"
                      id={item.id}
                      onClick={() => clickHandler(item.id)}
                      initial={false}
                      layout
                    >
                      <h2>{item.title}</h2>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="right-spacer"></div>
            </div>
            <div className="about-cat-container">
              <AnimatePresence>
                <motion.div
                  className="about-cat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                >
                  {catSelected === "education-box" && <Education />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default About;
