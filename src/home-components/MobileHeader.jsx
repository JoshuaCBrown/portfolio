import "../style/MobileHeader.css";
import WoodworkingImg from "../assets/svgs/WoodworkingImg";
import WoodworkingImgBgStatic from "../assets/svgs/WoodworkingImgBgStatic.jsx";
import SkylineImg from "../assets/svgs/SkylineImg.jsx";
import SkylineImgBg from "../assets/svgs/SkylineImgBgPosterity.jsx";
import SkylineImgBgStatic from "../assets/svgs/SkylineImgBgStaticPosterity.jsx";
import MannyImg from "../assets/svgs/MannyImg.jsx";
import MannyImgBgStatic from "../assets/svgs/MannyImgBgStatic.jsx";
import CompImg from "../assets/svgs/CompImg.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// initial page load off causing late loading??
const MobileHeader = ({ section, headingBool, sectionTitle }) => {
  const lightSvgVariants = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1, transition: { duration: 2 } },
    transition: { duration: 2 },
  };

  const darkSvgVariants = {
    initial: { pathLength: 1 },
    animate: { pathLength: 1, transition: { duration: 0 } },
    transition: { duration: 0 },
  };

  function SvgItself(page) {
    const str = page;
    switch (str) {
      case "portfolio":
        return <CompImg svgVariants={lightSvgVariants} />
        break;
      case "about":
        return <MannyImg svgVariants={lightSvgVariants} />
        break;
      case "contact":
        return <CubeImg svgVariants={lightSvgVariants} />
        break;
      default:
        return <WoodworkingImg svgVariants={lightSvgVariants} />;
    }
  }

  const flexLeft = () => {
    if (section !== "woops") {
      return { flex: 5 };
    } else {
      return { flex: 9 };
    }
  };

  const flexRight = () => {
    if (section !== "woops") {
      return { flex: 9 };
    } else {
      return { flex: 5 };
    }
  };

  const semiCircleSide = () => {
    if (section !== "woops") {
      return { borderLeft: "4px var(--primaryBlack) dashed" };
    } else {
      return { borderRight: "4px var(--primaryBlack) dashed" };
    }
  };

  const SvgContainer = () => {
    return (
      <div className="header-icon-container">
        <div className="sm-svg-semi" style={semiCircleSide()}>
          <div className="sm-svg-circle-border">{SvgItself(section)}</div>
        </div>
      </div>
    );
  };

  const TitleAndDashContainer = () => {
    return (
      <div className="header-title-dashes-container">
        <div className="htd-top">
          <div className="htd-top-left" style={flexLeft()}>
            <div
              className="htd-tl-dashes"
              data-shortenDashes={headingBool}
            ></div>
            {!headingBool && <span className="making-things">I</span>}
          </div>
          <div className="htd-top-right" style={flexRight()}>
            {!headingBool && <span className="making-things">like</span>}
          </div>
        </div>
        <div className="htd-mid">
          <div className="htd-mid-left" style={flexLeft()}>
            <div className="htd-ml-dashes"></div>
          </div>
          <div className="htd-mid-mid">
            {headingBool && (
              <div className="htd-heading-container">
                <h2 className="htd-section-heading">{sectionTitle}</h2>
              </div>
            )}
          </div>
          <div className="htd-mid-right" style={flexRight()}>
            <div className="htd-ml-dashes"></div>
          </div>
        </div>
        <div className="htd-bot">
          <div className="htd-bot-left" style={flexLeft()}>
            <div
              className="htd-bl-dashes"
              data-shortenDashes={headingBool}
            ></div>
            {!headingBool && <span className="making-things">making</span>}
          </div>
          <div className="htd-bot-right" style={flexRight()}>
            {!headingBool && <span className="making-things">things</span>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="sm-mid-bot-row"
      data-thingSelected={headingBool}
      layout
    >
      {section === "woops" ? (
        <>
          <SvgContainer />
          <TitleAndDashContainer />
        </>
      ) : (
        <>
          <TitleAndDashContainer />
          <SvgContainer />
        </>
      )}

      {/* <div className="sm-mb-right">
        <div className="sm-svg-parent-container">
          <div className="sm-svg-container">
            {headingBool ? (
              <>
                <MannyImg svgVariants={lightSvgVariants} />
                <MannyImgBgStatic svgVariants={lightSvgVariants} />
              </>
            ) : (
              <>
                <WoodworkingImg svgVariants={lightSvgVariants} />
                <WoodworkingImgBgStatic svgVariants={lightSvgVariants} />
              </>
            )}
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default MobileHeader;
