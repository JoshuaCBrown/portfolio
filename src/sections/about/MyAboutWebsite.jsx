import { Link } from "react-router-dom";
import "../../style/MyStory.css";

const MyAboutWebsite = () => {
  return (
    <>
      <div className="large-about-container">
        <div className="lg-about-content">
          <h2 className="lg-about-heading">About Website</h2>

          <div className="story-container">
            {/* <h2 className="my-story-title story-title">About Me</h2> */}
            <p className="story-story ">
              This website was built using React. Animations were implemented
              with the Framer Motion library. Instead of utilizing a CSS
              framework or design library, I opted for vanilla CSS. I made this
              decision for two reasons: First and foremost, I wanted to increase
              my fluency in CSS. Second, using vanilla CSS gave me greater
              flexibility in coming up with a completely original design for my
              page, something I decided early on was a priority for my personal
              website. All SVGs on this website were created from scratch in
              Adobe Illustrator. If you are looking for more information on my
              design process or have any questions about the site itself, feel
              free to&nbsp;
              <a
                href="https://www.linkedin.com/in/josh-brown-a5a24125a/"
                target="_blank"
              >
                connect with me
              </a>{" "}
              on LinkedIn or <Link to="/connect">reach out directly</Link>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAboutWebsite;
