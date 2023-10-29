import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
import "../../style/About.css";
import TextBlockShaper from "./TextBlockShaper";

const About = ({ themeStyle, reTitle }) => {
  return (
    <>
      <TransitAnim>
        <div className="about-page-container">
          <div className="about-content-container">
            <div className="about-summary">
              <TextBlockShaper />
            </div>
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
