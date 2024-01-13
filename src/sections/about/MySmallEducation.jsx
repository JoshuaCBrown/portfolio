import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import EducationStructure from "./EducationStructure.jsx";

const MySmallEducation = ({ setSectionTitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    if (isInView === true) {
      setSectionTitle("Education");
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        className="smacc-container"
        id="smacc-education"
        key="smallEducation"
      >
        <h2 className="group-title">Education</h2>
        <EducationStructure contentSection="" />
        <EducationStructure contentSection="web" />
        <EducationStructure contentSection="books" />
      </div>
    </>
  );
};

export default MySmallEducation;
