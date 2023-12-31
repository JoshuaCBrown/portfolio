import "../../style/Skills.css";
import visualImg from "../../assets/icons/eye2.png";
import Listerine from "./Listerine";
import { allSkills } from "./AllSkills";

const SkillsRight = () => {


  return (
    <>
        <div className="large-about-container" id="skills-right">
          <div className="skills-content-container">
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
