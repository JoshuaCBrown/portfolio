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

const Portfolio = ({ themeStyle }) => {
  const portfolioContent = [
    {
      img: briefcaseImg,
      id: "briefcase-img",
      cat: "craft",
    },
    {
      img: computerImg,
      id: "computer-img",
      cat: "craft",
    },
    {
      img: studioImg,
      id: "studio-img",
      cat: "craft",
    },
    {
      img: rackImg,
      id: "rack-img",
      cat: "craft",
    },
    {
      img: shelfImg,
      id: "shelf-img",
      cat: "craft",
    },
    {
      img: circlesImg,
      id: "shelf-img",
      cat: "music",
    },
    {
      img: anoImg,
      id: "ano-img",
      cat: "music",
    },
    {
      img: ptImg,
      id: "pt-img",
      cat: "video",
    },
    {
      img: flareImg,
      id: "flare-img",
      cat: "video",
    },
    {
      img: articleReadRImg,
      id: "article-read-img",
      cat: "coding",
    },
    {
      img: jatoWebImg,
      id: "jato-website-img",
      cat: "coding",
    },
    {
      img: tictactoeImg,
      id: "tictactoe-img",
      cat: "coding",
    },
    {
      img: portfolioImg,
      id: "portfolio-img",
      cat: "coding",
    },
    {
      img: tutorialHeavenImg,
      id: "tutorial-heaven-img",
      cat: "coding",
    },
  ];

  const imgSorter = (item, str) => {
    return item.cat === str;
  };

  const codingImgs = portfolioContent.filter((item) =>
    imgSorter(item, "coding")
  );
  const musicImgs = portfolioContent.filter((item) => imgSorter(item, "music"));
  const craftImgs = portfolioContent.filter((item) => imgSorter(item, "craft"));
  
  const videoImgs = portfolioContent.filter((item) =>
    imgSorter(item, "video")
  );

  const sortedImgs = [...codingImgs, ...musicImgs, ...craftImgs, ...videoImgs];

  return (
    <>
      <TransitAnim>
        <div className="portfolio-container">
          <div className="portfolio-item-container">
            {sortedImgs.map((item) => (
              <motion.div className="portfolio-item" key={item.id}
              style={{flex: 1}}
              initial={{flex: 1}}
              whileHover={{flex: 10}}
              transition={{duration: .5}}>
                <div className={item.cat}></div>
                <motion.div className="img-div" key={item.id}
              
              initial={{filter: 'blur(10px)'}}
              whileHover={{filter: 'blur(0px)'}}
              transition={{duration: .5}}>
                  <img src={item.img} className="portfolio-img" id={item.id} />
                  </motion.div>
              </motion.div>
            ))}
           
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default Portfolio;
