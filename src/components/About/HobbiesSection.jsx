// HobbiesSection.jsx
import React from "react";
import HobbyItem from "./HobbyItem"; 

const HobbiesSection = ({ hobbiesData }) => {
  return (
    <section className="hobbies">
      <h3 className="h3 hobbies-title">Favorite Activities</h3>
      <ul className="hobbies-list has-scrollbar">
        {hobbiesData.map((item) => (
          <HobbyItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default HobbiesSection;
