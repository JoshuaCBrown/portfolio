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
import secondExample from "../../assets/portfolio-images/webqual/IMG_0136.jpg"

const PortfolioContent = [
    {
      title: "PC control panel briefcase",
      img: briefcaseImg,
      id: "briefcase-img",
      cat: "craft",
      description: ''
    },
    {
      title: "Custom rackmount PC for music production",
      img: computerImg,
      id: "computer-img",
      cat: "craft",
    },
    {
      title: "Home music studio",
      img: studioImg,
      id: "studio-img",
      cat: "craft",
    },
    {
      title: "Scrap wood equipment rack",
      img: rackImg,
      id: "rack-img",
      cat: "craft",
    },
    {
      title: "Stained glass boxshelf",
      img: shelfImg,
      id: "shelf-img",
      cat: "craft",
    },
    {
      title: "7-song Circles EP",
      img: circlesImg,
      id: "circles-img",
      cat: "music",
    },
    {
      title: "7-song Sunglass EP",
      img: anoImg,
      id: "ano-img",
      cat: "music",
    },
    {
      title: "Claymation music video",
      img: ptImg,
      id: "pt-img",
      cat: "video",
    },
    {
      title: "Stylistic music video",
      img: flareImg,
      imgs: [secondExample, exampleImg],
      id: "flare-img",
      cat: "video",
      description: "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: "Article Reader Google Chrome extension",
      img: articleReadRImg,
      imgs: [secondExample, exampleImg],
      id: "article-read-img",
      cat: "coding",
      description: "A custom Google Chrome extension used by 10-person BDR team and others within my company's sales department for prospecting and lead generation. The extension parses the text of online news articles currently being viewed in the user's browser window, identifies significant information contained therein, and organizes the information into various categories. Allows users to quickly and easily extract relevant information from the article at hand without having to read the entire article.",
      technology: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      title: "Band website",
      img: jatoWebImg,
      imgs: [exampleImg, secondExample],
      id: "jato-website-img",
      cat: "coding",
      description: "A fully-responsive React-based website for my band Jack and the Other to share information, music, videos, merchandise, and updates with our fans and followers.",
      technology: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: "Tic tac toe web app",
      img: tictactoeImg,
      id: "tictactoe-img",
      cat: "coding",
    },
    {
      title: "Portfolio website",
      img: portfolioImg,
      id: "portfolio-img",
      cat: "coding",
    },
    {
      title: "Tutorial Heaven web app (in progress)",
      img: tutorialHeavenImg,
      id: "tutorial-heaven-img",
      cat: "coding",
    },
  ];

  export default PortfolioContent;