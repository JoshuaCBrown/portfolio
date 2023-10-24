import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TitleReflector from "../TitleReflector";
import Sky from "../home-components/Sky";

const Connect = ({ themeStyle, reTitle }) => {
  useEffect(() => {
      reTitle("Connect");
    },
    []);
  return (
    <>
      <h1>hi</h1>
    </>
  );
};
export default Connect;