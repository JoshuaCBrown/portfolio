import { leftJobs, rightJobs } from "./ExpeJobs";
import "../../style/Experience.css";



const ExperienceTop = () => {
  return (
    <div className="experience-top-container">
      {leftJobs.map((job) => (
        <div className="job-container-top" key={job.id}>
          <div className="spacey"></div>
          <div className="job-title">{job.title}</div>
          <div className="job-duration">{job.duration}</div>
          <div className="job-line"></div>
        </div>
      ))}      
    </div>
  )
};

export default ExperienceTop;