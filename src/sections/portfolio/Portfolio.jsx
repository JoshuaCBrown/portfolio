import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import backArrow from "../../assets/commonicons/arrow.png";
import detailedArrow from "../../assets/commonicons/directional-arrow-two.png";
import KeysImg from "../../assets/svgs/KeysImg";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg";
import CompImg from "../../assets/svgs/new/BetterComp";
import "../../style/Portfolio.css";
import TransitAnim from "../../transit-routes/TransitAnim";
import PortfolioProjects from "./PortfolioContent";

const Portfolio = ({ themeStyle }) => {
  const [projectClicked, setProjectClicked] = useState("");
  const [hasSelected, setHasSelected] = useState(false);

  const sortedProjects = PortfolioProjects();
  const sortedIndexs = sortedProjects.map((item) => {
    item.id;
  });

  const clickHandler = (itemId) => {
    setProjectClicked(itemId);
    setHasSelected(true);
  };

  const backToPortfolio = (e) => {
    e.stopPropagation();
    console.log("hey");
    setProjectClicked("");
    setHasSelected(false);
  };

  const nextProject = (e, num) => {
    e.stopPropagation();
    console.log(projectClicked);
    console.log(sortedProjects);
    const currentProjIndex = sortedProjects.findIndex(
      (obj) => obj["id"] === projectClicked
    );
    console.log(currentProjIndex);
    console.log;
    let newProjIndex;
    if (currentProjIndex + num === sortedProjects.length) {
      newProjIndex = 0;
    } else if (currentProjIndex + num < 0) {
      newProjIndex = sortedProjects.length - 1;
    } else {
      newProjIndex = currentProjIndex + num;
    }
    const newProjId = sortedProjects[newProjIndex].id;
    console.log(newProjId);
    return setProjectClicked(newProjId);
  };

  const stylizer = (itemId) => {
    return projectClicked === itemId ? { flex: 1 } : { flex: 0 };
  };

  const selectorBot = (itemId) => {
    // console.log(itemId);
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

  const colorKeysAll = [
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
    {
      title: "a/v",
      class: "music-color",
      key: "musicColor",
    },
  ];
  const colorKeysTwo = [
    {
      title: "video",
      class: "video-color",
      key: "videoColor",
    },
  ];

  return (
    <>
      <TransitAnim>
        <div className="portfolio-page-container">
          <div className="portfolio-flex-container">
            <div className="project-left-spacer">
              <div className="dotted-lines-circle-left"></div>
              <div className="color-key-parent-container">
                <div className="color-key-wrapper">
                  {colorKeysAll.map((item) => (
                    <div className="key-legend-item" key={item.key}>
                      <div className={item.class}></div>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="portfolio-item-container">
              {sortedProjects.map((item) => (
                <motion.div
                  className={`portfolio-item ${item.cat}-item`}
                  id={item.id}
                  key={item.id}
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
                          id={`${item.cat}-col-title`}
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
                        // initial="initial"
                        initial={false}
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
                            id={`${item.cat}-title`}
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
                    <AnimatePresence>
                      {projectClicked === item.id && (
                        <>
                          <motion.div
                            className="project-info-container"
                            layout
                            exit={{ height: "0" }}
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

                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                className="project-link"
                                key="link"
                              >
                                Link
                              </a>
                            )}
                            {item.github && (
                              <a
                                href={item.github}
                                target="_blank"
                                className="project-github"
                                key="github"
                              >
                                GitHub
                              </a>
                            )}
                            {item.technology && (
                              <span className="project-technology" key="tech">
                                {techJoiner(item.technology)}
                              </span>
                            )}
                          </motion.div>
                          <motion.div
                            layout
                            className="project-navigation"
                            id={`${item.cat}-navigation`}
                            exit={{ height: "0" }}
                          >
                            <button
                              className="project-nav-btn"
                              id="project-nav-prev"
                              key="project-nav-prev"
                              onClick={(e) =>
                                nextProject(e, -1, projectClicked)
                              }
                            >
                              <img
                                src={detailedArrow}
                                className="back-btn-aro"
                                id="nav-prev"
                              />
                            </button>
                            <button
                              className="project-nav-btn"
                              id="project-nav-back"
                              key="project-nav-back"
                              onClick={backToPortfolio}
                            >
                              {/* Back */}
                              {/* <img
                                src={backArrow}
                                className="back-btn-aro"
                                key="back-btn-aro-one"
                                id="nav-back"
                              /> */}
                              <img
                                src={backArrow}
                                className="back-btn-aro"
                                key="back-btn-aro-two"
                                id="nav-back"
                              />
                            </button>
                            <button
                              className="project-nav-btn"
                              id="project-nav-next"
                              key="project-nav-next"
                              onClick={(e) => nextProject(e, 1)}
                            >
                              <img
                                src={detailedArrow}
                                className="back-btn-aro"
                                id="nav-next"
                              />
                            </button>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* <div className="color-coded" id={item.cat}></div> */}
                </motion.div>
              ))}
            </div>

            <div className="project-right-spacer">
              <div className="dotted-lines-circle"></div>
              <div className="dashed-vertical-flex-item"></div>
              <div className="project-svg-wrapper">
                <KeysImg classSetter={"portfolio-keys-img"} />
              </div>
              <div className="dashed-vertical-flex-item"></div>
              <div className="project-svg-wrapper">
                <CompImg classSetter={"portfolio-comp-img"} />
              </div>
              <div className="dashed-vertical-flex-item"></div>
              <div className="project-svg-wrapper">
                <WoodworkingImg classSetter={"portfolio-woodworking-img"} />
              </div>
              <div className="dashed-vertical-flex-item"></div>
            </div>
          </div>
        </div>
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
      </TransitAnim>
    </>
  );
};
export default Portfolio;
