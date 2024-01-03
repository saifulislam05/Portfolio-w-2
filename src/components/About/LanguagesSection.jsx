// LanguagesSection.jsx
import React from "react";
import LanguagesItem from "./LanguagesItem"; // Import the LanguagesItem component

const LanguagesSection = ({ title, languagesData }) => {
  return (
    <section className="languages content-card">
      <h3 className="h3 languages-title">{title}</h3>
      <ul className="languages-list">
        {languagesData.map((item, index) => {
          // Check if "percentage" is present in the item
          if ("percentage" in item) {
            // If "percentage" is present, it's a programming language
            return (
              <LanguagesItem
                key={index}
                language={item.language}
                percentage={item.percentage}
              />
            );
          } else if ("fluency" in item) {
            // If "fluency" is present, it's a human language
            return (
              <LanguagesItem
                key={index}
                language={item.language}
                fluency={item.fluency}
              />
            );
          }
          // Handle other cases or provide a default behavior
          return null;
        })}
      </ul>
    </section>
  );
};

export default LanguagesSection;
