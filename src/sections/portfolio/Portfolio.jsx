import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
import PortfolioContent from "./PortfolioContent";
import "../../style/Portfolio.css";

const Portfolio = ({ themeStyle }) => {
  const [projectClicked, setProjectClicked] = useState("");
  const [hasSelected, setHasSelected] = useState(false);

  const clickHandler = (itemId) => {
    setProjectClicked(itemId);
    setHasSelected(true);
    console.log("click bitch");
  };

  // const flexy = {
  //   initial: { flex: 1 },
  //   whileHover: { flex: 10 },
  //   transition: { duration: 0.5 },
  // };

  // const ignored = {
  //   initial: { flex: 0 },
  //   whileHover: { flex: 0 },
  //   transition: { duration: 2 },
  // };

  const stylizer = (itemId) => {
    return projectClicked === itemId ? { flex: 1 } : { flex: 0 };
  };

  function selectorBot(itemId) {
    console.log(itemId);
    return hasSelected ? stylizer(itemId) : { flex: 1 };
  }
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

  return (
    <>
      <TransitAnim>
        <div className="portfolio-page-container">
          <div className="portfolio-flex-container">
            <div className="color-cat-key">
              <h3 id="key-legend-title">Color Key</h3>
              <div className="key-legend-item">
                <div className="coding-color"></div>
                <span>code</span>
              </div>
              <div className="key-legend-item">
                <div className="music-color"></div>
                <span>music</span>
              </div>
              <div className="key-legend-item">
                <div className="craft-color"></div>
                <span>craft</span>
              </div>
              <div className="key-legend-item">
                <div className="video-color"></div>
                <span>video</span>
              </div>
            </div>
            <div className="portfolio-item-container">
              {sortedImgs.map((item) => (
                <motion.div
                  className="portfolio-item"
                  id={item.id}
                  key={item.id}
                  // style={projectClicked === item.id ? { flex: 1, minWidth: '700px'} : { flex: 1, minWidth: 0 }}
                  // style={{ width: '700px'}}
                  // variants={projectClicked === item.id ? clicked : notClicked}

                  style={selectorBot(item.id)}
                  layout
                  initial={false}
                  whileHover={{ flex: 10 }}
                  animate={selectorBot(item.id)}
                  transition={{ duration: 0.5 }}
                  onClick={() => clickHandler(item.id)}
                >
                  <div className="color-coded" id={item.cat}></div>
                  <div className="img-div">
                    <motion.div
                      className="blur-div"
                      key={item.id}
                      initial={{ filter: "blur(10px)" }}
                      whileHover={{ filter: "blur(0px)" }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={item.img}
                        className="portfolio-img"
                        id={item.id}
                      />
                      {projectClicked === item.id && (
                        <>
                          {item.imgs.map((pic) => (
                            <img src={pic} className="portfolio-img" />
                          ))}
                        </>
                      )}
                      <div className="project-title-container">
                        <h2 className="project-title">{item.title}</h2>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="portfolio-spacer-right"></div>
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default Portfolio;
