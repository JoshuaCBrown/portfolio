import { useState } from "react";
import "../../style/Education.css";

import arrow from "../../assets/commonicons/arrow.png";
import { motion } from "framer-motion";
import EducationStructure from "./EducationStructure";

const EducationRight = () => {

  return (
    <div className="education-container-web" id="education">
      <EducationStructure contentSection="web"/>
    </div>
  );
};

export default EducationRight;
