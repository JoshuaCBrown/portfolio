import { leftJobs, rightJobs } from "./ExpeJobs";
import "../../style/Experience.css";


const ExperienceBottom = () => {
  return (
    <div className="experience-bottom-container">
      <div></div>
      {rightJobs.map((job) => (
        <div className="job-container-bottom" key={job.id}>
          <h4 className="job-title-bot">{job.title}</h4>
          <h5 className="job-duration-bot">{job.duration}</h5>
          <div className="job-line-bot"></div>
          <div className="spacey-bot"></div>
        </div>
      ))}  
      <div></div>    
    </div>
  )
};

export default ExperienceBottom;