import "../../style/Experience.css";
import { rightJobs } from "./ExpeJobs";

const ExperienceBottom = () => {
  return (
    <div className="experience-bottom-container">
      <div></div>
      {rightJobs.map((job) => (
        <div className="job-container-bottom" key={job.id}>
          <div className="job-title-bot">{job.title}</div>
          <div className="job-duration-bot">{job.duration}</div>
          <div className="job-line-bot"></div>
          <div className="spacey-bot"></div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default ExperienceBottom;
