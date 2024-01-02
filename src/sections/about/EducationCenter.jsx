import { useState } from "react";
import "../../style/Education.css";

import arrow from "../../assets/commonicons/arrow.png";
import { motion } from "framer-motion";
import EducationStructure from "./EducationStructure";

const EducationCenter = () => {

  return (
    <div className="large-about-container" id="education-center">
      <EducationStructure contentSection="books"/>
    </div>
  );
};

export default EducationCenter;
