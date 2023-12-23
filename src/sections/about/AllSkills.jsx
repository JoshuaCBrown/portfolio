const AllSkills = () => {
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
    "Google Suite",
    "HubSpot",
    "Windows",
    "Linux",
  ];

  const allSkillsArray = [
    {
      title: 'Code',
      class: 'skill',
      id: 'code',
      content: codeSkills,
    },
    {
      title: 'Visual',
      class: 'skill',
      id: 'visual',
      content: visualSkills,
    },
    {
      title: 'Audio',
      class: 'skill',
      id: 'audio',
      content: audioSkills,
    },
    {
      title: 'General',
      class: 'skill',
      id: 'general',
      content: generalSkills,
    },
  ];

  return allSkillsArray;

};

;
export default AllSkills;