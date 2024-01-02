import "../../style/AboutDetail.css";
import visualImg from "../../assets/icons/eye2.png";
import Listerine from "./Listerine";
import { allSkills } from "./AllSkills";

const SkillsRight = () => {


  return (
    <>
        <div className="large-about-container" id="skills-right">
          <div className="lg-about-content">
            <h2 className="lg-about-heading">Skills</h2>
            {allSkills.map((item) => (
              <Listerine
                listTitle={item.title}
                listClass={item.class}
                listId={item.id}
                listContent={item.content}
              />
            ))}
          </div>
        </div>
    </>
  );
};

export default SkillsRight;
