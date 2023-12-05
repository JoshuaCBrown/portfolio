import "../../style/Skills.css";
import visualImg from "../../assets/icons/eye2.png";

const SkillsLeft = () => {
  const audioSkills = [
    "FL Studio",
    "Ableton Live",
    "Audacity",
    "Gig Performer from Deskew",
    "Melodyne",
    "Izotope Suite",
    "Room EQ Wizard",
  ];

  const visualSkills = [
    "Photoshop",
    "Illustrator",
    "Premiere",
    "After Effects",
    "Lightroom",
    "Figma",
    "Canva",
    "Tinkercad",
  ];

  return (
    <>
      <div className="skills-container" id="skills-left">
        <div className="skills-content-container" id="skills-left">
          <div className="skill-group" id="skills-group-visual">
            <div className="skills-heading">
              <h2 className="skill-title" id="visual-title">
                Visual
              </h2>
            </div>
            <div className="skills-list-container" id="visual-list-container">
              <div className="skills-list" id="visual-skills-list">
                {visualSkills.join(" | ")}
              </div>
            </div>
          </div>
          <div className="skill-group" id="skills-group-audio">
            <div className="skills-heading">
              <h2 className="skill-title" id="audio-title">
                Audio
              </h2>
            </div>
            <div className="skills-list-container" id="audio-list-container">
              <div className="skills-list" id="audio-skills-list">
                {audioSkills.join(" | ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsLeft;
