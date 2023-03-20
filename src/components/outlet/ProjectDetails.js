import React from "react";

function ProjectDetails({ info }) {
  const [...projects] = info;

  return (
    <div className="project-details">
      <div className="section-heading">PROJECTS</div>
      <div className="project-items">
        {projects.map((project) => {
          return (
            <div className="item" key={project.id}>
              <div className="title">
                <span className="project-title">{project.text}</span>
                <span>{project.subTitle}</span>
              </div>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProjectDetails;
