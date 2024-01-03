// LanguagesItem.jsx
import React from "react";

const getFluencyDataValue = (fluency) => {
  switch (fluency.toLowerCase()) {
    case "fluent":
      return 100;
    case "native":
      return 80;
    case "conversational":
      return 50;
    default:
      return 0;
  }
};

const LanguagesItem = ({ language, percentage, fluency }) => {
    return percentage !== undefined ? (
           <li className="languages-item">
            <div className="title-wrapper">
              <h5 className="h5">{language}</h5>
                    <data value={percentage}>{ percentage}%</data>
            </div>
            <div className="languages-progress-bg">
              <div
                className="languages-progress-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </li> 
        ) : (
                <li className="languages-item">
            <div className="title-wrapper">
              <h5 className="h5">{language}</h5>
              <data value={fluency}>{fluency}</data>
            </div>
            <div className="languages-progress-bg">
              <div
                className="languages-progress-fill"
                                style={{ width: `${getFluencyDataValue(fluency)}%` }}

              ></div>
            </div>
          </li>
 )


};

export default LanguagesItem;
