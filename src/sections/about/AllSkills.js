const audioSkillsList = [
  "FL Studio",
  "Ableton Live",
  "Audacity",
  "Gig Performer from Deskew",
  "Melodyne",
  "Izotope Suite",
  "Room EQ Wizard",
];

const visualSkillsList = [
  "Photoshop",
  "Illustrator",
  "Premiere",
  "After Effects",
  "Lightroom",
  "Figma",
  "Canva",
  "Tinkercad",
];

const codeSkillsList = [
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

const generalSkillsList = [
  "Microsoft Office Suite",
  "Google Suite",
  "HubSpot",
  "Windows",
  "Linux",
];

const codeSkills = {
  title: "Code",
  class: "skill",
  id: "code",
  content: codeSkillsList,
};
const visualSkills = {
  title: "Visual",
  class: "skill",
  id: "visual",
  content: visualSkillsList,
};

const audioSkills = {
  title: "Audio",
  class: "skill",
  id: "audio",
  content: audioSkillsList,
};
const generalSkills = {
  title: "General",
  class: "skill",
  id: "general",
  content: generalSkillsList,
};

const allSkills = [codeSkills, visualSkills, audioSkills, generalSkills];
const rightSkills = [codeSkills, generalSkills];
const leftSkills = [visualSkills, audioSkills];

export { allSkills, leftSkills, rightSkills };
