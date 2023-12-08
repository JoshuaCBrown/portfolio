import "../../style/Skills.css";
import visualImg from "../../assets/icons/eye2.png";

const SkillsRight = () => {
  const codeSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Node",
    "Express",
    "Git",
    "GitHub",
    "MongoDB",
  ];

  const generalSkills = [
    "Microsoft Office Suite",
    "Google Office Suite",
    "HubSpot",
    "Windows",
    "Linux",
  ];

  return (
    <>
        <div className="skills-container" id="skills-right">
          <div className="skills-content-container">
            <div className="skill-group" id="skills-group-code">
              <div className="skills-heading">
                <h2 className="skill-title" id="code-title">
                  Code
                </h2>
              </div>
              <div className="skills-list-container" id="code-list-container">
                <div className="skills-list" id="code-skills-list">
                  {codeSkills.join(" | ")}
                </div>
              </div>
            </div>
            <div className="skill-group" id="skills-group-general">
              <div className="skills-heading">
                <h2 className="skill-title" id="general-title">
                  General
                </h2>
              </div>
              <div
                className="skills-list-container"
                id="general-list-container"
              >
                <div className="skills-list" id="general-skills-list">
                  {generalSkills.join(" | ")}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default SkillsRight;
