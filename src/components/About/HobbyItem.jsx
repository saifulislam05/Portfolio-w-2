// HobbyItem.jsx
import React from "react";



const HobbyItem = ({ id, image, title, description }) => {
  return (
    <li className="hobbies-item" id={id}>
      <div className="content-card" data-hobbies-item>
        <figure className="hobbies-avatar-box">
          <img
            src={image}
            alt={title}
            width="60"
            data-hobbies-avatar
          />
        </figure>

        <h4 className="h4 hobbies-item-title" data-hobbies-title>
          {title}
        </h4>

        <div className="hobbies-text" data-hobbies-text>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default HobbyItem;
