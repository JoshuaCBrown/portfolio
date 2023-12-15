
import {motion} from "framer-motion";
import arrow from "../../assets/commonicons/arrow.png";

import "../../style/AboutNav.css";


const AboutNav = ({ pageSelected, setPageSelected }) => {

  const abtNav = (whichWay) => {
    if (pageSelected + whichWay === 4) {
      setPageSelected(0);
    } else if (pageSelected + whichWay === -1) {
      setPageSelected(3);
    } else {
      const thisWay = pageSelected + whichWay;
      setPageSelected(thisWay);
    }
  };

  const specificSections = [
    {
      section: 'Skills',
      id: 'skillSection',
    },
    { 
      section: 'Education',
      id: 'educationSection',
    },
    {
      section: 'Experience',
      id: 'experienceSection',
    },
    {
      section: 'Interests',
      id: 'interestsSection',
    },
  ];

  const listClassify = (thisHeading) => {
    return pageSelected === thisHeading ? (
       "selected-nav"
    ) : (
       "about-nav-item"
    );
  }

  return (
    <div className="about-detailed-nav">
      <button className="left-abt-arrow" onClick={() => abtNav(-1)}>
        <img src={arrow} id="left-arrow-img" />
      </button>
      <div className="top-nav-about-headings">
        <ul className="about-nav-list">
          {specificSections.map((navItem, i) => (
            <motion.li className={listClassify(i)} id={i} key={navItem.id} onClick={() => setPageSelected(i)}>
              {navItem.section}
            </motion.li>
          ))}
        </ul>
      </div>
      <button className="right-abt-arrow" onClick={() => abtNav(1)}>
        <img src={arrow} id="right-arrow-img" />
      </button>
    </div>
  );
};

export default AboutNav;
