import { useState } from "react";
import "../../style/Education.css";

import arrow from "../../assets/commonicons/arrow.png";
import { motion } from "framer-motion";
import EducationStructure from "./EducationStructure";

const EducationCenter = () => {

  return (
    <div className="education-container" id="education">
      <EducationStructure contentSection="center"/>
    </div>
  );
};

export default EducationCenter;
