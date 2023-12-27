import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import MyNewStory from "./MyNewStory.jsx";

const MySmallStory = ({ setSectionTitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: .8 });

  useEffect(() => {
    if (isInView === true) {
      setSectionTitle("About Me");
    }
  }, [isInView]);

  return (
    <>
      <div ref={ref} className="smacc-container" id="smacc-story" key="smallStory" >
        <h2 className="group-title">About</h2>
        <MyNewStory />
      </div>
    </>
  );
};

export default MySmallStory;
