import MySmallEducation from "./MySmallEducation.jsx";
import MySmallInterests from "./MySmallInterests.jsx";
import MySmallSkills from "./MySmallSkills.jsx";
import MySmallStory from "./MySmallStory.jsx";

const SmallAbout = ({ setSectionTitle }) => {
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
