import "../../style/Achievements.css";

const Achievements = () => {
  const myAchievements = [
    {
      achievement:
        "Created Google Chrome extension for parsing and extracting key information from industry articles, currently used by three separate teams within the sales department at current workplace. ",
      id: "chromeExt",
      category: "professional",
    },
    {
      achievement:
        "Grandprize winner of 'Why Change' pitch contest held amongst entire sales department",
      id: "pitchContest",
      category: "professional",
    },
    {
      achievement:
        "Custom PC control panel using arduino, 3d printed parts, and wood featured in Raspberry Pi's print magazine Hackspace",
      id: "hackspaceMag",
      category: "project",
    },
    {
      achievement:
        "Recipient of Artist Project Grant from the City of Atlanta Office of Cultural Affairs",
      id: "artistGrant",
      category: "music",
    },
    {
      achievement: "Over 2.5 million cross-platform streams on original music.",
      id: "musicStreams",
      category: "music",
    },
    {
      achievement:
        "Hundreds of hours of volunteer work with organizations including E.C.H.O. (Educational Concerns for world Hunger Organization), Walk for a Cure, and Wonderroot community arts center",
      id: "communityService",
      category: "personal",
    },
  ];
  return (
    <>
      <div className="achievements-container">
        <h2 className="ach-title">Achievements</h2>
        <ul className="achievements-list">
          {myAchievements.map((item) => (
            <li className="achievement" key={item.id}>
              {item.achievement}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Achievements;
