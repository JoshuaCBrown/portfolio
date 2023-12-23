import AllSkills from "./AllSkills.jsx";
import AllInterests from "./AllInterests.jsx";
import Listerine from "./Listerine.jsx";
import MyNewStory from "./MyNewStory.jsx";
import MannyImg from "../../assets/svgs/MannyImg.jsx";


const SmallAbout = () => {
  const skillsArray = AllSkills();
  const interestsArray = AllInterests();
  return (
    <>
      <div className="smacc-container" id="smacc-story">
      <h2 className="group-title">About</h2>
        <MyNewStory />
      </div>
      <div className="smacc-container" id="smacc-skills">
      <h2 className="group-title">Skills</h2>
        {skillsArray.map((item) => (
          <>
            <Listerine listTitle={item.title} listClass={item.class} listId={item.id} listContent={item.content} />
          </>
        ))}
      </div>
      <div className="smacc-container" id="smacc-interests">
      <h2 className="group-title">Interests</h2>
        {interestsArray.map((item) => (
          <>
            <Listerine listTitle={item.title} listClass={item.class} listId={item.id} listContent={item.content} />
          </>
        ))}
      </div>
      <MannyImg />
    </>
  );
};

export default SmallAbout;
