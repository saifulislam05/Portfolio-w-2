
import React from "react";

const TechnologyItem = ({ name, id,imgsrc }) => {
  return (
    <li className="technologies-item">
      <img src={imgsrc} alt={name} id={id} />
    </li>
  );
};

export default TechnologyItem;
