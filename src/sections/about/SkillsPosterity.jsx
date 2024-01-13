import "../../style/Skills.css";

const Skills = () => {
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
        {/* <h2 className="about-section-heading" id="skills-section-heading">
          Skills
        </h2> */}
        <div className="skills-content-container">
          {/* <div className="skills-section" id="code-skills">
            <div className="skills-content" id="code-skills-content">
              <div className="skills-icon" id="code-skills-icon">
                <span className='text-skill-icon'>&#60;/&#62;</span>
              </div>
              <ul className="skills-content-list" id="code-skills-content-list">
                {codeSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skills-heading">
              <h3 id="code-heading">Code</h3>
            </div>
          </div> */}
          <div className="skills-section" id="visual-skills">
            <div className="skills-heading">
              <h3 id="visual-heading">Visual</h3>
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
                <span className="text-skill-icon">&#60;/&#62;</span>
              </div>
            </div>

            {/* <h3 className="skills-heading">Audio</h3>
              <ul className="skills-content" id="audio-skills-content">
                {audioSkills.map((skill) => (
                  <li>{skill}</li>
                ))}
              </ul> */}
          </div>
          {/* <div className="skills-section" id="business-skills">
            <h3 className="skills-heading">Business</h3>
            <ul className="skills-content" id="business-skills-content">
              {businessSkills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
