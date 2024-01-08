import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
import PortfolioProjects from "./PortfolioContent";
import "../../style/Portfolio.css";
import backArrow from "../../assets/commonicons/arrow.png";
import CompImg from "../../assets/svgs/new/BetterComp";
import MobileHeader from "../../home-components/MobileHeader.jsx";
import FancyComp from "../../assets/svgs/new/FancyComp";

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
    initial: { opacity: "100%" },
    whileHover: { opacity: "0%" },
    // animate: { opacity: '0%', transition: { duration: 2 } },
    animate: { opacity: "0%", transition: { duration: 1 } },
    transition: { duration: 1 },
  };

  const hasBlur = {
    initial: { opacity: "100%" },
    whileHover: { opacity: "0%" },
    // animate: { opacity: '100%', transition: { duration: 2 } },
    animate: { opacity: "100%", transition: { duration: 1 } },
    // animate: { filter: "blur(10px)" },
    transition: { duration: 1 },
  };

  const blurVariants = hasSelected ? noBlur : hasBlur;

  const colorKeysOne = [
    {
      title: "code",
      class: "coding-color",
      key: "codeColor",
    },
    {
      title: "craft",
      class: "craft-color",
      key: "craftColor",
    },
  ];
  const colorKeysTwo = [
    {
      title: "music",
      class: "music-color",
      key: "musicColor",
    },
    {
      title: "video",
      class: "video-color",
      key: "videoColor",
    },
  ];

  const colorKeysAll = [...colorKeysOne, ...colorKeysTwo];

  return (
    <>
      <TransitAnim>
        <div className="portfolio-page-container">
          <div className="portfolio-flex-container">
            {/* <div className="color-key-wrapper">
              <div className="color-key-left">
                {colorKeysOne.map((item) => (
                  <div className="key-legend-item" key={item.key}>
                    <div className={item.class}></div>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="portfolio-svg-wrapper">
                <FancyComp />
                <CompImg />
              </div>
              <div className="color-key-right">
                {colorKeysTwo.map((item) => (
                  <div className="key-legend-item" key={item.key}>
                    <div className={item.class}></div>
                    <span>{item.title}</span>
                  </div>
                ))}
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

            {/* <MobileHeader section="portfolio" headingBool={true} sectionTitle="ALL" /> */}
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
                  style={selectorBot(item.id)}
                  layout
                  initial={false}
                  // whileHover={{ flex: 10 }}
                  animate={selectorBot(item.id)}
                  transition={{ duration: 0.5 }}
                  onClick={() => clickHandler(item.id)}
                >
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

                    <div className="img-div">
                      <div className="img-wrapper">
                        <img
                          src={item.img}
                          className="portfolio-img"
                          id={item.id}
                        />
                      </div>
                      <motion.div
                        className="blur-div"
                        key={item.id}
                        variants={blurVariants}
                        initial="initial"
                        // whileHover="whileHover"
                        transition="transition"
                        animate="animate"
                      >
                        <img
                          src={item.img}
                          className="portfolio-img"
                          id={item.id}
                        />
                      </motion.div>
                      {projectClicked === item.id && (
                        <>
                          <motion.div
                            className="project-title-container"
                            layout
                          >
                            <h2 className="project-title">{item.title}</h2>
                          </motion.div>
                        </>
                      )}
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
                      <>
                        <motion.div
                          className="project-info-container"
                          layout
                          data-isShown={item.id === projectClicked}
                        >
                          <motion.div
                            className="project-title-container-ghost"
                            layout
                          >
                            <h2 className="project-title-ghost">
                              {item.title}
                            </h2>
                          </motion.div>
                          <p className="project-description">
                            {item.description}
                          </p>
                          <span className="project-technology">
                            {techJoiner(item.technology)}
                          </span>
                        </motion.div>
                      </>
                    )}
                  </div>
                  <div className="color-coded" id={item.cat}></div>
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
