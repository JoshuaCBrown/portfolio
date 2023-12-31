import "../../style/MyStory.css";
import MyNewStory from "./MyNewStory";

const MyStory = () => {
  return (
    <>
      <div className="large-about-container">
        <div className="my-story-container">
          <h2 className="my-story-title">About Me</h2>
          
          <MyNewStory />

          {/* The things I appreciate about music and woodworking are the same things I love about programming: the creative problem solving, the endless supply of new information and areas to explore, and the ability to bring an abstract idea to life in a tangible form. While I'm relatively early in my coding journey, I will hopefully soon find the right opportunity to grow as a professional developer doing something that is both personally fulfilling and professionally impactful.    */}
        </div>
      </div>
    </>
  );
};

export default MyStory;
