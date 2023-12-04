import "../../style/Skills.css";
import visualImg from "../../assets/icons/eye2.png";

const SkillsBlackRight = () => {
  const codeSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Vite",
    "Node",
    "Express",
    "Git",
    "Linux",
    "RESTful APIs",
    "MongoDB",
    "PassportJS",
    "Framer-Motion",
  ];
  const audioSkills = [
    "FL Studio",
    "Ableton Live",
    "Mixing",
    "Mastering",
    "Recording",
    "Sound Design",
    "Acoustic Treatment",
    "Audio Editing",
    "Acoustic science",
    "Audio production",
    "Music composition",
    "Gig Performer from Deskew",
  ];

  const visualSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere",
    "Adobe After Effects",
    "Adobe Lightroom",
    "Figma",
    "Graphic Design",
    "Photo Editing",
    "Projection Mapping",
    "Canva",
    "tinkercad",
  ];

  const businessSkills = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere",
    "Adobe After Effects",
    "Adobe Lightroom",
    "Figma",
    "Graphic Design",
    "Photo Editing",
    "Projection Mapping",
    "Canva",
  ];

  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills-content-container-black">
          <div className="skills-heading">
            <h2 className="skill-title" id="code-title">Code</h2>
          </div>
          <div className="skills-list-container">
          </div>
          <div className="skills-heading-bottom">
            <h2 className="skill-title">Visual</h2>
          </div>
          <div className="skills-list-container-bottom">
          </div>
          {/* <div className="skills-sidebar">
                <img src={visualImg} />
              </div>
            </div>
            <div className="skills-content" id="visual-skills-content">
              <ul
                className="skills-content-list"
                id="visual-skills-content-list"
              >
                {visualSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
              <div className="skills-icon" id="visual-skills-icon">
                <h2 className="text-skill-icon">visual</h2>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SkillsBlackRight;
