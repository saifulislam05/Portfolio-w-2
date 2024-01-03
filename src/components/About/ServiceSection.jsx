// ServiceSection.jsx
import React from "react";
import ServiceItem from "./ServiceItem";


const ServiceSection = ({ title, serviceData }) => {
  return (
    <section className="service">
      <h3 className="h3 service-title">{title}</h3>
      <ul className="service-list">
        {serviceData.map((item, index) => {
          return (
            <ServiceItem
              key={index}
              iconSrc={item.iconSrc}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ServiceSection;
