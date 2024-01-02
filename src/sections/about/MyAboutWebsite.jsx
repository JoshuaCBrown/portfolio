import "../../style/MyStory.css";
import MyNewStory from "./MyNewStory";

const MyAboutWebsite = () => {
  return (
    <>
      <div className="large-about-container">
        <div className="lg-about-content">
          <h2 className="lg-about-heading">About Website</h2>

          <div className="story-container">
            {/* <h2 className="my-story-title story-title">About Me</h2> */}
            <p className="story-story ">
              This website was built using React. Animations were implemented with the Framer Motion library. Instead of utilizing a CSS framework or design library, I opted to use vanilla CSS throughout the website for two reasons: First and most importantly, I wanted to increase my fluency in CSS. I found early on in learning programming that my understanding of any framework is mostly predicated on my understanding of the underlying language and its fundamental building blocks. At the time I started designing this website, I felt that the additional abstraction and complexity of adding a new CSS framework would be far less productive than using plain CSS, both in terms of making progress on the site and in gaining familiarity with CSS itself. Second, using vanilla CSS gave me greater flexibility in coming up with a completely original design for my page, something I decided early on was a priority for my personal website. All SVGs on this website were created in Adobe Illustrator. If you are looking for more information on my design process or have any questions about the site itself, feel free to **INSERT LINK connect with me on LinkedIn INSERT LINK** or **INSERT LINK reach out to me directly. INSERT LINK** 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAboutWebsite;
