import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
import "../style/About.css";

const About = ({ themeStyle, reTitle }) => {
  return (
    <>
      <TransitAnim>
        <div className="about-page-container">

          <div className="about-content-container">
            <p>
              My name is Josh Brown.<br /> I enjoy problem solving and making things. <br /> I am currently a business development representative for <br /> a company in Atlanta, GA, where I live with my girlfriend and our two dogs. <br />
              While I enjoy my current career in sales, my real passion lies in sales a;lskdjf;<br />a company in Atlanta, GA, where I live with my girlfriend and our two dogs. <br />
              While I enjoy my current career in sales, my real passion lies in <br /> programming, technology, and design. <br />
              heyooooooooo ok
            </p>
            <div className="about-box-container">
              <div className="about-box" id="education-box">
                <h3>Education</h3>
              </div>
              <div className="about-box" id="experience-box">
                <h3>Experience</h3>
              </div>
              <div className="about-box" id="skills-box">
                <h3>Skills</h3>
              </div>
              <div className="about-box" id="achievements-box">
                <h3>Achievements</h3>
              </div>
              <div className="about-box" id="interests-box">
                <h3>Interests</h3>
              </div>
            </div>
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default About;
