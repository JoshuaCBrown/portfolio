import AllSkills from "./AllSkills.jsx";
import AllInterests from "./AllInterests.jsx";

import Listerine from "./Listerine.jsx";
import MyNewStory from "./MyNewStory.jsx";
import MySmallInterests from "./MySmallInterests.jsx";
import MySmallSkills from "./MySmallSkills.jsx";
import MySmallStory from "./MySmallStory.jsx";
import MySmallEducation from "./MySmallEducation.jsx";
import MannyImg from "../../assets/svgs/MannyImg.jsx";

const SmallAbout = ({ setSectionTitle }) => {
  const skillsArray = AllSkills();
  const interestsArray = AllInterests();


  return (
    <>
      <MySmallStory setSectionTitle={setSectionTitle} />
      <MySmallSkills setSectionTitle={setSectionTitle} />
      <MySmallInterests setSectionTitle={setSectionTitle} />
      <MySmallEducation setSectionTitle={setSectionTitle} />
    </>
  );
};

export default SmallAbout;
