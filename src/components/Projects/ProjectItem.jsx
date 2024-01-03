
import React from "react";

const ProjectItem = ({
  title,
  category,
  imageSrc,
  link,
  description,
  technologies,
}) => {
  return (
    <li
      className="project-item active"
      data-filter-item
      data-category={category}
    >
      <a href={link}>
        <figure className="project-img">
          <img src={imageSrc} loading="lazy" alt={title} />
        </figure>
      </a>
      <h3 className="project-title">{title}</h3>
      <p className="project-category">{description}</p>
      <p className="project-development">{technologies}</p>
      <div className="project-buttons">
        <a href={link} style={{ pointerEvents: "none", opacity: 0.6 }}>
          <ion-icon name="eye-outline"></ion-icon> Preview
        </a>
        
      </div>
    </li>
  );
};

export default ProjectItem;
