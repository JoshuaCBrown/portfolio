import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
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
      id: "shelf-img",
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
      id: "flare-img",
      cat: "video",
    },
    {
      title: "Article Reader Google Chrome extension",
      img: articleReadRImg,
      id: "article-read-img",
      cat: "coding",
    },
    {
      title: "Band website",
      img: jatoWebImg,
      id: "jato-website-img",
      cat: "coding",
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