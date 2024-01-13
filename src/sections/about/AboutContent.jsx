import { motion } from "framer-motion";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../style/About.css";
import TextBlockShaper from "./TextBlockShaper";
const AboutContent = ({}) => {
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
    </>
  );
};
export default AboutContent;
