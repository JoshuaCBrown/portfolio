import "../../style/Porfolio.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitAnim from "../../transit-routes/TransitAnim";
import briefcaseImg from "../../assets/portfolio-images/webqual/briefcase-img.jpg";
import computerImg from "../../assets/portfolio-images/webqual/computer-img.jpg";


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
      cat: "hardware",
    },
  ];

  return (
    <>
      <TransitAnim>
        <div className="portfolio-container">
          <div className="portfolio-item-container">
            {portfolioContent.map((item) => (
              <div className="portfolio-item" key={item.id}>
                <div className={item.cat}></div>
                <div className="img-div">
                  <img src={item.img} className="portfolio-img" id={item.id} />
                  </div>
              </div>
            ))}
          </div>
        </div>
      </TransitAnim>
    </>
  );
};
export default Portfolio;
