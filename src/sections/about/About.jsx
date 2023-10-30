import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import TransitAnim from "../../transit-routes/TransitAnim";
import "../../style/About.css";
import TextBlockShaper from "./TextBlockShaper";
import MyComponent from "./Test";
const About = ({ themeStyle }) => {
  const [btnClicked, setBtnClicked] = useState(false);

  const clickHandler = (itemId) => {
    console.log("btn clicked");
    console.log(btnClicked);
    setBtnClicked(true);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const abtNavBtns = [
    { id: "education-box", title: "Education", link: "education" },
    { id: "experience-box", title: "Experience", link: "experience" },
    { id: "skills-box", title: "Skills", link: "skills" },
    { id: "achievements-box", title: "Achievements", link: "achievements" },
    { id: "interests-box", title: "Interests", link: "interests" },
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
                    <Link to={item.link}>
                    <motion.li
                      key={item.id}
                      className="about-box"
                      id={item.id}
                      onClick={() => clickHandler(item.id)}
                      layout
                    >
                      
                        <h2>{item.title}</h2>
                      
                    </motion.li>
                    </Link>
                  ))}
                </ul>
              </nav>
              <div className="right-spacer"></div>
            </div>
            <Outlet />
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default About;
