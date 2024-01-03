// ProjectList.js
import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
