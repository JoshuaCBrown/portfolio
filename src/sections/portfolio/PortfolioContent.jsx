import briefcaseImg from "../../assets/portfolio-images/webqual/briefcase-img.jpg";
import computerImg from "../../assets/portfolio-images/webqual/computer-img.jpg";
import studioImg from "../../assets/portfolio-images/webqual/studio.jpg";
import rackImg from "../../assets/portfolio-images/webqual/rack.jpg";
import shelfImg from "../../assets/portfolio-images/webqual/bookshelf.jpg";
import circlesImg from "../../assets/portfolio-images/webqual/circles.jpg";
import anoImg from "../../assets/portfolio-images/webqual/ano.jpg";
import ptImg from "../../assets/portfolio-images/webqual/passingthroughvideotwo.jpg";
import flareImg from "../../assets/portfolio-images/webqual/flarevideotwo.jpg";
import articleReadRImg from "../../assets/portfolio-images/coding/articlereader.jpg";
import jatoWebImg from "../../assets/portfolio-images/coding/jato-website.jpg";
import tictactoeImg from "../../assets/portfolio-images/coding/tictactoe.jpg";
import tutorialHeavenImg from "../../assets/portfolio-images/coding/tutorial-heavenimg.jpg";
import portfolioImg from "../../assets/portfolio-images/coding/portfolio-large.png";
import "../../style/Portfolio.css";
import exampleImg from "../../assets/portfolio-images/webqual/IMG_0135.jpg";
import secondExample from "../../assets/portfolio-images/webqual/IMG_0136.jpg";
import referenceImg from "../../assets/portfolio-images/webqual/reference-img.png";
const PortfolioProjects = () => {
  const PortfolioContent = [
    {
      title: "PC control panel briefcase",
      img: briefcaseImg,
      imgs: [exampleImg, secondExample],
      id: "briefcase-img",
      cat: "craft",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Custom rackmount PC for music production",
      // img: computerImg,
      img: referenceImg,
      imgs: [exampleImg, secondExample],
      id: "computer-img",
      cat: "craft",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Home music studio",
      img: studioImg,
      imgs: [exampleImg, secondExample],
      id: "studio-img",
      cat: "craft",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Scrap wood equipment rack",
      img: rackImg,
      imgs: [exampleImg, secondExample],
      id: "rack-img",
      cat: "craft",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Stained glass boxshelf",
      img: shelfImg,
      imgs: [exampleImg, secondExample],
      id: "shelf-img",
      cat: "craft",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "7-song Circles EP",
      img: circlesImg,
      imgs: [exampleImg, secondExample],
      id: "circles-img",
      cat: "music",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "7-song Sunglass EP",
      img: anoImg,
      imgs: [exampleImg, secondExample],
      id: "ano-img",
      cat: "music",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Claymation music video",
      img: ptImg,
      imgs: [exampleImg, secondExample],
      id: "pt-img",
      cat: "video",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Stylistic music video",
      img: flareImg,
      imgs: [secondExample, exampleImg],
      id: "flare-img",
      cat: "video",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Article Reader Google Chrome extension",
      img: articleReadRImg,
      imgs: [secondExample, exampleImg],
      id: "article-read-img",
      cat: "coding",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Band website",
      img: jatoWebImg,
      imgs: [exampleImg, secondExample],
      id: "jato-website-img",
      cat: "coding",
      description:
        "A fully-responsive React-based website for my band Jack and the Other to share information, music, videos, merchandise, and updates with our fans and followers.",
      technology: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Tic tac toe web app",
      img: tictactoeImg,
      imgs: [exampleImg, secondExample],
      id: "tictactoe-img",
      cat: "coding",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Portfolio Website",
      img: portfolioImg,
      imgs: [exampleImg, secondExample],
      id: "portfolio-img",
      cat: "coding",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Tutorial Heaven web app (in progress)",
      img: tutorialHeavenImg,
      imgs: [exampleImg, secondExample],
      id: "tutorial-heaven-img",
      cat: "coding",
      description:
        "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ["JavaScript", "HTML", "CSS"],
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

  const sortedImgs = [...codingImgs, ...musicImgs, ...craftImgs, ...videoImgs];

  return sortedImgs;
};
export default PortfolioProjects;
