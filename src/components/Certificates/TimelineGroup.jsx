import React from "react";
import { FaDesktop } from "react-icons/fa";
import TimelineItem from "./TimelineItem";

const TimelineGroup = ({ title, data }) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <FaDesktop />
        </div>
        <h3 className="h3">{title}</h3>
      </div>
      <ol className="timeline-list">
        {data.map((certificate, index) => (
          <TimelineItem key={index} {...certificate} />
        ))}
      </ol>
      <br />
      <br />
    </section>
  );
};

export default TimelineGroup;
