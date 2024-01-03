
import React from "react";
import TechnologyItem from "./TechnologyItem"; 

const TechnologiesSection = ({title, technologiesData }) => {
  return (
    <section className="technologies content-card" id="tech-skills">
      <h3 className="h3 technologies-title">{title}</h3>
      <br />
      <ul className="technologies-list has-scrollbar slider">
        {technologiesData.map((item) => (
          <TechnologyItem
            key={item.id}
            name={item.name}
            id={item.id}
            imgsrc={item.imgsrc}
          />
        ))}
      </ul>
    </section>
  );
};

export default TechnologiesSection;
