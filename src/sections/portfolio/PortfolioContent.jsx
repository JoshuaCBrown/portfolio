import briefcaseImg from "../../assets/portfolio-images/new/briefcasealttwo_thtwo.jpeg";
import computerImg from "../../assets/portfolio-images/new/rackmount_thtw.jpeg";
import studioImg from "../../assets/portfolio-images/new/studioalt3_32.jpeg";
import rackImg from "../../assets/portfolio-images/new/rack_thee-to.jpeg";
import shelfImg from "../../assets/portfolio-images/new/shelf_thtwo.jpeg";
import circlesImg from "../../assets/portfolio-images/new/circles_thtwo.jpeg";
import anoImg from "../../assets/portfolio-images/new/sunglass_thtwo.jpeg";
import ptImg from "../../assets/portfolio-images/new/pt_thtw.jpeg";
import flareImg from "../../assets/portfolio-images/new/flair_thtw.jpeg";
import articleReadRImg from "../../assets/portfolio-images/new/articlereader_thtwo_two.jpeg";
import jatoWebImg from "../../assets/portfolio-images/new/jato-website_thtwo.jpeg";
import tictactoeImg from "../../assets/portfolio-images/new/tictactoe_th_tw.jpeg";
import tutorialHeavenImg from "../../assets/portfolio-images/new/tutorialheaven_thee-two.jpeg";
import portfolioImg from "../../assets/portfolio-images/new/portfolio_screenshot_three-To.jpeg";
import "../../style/Portfolio.css";
import exampleImg from "../../assets/portfolio-images/webqual/IMG_0135.jpg";
import secondExample from "../../assets/portfolio-images/webqual/IMG_0136.jpg";
import referenceImg from "../../assets/portfolio-images/webqual/reference-img.png";
import visualizeThisImg from "../../assets/portfolio-images/new/i_need_it_thtwo.jpg";
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
      title: "Retro future briefcase",
      img: briefcaseImg,
      imgs: [exampleImg, secondExample],
      id: "briefcase-img",
      cat: "craft",
      description: (
        <p className="project-description">
          An old briefcase purchased at a thrift store converted into an easily
          transportable control panel for a rackmount PC used for live music
          gigs. In addition to a touchscreen monitor, a MIDI controller, a
          trackpad mouse, and flush mounted input jacks for all peripheral
          cables, the briefcase also contains an Arduino Nano clone powering an
          LED VU meter (decibel meter) for a 1/4" balanced input on the top
          panel. When in transit, the fold-down hinges allow the briefcase close
          and latch shut with all internal equipment secure. The 3D-printed
          parts are original designs created in Tinkercad. Modeled after retro
          futurism aesthetic featured in Netflix original series Maniac.{" "}
        </p>
      ),
      technology: [
        "Wood",
        "PETG",
        "Woodworking",
        "3D modeling",
        "3D printing",
        "Arduino",
        "soldering",
        "Tinkercad",
      ],
    },
    {
      title: "Rackmount PC for Audio",
      img: computerImg,
      // img: computImg,
      imgs: [exampleImg, secondExample],
      id: "computer-img",
      cat: "craft",
      description: (
        <p className="project-description">
          A custom-built rackmount PC for running a host of virtual instruments
          and effects with complex audio routing and processing in a live
          performance setting. Parts list:
          <ul className="project-description-list">
            {computerPartsList.map((part, i) => (
              <li key={`computer-part-${i}`}>{part}</li>
            ))}
          </ul>
        </p>
      ),
      technology: [],
    },
    {
      title: "Home music studio",
      img: studioImg,
      imgs: [exampleImg, secondExample],
      id: "studio-img",
      cat: "craft",
      description: (
        <p className="project-description">
          Built several acoustic panels of varying densities in order to turn a
          spare room in my house into a suitable recording and mixing
          environment. I conducted numerous acoustic measurements over the
          course of several weeks using Room EQ Wizard and a calibrated
          omnidirectional microphone in order to identify secondary reflection
          points, room modes, frequency decay, and aim for overall flatness of a
          sine sweep from 20Hz to 20kHz. Using the data from Room EQ Wizard and
          careful placement of panels, and consistent experimentation, I was
          able to identify the ideal monitor placement and set up the room to be
          within 6 decibels of a completely flat response from the listening
          position (comparable to professional level recording and engineering
          studios). Starting measurements before treatment showed a range of
          over 50 decibels of variance.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Audio equipment rack",
      img: rackImg,
      imgs: [exampleImg, secondExample],
      id: "rack-img",
      cat: "craft",
      description: (
        <p className="project-description">
          Designed, built, and stained a 10u equipment rack for my home studio
          using leftover wood from other projects. Front face was placed at a
          slight angle to increase stability for heavier equipment. Built to
          standardized width spec with hand tools and a power drill utilizing
          cement blocks for measurements of right angles and flat surfaces.
        </p>
      ),
      technology: ["Wood", "Hardware"],
    },
    {
      title: "Stained glass boxshelf",
      img: shelfImg,
      imgs: [exampleImg, secondExample],
      id: "shelf-img",
      cat: "craft",
      description: (
        <p className="project-description">
          A stained glass box shelf made from wood, clear acrylic, shattered
          pieces of colored glass, and led string lights. LEDs sandwiched
          between panes of acrylic and colored glass pieces in the top and sides
          of the box shelf, causing a colorful light effect emanating from the
          shelf when turned on, similar to prismatic light refraction.{" "}
        </p>
      ),
      technology: ["Wood", "Acrylic", "Glass", "LEDs"],
    },
    {
      title: "Music Catalog",
      img: anoImg,
      imgs: [exampleImg, secondExample],
      id: "circles-img",
      cat: "music",
      description: (
        <p className="project-description">
          Music released with my Atlanta-based band Jack and the Other. Catalog
          encompasses 19 songs over three EPs and two standalone singles, and
          has received over two million cross-platform streams to date.
        </p>
      ),
      technology: [],
    },
    {
      title: "Audio Visualizer",
      img: visualizeThisImg,
      imgs: [exampleImg, secondExample],
      id: "ano-img",
      cat: "music",
      description: (
        <p className="project-description">
          Custom audio visualizer for my band's song 'I Need It'. Utilized
          displacement mapping and parallax animation to create 3-dimensional
          depth and movement effects from a still image source.{" "}
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Claymation music video",
      img: ptImg,
      imgs: [exampleImg, secondExample],
      id: "pt-img",
      cat: "video",
      description: (
        <p className="project-description">
          Claymation music video for my band's song 'Passin Through'.
          Contributed concept, set design, story-boarding, logistics, lighting,
          and minor VFX with Adobe After Effects.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Stylistic music video",
      img: flareImg,
      imgs: [secondExample, exampleImg],
      id: "flare-img",
      cat: "video",
      description: (
        <p className="project-description">
          Video editing and FX for my band's song 'Flare'. In addition to
          stylistic visual effects, raw footage encoding, and general editing, I
          relied heavily upon object tracking, stabilization, rotoscoping, AI
          content fill, and Twixtor's frame interpolation algorithm. Majority of
          editing was done in Premiere, with certain VFX and footage preparation
          completed in Adobe After Effects.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Article reader Chrome ext",
      img: articleReadRImg,
      imgs: [secondExample, exampleImg],
      id: "article-read-img",
      cat: "coding",
      description: (
        <p className="project-description">
          A custom Google Chrome extension used by three separate teams for
          prospecting, information gathering, and lead generation. The extension
          parses the text of online news articles currently being viewed in the
          user's browser window, identifies significant information contained
          therein, and organizes the information into various categories. Allows
          users to quickly and easily extract relevant information from the
          article at hand without having to read the entire article.
        </p>
      ),
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Band website",
      img: jatoWebImg,
      imgs: [exampleImg, secondExample],
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
      imgs: [exampleImg, secondExample],
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
          medium (video, article, & text post), and popularity.
        </p>
      ),
      technology: ["React", "JavaScript", "HTML", "CSS", "MongoDB", "Mongoose"],
    },
    {
      title: "Portfolio Website",
      img: portfolioImg,
      imgs: [exampleImg, secondExample],
      id: "portfolio-img",
      cat: "coding",
      description: (
        <p className="project-description">
          A website to showcase my personal projects with my personal network
          and potential employers. Designed all non-photograph visual assets and
          images. **INSERT LINK** READ MORE HERE **INSERT LINK**
        </p>
      ),
      technology: ["React", "JavaScript", "HTML", "CSS", "Framer Motion"],
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

  const sortedImgs = [...codingImgs, ...craftImgs, ...videoImgs, ...musicImgs,];

  return sortedImgs;
};
export default PortfolioProjects;
