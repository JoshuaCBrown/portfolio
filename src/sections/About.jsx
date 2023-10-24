import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TitleReflector from "../TitleReflector";
import Sky from "../home-components/Sky";

const About = ({ themeStyle, reTitle }) => {
  useEffect(() => {
      reTitle("about");
    },
    []);
  return (
    <>
      <h1>hey</h1>
    </>
  );
};
export default About;
