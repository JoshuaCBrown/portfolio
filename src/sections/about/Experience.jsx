import { leftJobs, rightJobs } from "./ExpeJobs";
import { motion } from "framer-motion";

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
              {leftJobs.map((job) => (
                <div className="job-left" key={job.id}>
                  <div className={
                      job.lowArrow
                        ? "job-description jd-bg-left-low"
                        : "job-description jd-bg-left"
                    } id={job.id}>
                    <motion.div
                    >
                      <h3>{job.title}</h3>
                      <em>{job.duration}</em>
                    </motion.div>
                    <motion.div
                      className="job-highlights"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ul>
                        {job.highlights.map((highlight) => (
                          <li>{highlight}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  <div
                    className={
                      job.lowArrow
                        ? "description-arrow-left low-arrow"
                        : "description-arrow-left"
                    }
                  ></div>
                </div>
              ))}
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
              {rightJobs.map((job) => (
                <div className="job-right" key={job.id}>
                  <div
                    className={
                      job.lowArrow
                        ? "description-arrow-right low-arrow"
                        : "description-arrow-right"
                    }
                  ></div>
                  <div
                    className={
                      job.lowArrow
                        ? "job-description jd-bg-right-low"
                        : "job-description jd-bg-right"
                    }
                    id={job.id}
                  >
                    <div>
                      <h3>{job.title}</h3>
                      <em>{job.duration}</em>
                    </div>
                    <motion.div
                      className="job-highlights"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ul>
                        {job.highlights.map((highlight) => (
                          <li>{highlight}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
