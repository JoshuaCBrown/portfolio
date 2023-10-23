import { motion } from "framer-motion";
import NavBtn from "./NavBtn";
import CubeStone from "../assets/svgs/CubeStone.jsx";
import CompStone from "../assets/svgs/CompStone.jsx";
import MannyStone from "../assets/svgs/MannyStone.jsx";
import "../style/NavImgs.css";

const DarkContent = () => {
  return (
    <>
    <CompStone />
      <div className="home-nav" id="comp-nav">
      
        <div className="dark-stone-card">
        <NavBtn
            cardClass="nav-btn"
            cardId="portfolio-nav"
            cardFront="Portfolio"
            cardBack=""
          />
          <div className="svg-container" id="comp-svg">
            <CompStone />
          </div>
         
        </div>
      </div>

      <div className="home-nav" id="cube-nav">
        <div className="dark-stone-card">
          <NavBtn
            cardClass="nav-btn"
            cardId="about-nav"
            cardFront="About"
            cardBack=""
          />
          <div className="svg-container" id="cube-svg">
            <CubeStone />
          </div>
        </div>
      </div>
      <div className="home-nav" id="manny-nav">
        <div className="dark-stone-card">
        <NavBtn
            cardClass="nav-btn"
            cardId="contact-nav"
            cardFront="Contact"
            cardBack=""
          />
          <div className="svg-container" id="manny-svg">
            <MannyStone />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default DarkContent;
