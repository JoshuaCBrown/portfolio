import AllSkills from "./AllSkills.jsx";
import Listerine from "./Listerine.jsx";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const MySmallSkills = ({ setSectionTitle }) => {
  const skillsArray = AllSkills();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView === true) {
      setSectionTitle("Skills");
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        className="smacc-container"
        id="smacc-skills"
        key="smallSkills"
      >
        <h2 className="group-title">Skills</h2>
        {skillsArray.map((item) => (
          <>
            <Listerine
              listTitle={item.title}
              listClass={item.class}
              listId={item.id}
              listContent={item.content}
            />
          </>
        ))}
      </div>
      
    </>
  );
};

export default MySmallSkills;
