import React from "react";

const SupportMyWork = ({ supportMyWork }) => {
  return (
    <div className="content-card">
      <h3 className="h3 form-title" align="center">
        Support my work:
      </h3>
      <br />
      <center>
        <p className="about-text">{supportMyWork.description}</p>
      </center>

          {supportMyWork.supportOptions.map((option, index) => (
          <>
          
        <center key={index}>
          <a href={option.url} target="_blank" rel="noopener">
            <img src={option.icon} alt={option.name} className="support" />
          </a>
          </center>
                  <br />
              </>
      ))}
    </div>
  );
};

export default SupportMyWork;
