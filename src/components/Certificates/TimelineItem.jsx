import React from "react";

const TimelineItem = ({ title, text, certificateImageSrc }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <p className="timeline-text">{text}</p>
      <div className="certificate-container">
        <img
          src={certificateImageSrc}
          alt={title}
          onClick={() => window.open(certificateImageSrc)}
        />
      </div>
    </li>
  );
};

export default TimelineItem;
