import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Achievements from "./Achievements.jsx";
import Interests from "./Interests.jsx";

import KeysImg from "../../assets/svgs/KeysImg.jsx";
import WoodworkingImg from "../../assets/svgs/WoodworkingImg.jsx";
import SkylineImg from "../../assets/svgs/SkylineImg.jsx";
import BenchyImg from "../../assets/svgs/BenchyImg.jsx";

import "../../style/About.css";

const About = ({ themeStyle }) => {
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

  return (
    <>
      <div className="about-container">
        <div className="intro">My name is Josh</div>
        <div className="intro-two">
          
          I enjoy problem-solving and making things
          <p>I live in Atlanta, and currently work in sales for a company that provides technology to largescale construction projects all over the world.</p>
          <p>I spend a lot of my time creating. Some of my hobbies include</p>
          <p>Becoming a programmer has been a lifelong goal of mine. While I am relatively new to coding, I have always had a strong passion for technology and computing. At the beginning of 2023, I was looking to make a career change from my previous role as an independent audio engineer and producer. While I enjoyed my work, as music has been a lifelong passion of mine, I was looking to get into something with more stability and room to grow. I was accepted into a program called Stiegler EdTech, which is similar to a coding bootcamp, except that it is free, and students are paid a stipend during the 6-month duration of the program and are guaranteed a job upon graduation. Unlike other profit-share bootcamps, graduates were not required to pay back the stipend, nor were they required to stay with their placement company for any period of time. The nature of this type of program made it highly competitive, however I performed well and was ecstatic to be accepted into the program. Unfortunately, due to the economic uncertainty unfolding during this time, the Atlanta cohort was delayed indefinitely. I was given the option to relocate to Detroit, Michigan to participate in their cohort but chose to remain close to my family and loved ones here in Atlanta.   
            </p>
            <p>
              The application to apply to that program involved a multi-stage application and interview process, involving lengthy aptitude tests, logic puzzles, and critical thinking exercises desigend to test applicants on their future potential as a programmer. While I was undoubtedly disappointed the program did not work out, my acceptance into Stiegler gave me the assurance that this type of career could be something that I not only enjoyed, but excelled at. At that, I began learning to code in my freetime, using a mix of internet resources (namely The Odin Project and Free Code Camp) and several books. 
            </p>
        </div>
        {themeStyle ? (
          <>
            <BenchyImg svgVariants={darkSvgVariants} />{" "}
            <SkylineImg svgVariants={darkSvgVariants} />
          </>
        ) : (
          <div style={{display: 'flex', width: '500px'}}>
            <KeysImg svgVariants={lightSvgVariants} />
            <WoodworkingImg svgVariants={lightSvgVariants} />
            <BenchyImg svgVariants={lightSvgVariants} />
            <SkylineImg svgVariants={lightSvgVariants} />
          </div>
        )}
      </div>
    </>
  );
};

export default About;
