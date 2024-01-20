import articleReadRImg from "../../assets/portfolio-images/new/articlereader_thtwo_two.jpeg";
import briefcaseImg from "../../assets/portfolio-images/new/briefcasealttwo_thtwo.jpeg";
import flareImg from "../../assets/portfolio-images/new/flair_thtw.jpeg";
import visualizeThisImg from "../../assets/portfolio-images/new/i_need_it_thtwo.jpg";
import jatoWebImg from "../../assets/portfolio-images/new/jato-website_thtwo.jpeg";
import portfolioImg from "../../assets/portfolio-images/new/portfolio_screenshot_three-To.jpeg";
import ptImg from "../../assets/portfolio-images/new/pt_thtw.jpeg";
import rackImg from "../../assets/portfolio-images/new/rack_thee-to.jpeg";
import computerImg from "../../assets/portfolio-images/new/rackmount_thtw.jpeg";
import shelfImg from "../../assets/portfolio-images/new/shelf_thtwo.jpeg";
import studioImg from "../../assets/portfolio-images/new/studioalt3_32.jpeg";
import anoImg from "../../assets/portfolio-images/new/sunglass_thtwo.jpeg";
import {
  default as exampleImg,
  default as secondExample,
  default as tutorialHeavenImg,
} from "../../assets/portfolio-images/new/tutorialheaven_thee-two.jpeg";

import "../../style/Portfolio.css";

