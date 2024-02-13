const MyNewStory = ({ setPageSelected }) => {
  return (
    <>
      {/* <div className="my-story-container"> */}
      <div className="story-container">
        {/* <h2 className="my-story-title story-title">About Me</h2> */}
        <p className="story-story ">
          My name is Josh Brown and I am a developer, musician, and creative
          based in Atlanta, GA. I built this website to feature some of my
          personal and projects. If you are interested in working with together,
          want to offer constructive feedback on something you see here, have a
          question for me, or just want to drop a line, please don't hestitate
          to reach out. I look forward to hearing from you!
          <span className="optional-website-info">
            If you'd like to learn more about the website itself,{" "}
            <span
              className="website-info-link"
              onClick={() => setPageSelected(3)}
            >
              click here!
            </span>
          </span>
        </p>
      </div>
    </>
  );
};

export default MyNewStory;
