import React from "react";

const CopyEmailButton = ({ email }) => {
  const copyEmail = () => {
    
  };

  return (
    <div className="content-card">
      <h3 className="h3 form-title" align="center">
        Email:
      </h3>
      <div className="container">
        <div className="email-field">
          <div className="email-text">{email}</div>
          <button className="copy-button" onClick={copyEmail}>
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CopyEmailButton;
