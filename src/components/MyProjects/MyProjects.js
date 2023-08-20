import "./MyProjects.css";
import { projectsData } from "../../data/projectsData";

const MyProjects = () => {
  return (
    <>
      <h2 className="projectsTitle">MY PROJECTS</h2>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div className="projectBox" key={index}>
            <img
              className="projectImage"
              src={project.image}
              alt="project screen"
            ></img>
            <h3 className="projectName">{project.name}</h3>
            <p className="projectDescription">{project.description}</p>
            <div className="projectButtons">
              <a
                href={project.github}
                className="gitBtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                href={project.demo}
                className="demoBtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                DEMO
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyProjects;
