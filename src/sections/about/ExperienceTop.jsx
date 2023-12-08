import { leftJobs, rightJobs } from "./ExpeJobs";
import "../../style/Experience.css";



const ExperienceTop = () => {
  return (
    <div className="experience-top-container">
      {leftJobs.map((job) => (
        <div className="job-container-top" key={job.id}>
          <div className="spacey"></div>
          <h4 className="job-title">{job.title}</h4>
          <h5 className="job-duration">{job.duration}</h5>
          <div className="job-line"></div>
        </div>
      ))}      
    </div>
  )
};

export default ExperienceTop;