const PortfolioProjects = () => {
  const computerPartsList = [
    "Intel i7-12700k",
    "GIGABYTE Z690 Gaming X DDR5",
    "32gb Aorus DDR5 RAM (16gb x 2)",
    "500gb WD_Black SN770 NVMe M.2",
    "2TB Firecuda 520 NVMe M.2",
    "Asus GeForce GT1030 2GB GDDR5",
    "Noctua NH-U9S CPU Cooler Fan",
    "Cooler Master Sickleflow Fans 120mm RGB",
    "EVGA 750w Gold fully modular PSU",
    "FebSmart USB 3.0 PCIe card",
  ];

  const PortfolioContent = [
    {
      title: "Retro Future Briefcase",
      img: briefcaseImg,
      // imgs: [exampleImg, secondExample],
      id: "briefcase-img",
      cat: "craft",
      description: (
        <p className="project-description">
          <em>Featured in March 2023 issue of Hackspace Magazine</em>
          <br />
          <br />A thrifted briefcase converted into a transportable control
          station for a rackmount PC. The briefcase contains a touchscreen
          monitor, MIDI controller, trackpad mouse, and flush mounted input
          jacks for all peripheral cables, as well as an LED VU meter (decibel
          meter) controlled by an Arduino Nano clone. Utilizes several custom 3D
          printed parts for folding mechanism and equipment mounting.
        </p>
      ),
      technology: [
        "Woodworking",
        "3D Printing",
        "3D Modeling",
        "Arduino",
        "Tinkercad",
      ],
      link: "https://hackspace.raspberrypi.com/issues/64",
      github: null,
      completed: true,
    },
    {
      title: "Rackmount Audio PC",
      img: computerImg,
      // img: computImg,
      // imgs: [exampleImg, secondExample],
      id: "computer-img",
      cat: "craft",
      description: (
        <p className="project-description">
          A rackmount PC for running a host of virtual instruments and effects
          with complex audio routing and processing in a live performance
          setting. Parts were selected to ensure capable performance and
          reliability with minimal latency. Parts list:
          <ul className="project-description-list">
            {computerPartsList.map((part, i) => (
              <li key={`computer-part-${i}`}>{part}</li>
            ))}
          </ul>
        </p>
      ),
      technology: null,
      link: null,
      github: null,
      completed: true,
    },
    {
      title: "Home Music Studio",
      img: studioImg,
      imgs: [exampleImg, secondExample],
      id: "studio-img",
      cat: "craft",
      description: (
        <p className="project-description">
          A spare bedroom converted into a professional-level recording and
          mixing environment. Room EQ Wizard and a calibrated omnidirectional
          microphone were used to take acoustic measurements and interpret
          graphical readings of frequency response, room modes, reflection
          points, and frequency decay. Designed and built acoustic panels of
          varying dimensions to treat the room accordingly. Beginning
          measurements showed variance of over 50 dBs, final measurements showed
          a flat frequency response within 6 dBs from 20Hz to 20kHz.
        </p>
      ),
      technology: ["Room EQ Wizard", "Woodworking"],
      link: null,
      github: null,
      completed: true,
    },
    {
      title: "Audio Equipment Rack",
      img: rackImg,
      imgs: [exampleImg, secondExample],
      id: "rack-img",
      cat: "craft",
      description: (
        <p className="project-description">
          A 10u equipment rack for my home studio built using leftover wood from
          other projects. Front face was placed at a slight angle to improve
          weight distribution of heavier equipement. Built to standardized
          rackmount equipment spec with hand tools and a power drill utilizing
          cement blocks for measurements of right angles and flat surfaces.
        </p>
      ),
      technology: ["Woodworking"],
      link: null,
      github: null,
      completed: true,
    },
    {
      title: "Stained Glass Boxshelf",
      img: shelfImg,
      imgs: [exampleImg, secondExample],
      id: "shelf-img",
      cat: "craft",
      description: (
        <p className="project-description">
          A stained glass box shelf made from wood, clear acrylic, shattered
          pieces of colored glass, and led string lights. LED lights were
          sandwiched between panes of acrylic and colored glass pieces in the
          top and sides of the box shelf, causing a colorful light effect
          emanating from the shelf when turned on.
        </p>
      ),
      technology: ["Woodworking"],
      link: null,
      github: null,
      completed: true,
    },
    {
      title: "Music Catalog",
      img: anoImg,
      imgs: [exampleImg, secondExample],
      id: "circles-img",
      cat: "music",
      description: (
        <p className="project-description">
          Music released with Atlanta-based duo Jack and the Other which has
          received over 2 million cross-platform streams to date. Catalog
          encompasses 19 songs over three EPs and two standalone singles.
        </p>
      ),
      technology: [
        "Composition",
        "Production",
        "Audio Recording",
        "Mixing/Mastering",
      ],
      link: "https://open.spotify.com/artist/53wrHX7FVfvPldDQXlNTts",
      github: null,
      completed: true,
    },
    {
      title: "Audio Visualizer",
      img: visualizeThisImg,
      // imgs: [exampleImg, secondExample],
      id: "audio-visualizing",
      cat: "music",
      description: (
        <p className="project-description">
          Audio visualizer for my band's song 'I Need It'. Displacement mapping
          and parallax animation in Adobe After Effects to create 3-dimensional
          depth and movement effects from a still photograph source.
        </p>
      ),
      technology: ["Adobe After Effects"],
      link: "https://www.youtube.com/watch?v=VyGNSaKj8Jg",
      github: null,
      completed: true,
    },
    {
      title: "Claymation music video",
      img: ptImg,
      // imgs: [exampleImg, secondExample],
      id: "pt-img",
      cat: "music",
      description: (
        <p className="project-description">
          Claymation music video for my band's song 'Passin Through'.
          Contributed concept, set design, story-boarding, logistics, lighting,
          and minor VFX with Adobe After Effects.
        </p>
      ),
      technology: ["Adobe After Effects"],
      link: "https://www.youtube.com/watch?v=BwxnX8Lc5sY",
      github: null,
      completed: true,
    },
    {
      title: "Stylized Music Video",
      img: flareImg,
      // imgs: [secondExample, exampleImg],
      id: "flare-img",
      cat: "music",
      description: (
        <p className="project-description">
          Music video for my band's song 'Flare'. In addition to stylistic
          visual effects, raw footage encoding, and general editing, video
          editing relied heavily upon object tracking, stabilization,
          rotoscoping, AI content fill, and Twixtor's frame interpolation
          algorithm. Majority of editing completed in Premiere, with certain VFX
          and footage preparation completed in Adobe After Effects.
        </p>
      ),
      technology: ["Adobe Premiere", "Adobe After Effects"],
      link: "https://www.youtube.com/watch?v=ardW9bJXo-w",
      github: null,
      completed: true,
    },
    {
      title: "Article Reader Chrome Ext",
      img: articleReadRImg,
      // imgs: [secondExample, exampleImg],
      id: "article-read-img",
      cat: "coding",
      description: (
        <p className="project-description">
          A Google Chrome extension created for prospecting, information
          gathering, and lead generation. Allows users to quickly and easily
          extract relevant information from the article at hand without having
          to read the entire article. Currently used by three separate teams at
          current employer.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS"],
      link: null,
      github: "https://github.com/JoshuaCBrown/article-reader-ext",
      completed: true,
    },
    {
      title: "Band website",
      img: jatoWebImg,
      // imgs: [exampleImg, secondExample],
      id: "jato-website-img",
      cat: "coding",
      description: (
        <p className="project-description">
          A fully-responsive React-based website for my band Jack and the Other
          to share information, music, videos, merchandise, and updates with our
          fans and followers.
        </p>
      ),
      technology: ["React", "JavaScript", "HTML", "CSS"],
      link: null,
      github: "https://github.com/JoshuaCBrown/jato-website",
      completed: true,
    },
    // {
    //   title: "Tic tac toe web app",
    //   img: tictactoeImg,
    //   imgs: [exampleImg, secondExample],
    //   id: "tictactoe-img",
    //   cat: "coding",
    //   description: (
    //     <p className="project-description">
    //       Two players, one mouse. A non-existent twist on a beloved a classic.
    //     </p>
    //   ),
    //   technology: ["JavaScript", "HTML", "CSS"],
    // },
    {
      title: "Tutorial Heaven",
      img: tutorialHeavenImg,
      // imgs: [exampleImg, secondExample],
      id: "tutorial-heaven-img",
      cat: "coding",
      description: (
        <p className="project-description">
          A full-stack web app to submit, curate, and review music-related
          tutorials. Authenticated users are able to create tutorials and share
          their favorite educational music resources from all across the web as
          well as vote on posts submitted by other users. Users can also create
          customized 'courses' by organizing individual tutorials into
          playlists. Tutorial content is sorted by tutorial topic, content
          medium, and popularity.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS", "React", "MongoDB", "Mongoose"],
      link: null,
      github: "https://github.com/JoshuaCBrown/tutorial-heaven",
      completed: false,
    },
    {
      title: "Portfolio Website",
      img: portfolioImg,
      // imgs: [exampleImg, secondExample],
      id: "portfolio-img",
      cat: "coding",
      description: (
        <p className="project-description">
          A website to provide information about me and showcase some projects.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS", "React", "Framer Motion"],
      link: null,
      github: "https://github.com/JoshuaCBrown/portfolio",
      completed: true,
    },
  ];

  //these sorting functions here are so that I can add and remove portfolio projects to the PortfolioContent array without worrying about their order and they will be automatically sorted into the proper category
  const imgSorter = (item, str) => {
    return item.cat === str;
  };

  const codingImgs = PortfolioContent.filter((item) =>
    imgSorter(item, "coding")
  );
  const musicImgs = PortfolioContent.filter((item) => imgSorter(item, "music"));
  const craftImgs = PortfolioContent.filter((item) => imgSorter(item, "craft"));

  const videoImgs = PortfolioContent.filter((item) => imgSorter(item, "video"));

  const sortedProjects = [...codingImgs, ...craftImgs, ...musicImgs];

  return sortedProjects;
};
export default PortfolioProjects;
