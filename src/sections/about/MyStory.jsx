import "../../style/MyStory.css";
import MyNewStory from "./MyNewStory";

const MyStory = () => {
  return (
    <>
      <div className="large-about-container">
        <div className="lg-about-content">
          <h2 className="lg-about-heading">About Me</h2>
          <MyNewStory />
        </div>
      </div>
    </>
  );
};

export default MyStory;
