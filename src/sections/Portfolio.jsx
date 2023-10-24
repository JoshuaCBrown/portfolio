import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TitleReflector from "../TitleReflector";
import Sky from "../home-components/Sky";

const Portfolio = ({ themeStyle, reTitle }) => {
  useEffect(() => {
      reTitle("Portfolio");
    },
    []);
  return (
    <>
      <h1>hi</h1>
    </>
  );
};
export default Portfolio;