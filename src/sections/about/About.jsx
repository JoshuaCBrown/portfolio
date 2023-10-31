import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import TransitAnim from "../../transit-routes/TransitAnim";
import "../../style/About.css";
import TextBlockShaper from "./TextBlockShaper";
import MyComponent from "./Test";
import AboutContent from "./AboutContent";
const About = ({ themeStyle }) => {

  return (
    <>
      <TransitAnim>
        <AboutContent />
      </TransitAnim>
    </>
  );
};
export default About;
