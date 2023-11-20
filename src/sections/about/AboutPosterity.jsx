import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
    { id: "education-box", title: "Education", link: "#education" },
    { id: "experience-box", title: "Experience", link: "#experience" },
    { id: "skills-box", title: "Skills", link: "#skills" },
    {
      id: "achievements-box",
      title: "Achievements",
      link: "#achievements",
    },
    { id: "interests-box", title: "Interests", link: "#interests" },
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
                      className="about-box-li"
                      
                      onClick={() => clickHandler(item.id)}
                      initial={false}
                      layout
                    >
                      <HashLink smooth to={item.link}>
                        <div className="about-box" id={item.id}>
                          <h2>{item.title}</h2>
                        </div>
                      </HashLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="right-spacer"></div>
            </div>

            {btnClicked ? (
              <div className="about-cat-container">
                <AnimatePresence>
                  <motion.div
                    className="about-cat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2 } }}
                    transition={{ duration: 2 }}
                  >
                    <Education />
                    <Experience />
                    <Skills />
                    <Achievements />
                    <Interests />
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default About;


<div className="intro">My name is Josh</div>
<div className="intro-two">
  
  I enjoy problem-solving and making things
  <p>I live in Atlanta, and currently work in sales for a company that provides technology to largescale construction projects all over the world.</p>
  <p>I spend a lot of my time creating. Some of my hobbies include</p>
  <p>Becoming a programmer has been a lifelong goal of mine. While I am relatively new to coding, I have always had a strong passion for technology and computing. At the beginning of 2023, I was looking to make a career change from my previous role as an independent audio engineer and producer. While I enjoyed my work, as music has been a lifelong passion of mine, I was looking to get into something with more stability and room to grow. I was accepted into a program called Stiegler EdTech, which is similar to a coding bootcamp, except that it is free, and students are paid a stipend during the 6-month duration of the program and are guaranteed a job upon graduation. Unlike other profit-share bootcamps, graduates were not required to pay back the stipend, nor were they required to stay with their placement company for any period of time. The nature of this type of program made it highly competitive, however I performed well and was ecstatic to be accepted into the program. Unfortunately, due to the economic uncertainty unfolding during this time, the Atlanta cohort was delayed indefinitely. I was given the option to relocate to Detroit, Michigan to participate in their cohort but chose to remain close to my family and loved ones here in Atlanta.   
    </p>
    <p>
      The application to apply to that program involved a multi-stage application and interview process, involving lengthy aptitude tests, logic puzzles, and critical thinking exercises desigend to test applicants on their future potential as a programmer. While I was undoubtedly disappointed the program did not work out, my acceptance into Stiegler gave me the assurance that this type of career could be something that I not only enjoyed, but excelled at. At that, I began learning to code in my freetime, using a mix of internet resources (namely The Odin Project and Free Code Camp) and several books. 
    </p>
</div>