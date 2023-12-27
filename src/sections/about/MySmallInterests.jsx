
import AllInterests from "./AllInterests.jsx";
import Listerine from "./Listerine.jsx";
import MyNewStory from "./MyNewStory.jsx";
import MySmallStory from "./MySmallInterests.jsx";
import MannyImg from "../../assets/svgs/MannyImg.jsx";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const MySmallInterests = ({ setSectionTitle }) => {
  const interestsArray = AllInterests();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: .8 });

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
        {interestsArray.map((item) => (
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
