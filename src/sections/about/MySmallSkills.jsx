import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { allSkills } from "./AllSkills.js";
import Listerine from "./Listerine.jsx";

const MySmallSkills = ({ setSectionTitle }) => {
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
        {allSkills.map((item) => (
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
