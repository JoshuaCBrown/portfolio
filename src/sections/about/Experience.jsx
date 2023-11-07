const Experience = () => {
  return (
    <>
      <div className="experience-container" id="experience">
        <h2 className="about-section-heading" id="experience-section-heading">
          Experience
        </h2>
        <div className="timeline-container">
          <div className="timeline-left">
            <div className="jobs-left">
              <div className="job-left">
                <div className="job-description"></div>
                <div className="description-arrow-left">
                  <div className="top-arrow-left"></div>
                  <div className="bottom-arrow-left"></div>
                </div>
              </div>
              <div className="job-left"></div>
              <div className="job-left"></div>
              <div className="job-left"></div>
            </div>
            <div className="color-coded-time" id="color-code-left">
              <div className="time-color-left" id="bdr-time"></div>
              <div className="time-color-left" id="repair-time"></div>
              <div className="time-color-left" id="writer-time"></div>
              <div className="time-color-left" id="tutor-time"></div>
            </div>
          </div>
          <div className="timeline-right">
            <div className="color-coded-time" id="color-code-right">
              <div className="time-color-right" id="musician-time"></div>
              <div className="time-color-right" id="workshopper-time"></div>
              <div className="time-color-right" id="bartender-time"></div>
            </div>
            <div className="jobs-right">
              <div className="job-right">
              <div className="description-arrow-right"></div>
              <div className="job-description"></div>
              </div>
              <div className="job-right"></div>
              <div className="job-right"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
