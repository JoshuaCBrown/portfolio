import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
import PortfolioProjects from "./PortfolioContent";
import "../../style/Portfolio.css";
import backArrow from "../../assets/commonicons/arrow.png";
import CompImg from "../../assets/svgs/CompImg";
import MobileHeader from "../../home-components/MobileHeader.jsx";

const Portfolio = ({ themeStyle }) => {
  const [projectClicked, setProjectClicked] = useState("");
  const [hasSelected, setHasSelected] = useState(false);

  const sortedImgs = PortfolioProjects();

  const clickHandler = (itemId) => {
    setProjectClicked(itemId);
    setHasSelected(true);
  };

  const backToPortfolio = () => {
    setProjectClicked("");
    setHasSelected(false);
  };

  const stylizer = (itemId) => {
    return projectClicked === itemId ? { flex: 1 } : { flex: 0 };
  };

  const selectorBot = (itemId) => {
    console.log(itemId);
    return hasSelected ? stylizer(itemId) : { flex: 1 };
  };

  const techJoiner = (arr) => {
    const str = arr.join(", ");
    return str;
  };

  const noBlur = {
    initial: { filter: "initial" },
    whileHover: { filter: "initial" },
    animate: { filter: "initial" },
    transition: { duration: 0.5 },
  };

  const hasBlur = {
    initial: { filter: "blur(10px)" },
    whileHover: { filter: "initial" },
    animate: { filter: "blur(10px)" },
    transition: { duration: 0.5 },
  };

  const blurVariants = hasSelected ? noBlur : hasBlur;

  return (
    <>
      <TransitAnim>
        <div className="portfolio-page-container">
       

          <div className="portfolio-flex-container">
            {/* <div className="color-cat-key">
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
            </div> */}
            {/* <div className="portfolio-header">
              <div className="ph-left"></div>
              <div className="ph-mid">
                <div className="ph-svg-grandparent">
                  <div className="ph-svg-parent">
                    <div className="ph-svg-container">
                      <CompImg />
                    </div>
                  </div>
                </div>
              </div>
                <div className="ph-right"></div>
            </div> */}
              
            
            <MobileHeader section="portfolio" headingBool={true} sectionTitle="ALL" />
            <div className="portfolio-item-container">
            <AnimatePresence>
            {hasSelected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="portfolio-back-btn-container"
              >
                <button
                  className="portfolio-back-btn"
                  onClick={backToPortfolio}
                >
                  <img src={backArrow} className="back-btn-aro" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
                  // whileHover={{ flex: 10 }}
                  animate={selectorBot(item.id)}
                  transition={{ duration: 0.5 }}
                  onClick={() => clickHandler(item.id)}
                >
                  {/* <div className="color-coded" id={item.cat}></div> */}
                  <div className="img-div-container">
                    <AnimatePresence>
                      {!hasSelected && (
                        <motion.div
                          className="project-title-collapsed-container"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h2 className="project-title-collapsed">
                            {item.title}
                          </h2>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.div
                      className="blur-div"
                      key={item.id}
                      variants={blurVariants}
                      initial="initial"
                      // whileHover="whileHover"
                      transition="transition"
                      animate="animate"
                    >
                      <div className="img-div">
                        <img
                          src={item.img}
                          className="portfolio-img"
                          id={item.id}
                        />
                      </div>
                      {/* {projectClicked === item.id && (
                        <>
                          {item.imgs.map((pic) => (
                            <div className="img-div">
                              <img src={pic} className="portfolio-img" />
                            </div>
                          ))}
                        </>
                      )} */}
                      {projectClicked === item.id && (
                        <motion.div
                          className="project-info-container"
                          layout
                          data-isShown={item.id === projectClicked}
                        >
                          <h2 className="project-title">{item.title}</h2>
                          {projectClicked === item.id && (
                            <>
                              <p className="project-description">
                                {item.description}
                              </p>
                              <span className="project-technology">
                                {techJoiner(item.technology)}
                              </span>
                            </>
                          )}
                        </motion.div>
                      )}
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
