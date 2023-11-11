import "../../style/Skills.css";

const Skills = () => {
  const codeSkills = [
    "HTML",
    "CSS",
    "Javascript (ES6+)",
    "React",
    "Vite",
    "Node",
    "Express",
    "Git",
    "Linux",
    "RESTful APIs",
    "MongoDB",
    "Mongoose",
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
        <h2 className="about-section-heading" id="skills-section-heading">
          Skills
        </h2>
        <div className="skills-content-container">
          <div className="skills-section" id="code-skills">
            <h3 className="skills-heading" id="code-heading">
              Code
            </h3>
            <ul className="skills-content" id="code-skills-content">
              {codeSkills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills-section" id="visual-audio-skills">
            <div id="visual-skills">
              <h3 className="skills-heading">Visual</h3>
              <ul className="skills-content" id="visual-skills-content">
                {visualSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
            <div id="audio-skills">
              <h3 className="skills-heading">Audio</h3>
              <ul className="skills-content" id="audio-skills-content">
                {audioSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skills-section" id="business-skills">
            <h3 className="skills-heading">Business</h3>
            <ul className="skills-content" id="business-skills-content">
                {businessSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
