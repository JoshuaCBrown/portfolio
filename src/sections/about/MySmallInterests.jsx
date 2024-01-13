import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { allInterestsArray } from "./AllInterests.js";
import Listerine from "./Listerine.jsx";

const MySmallInterests = ({ setSectionTitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  useEffect(() => {
    if (isInView === true) {
      setSectionTitle("Interests");
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        className="smacc-container"
        id="smacc-interests"
        key="smallInterests"
      >
        <h2 className="group-title">Interests</h2>
        {allInterestsArray.map((item) => (
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

export default MySmallInterests;
