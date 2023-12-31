const ExpeJobs = [
  // {
  //   title: "Tutor",
  //   duration: "Apr 2015 - Apr 2016",
  //   highlights: [
  //     "Tutor high school and undergraduate college students in one-on-one settings diverse range of subjects",
  //     "Set tutoring goals, monitor progress and develop personalized tutoring programs",
  //   ],
  //   id: "tutor-job",
  //   lowArrow: true,
  // },
  // {
  //   title: "Bartender",
  //   duration: "Mar 2016 - Jan 2017",
  //   highlights: [
  //     "Provide high level of customer service in upscale dining setting",
  //     "Maintain extensive knowledge of menu to provide recommendations and develop custom cocktails",
  //   ],
  //   id: "bartender-job",
  //   lowArrow: true,
  // },
  {
    title: "Writer",
    duration: "Jan 2016 - Apr 2018",
    highlights: [
      "Completed several hundred individual projects, including technical manuals, case studies, tutorials, reports, and blog posts",
      "Wrote copy for e-commerce product descriptions",
      "Edited and proofread documents for grammar, readibility, and improved SEO",
    ],
    id: "writer-job",
    lowArrow: true,
  },

  {
    title: "Workshop instructor",
    duration: "Jun 2018 - Sep 2019",
    highlights: [
      "Led regular workshops of up to twenty students on techniques for recording and audio engineering",
      "Assisted students in problem-solving strategies and troubleshooting technical computer and audio issues",
      "Provide personalized feedback and critique for students' work",
    ],
    id: "workshopper-job",
    lowArrow: true,
  },
  {
    title: "Audio Equipment Repair and Resale",
    duration: "Feb 2020 - Dec 2021",
    highlights: [
      "Source audio equipment in pre-owned market",
      "Wrote compelling product descriptions through local marketplace and e-commerce platforms",
      "Maintain high level of customer service to foster and develop lasting client relationships",
    ],
    id: "repair-job",
    lowArrow: false,
  },
  {
    title: "Audio Engineer/Studio Consultant",
    duration: "May 2018 - May 2023",
    highlights: [
      "Provide production, recording, mixing and mastering services for artists and bands from a wide variety of genres",
      "2 million+ cross-platform streams",
      "Negotiated lucrative distribution and sync licensing deals with RnE Audio and Soundplate Records",
      "Wrote successful grant proposal for City of Atlanta's Artist Project Grant",
      "Numerous features in digital and print media outlets and Apple Music editorial playlists",
    ],
    id: "musician-job",
    lowArrow: false,
  },
  {
    title: "Business Development Representative",
    duration: "May 2023 - Present",
    highlights: [
      "Designed custom Chrome extension used by entire team",
      "Grand prize winner of 'Why Change' pitch contest held amongst entire sales department",
      "Never missed sales plan, 170% of quota since starting",
    ],
    id: "bdr-job",
    lowArrow: false,
  },
];

function rightColumn(arr) {
  let rightArray = [];
  for (let i = 1; i < arr.length; i += 2) {
    rightArray.push(arr[i]);
  }
  console.log(rightArray);
  return rightArray;
}

function leftColumn(arr) {
  let leftArray = [];
  for (let i = 0; i < arr.length; i += 2) {
    leftArray.push(arr[i]);
  }
  console.log(leftArray);
  return leftArray;
}

const rightJobs = rightColumn(ExpeJobs);
const leftJobs = leftColumn(ExpeJobs);

export { leftJobs, rightJobs };
