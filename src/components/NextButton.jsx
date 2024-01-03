import React from "react";

const NextButton = ({ onNavClick, activePage }) => {
  const getNextPage = () => {
    switch (activePage) {
      case "About":
        return "Certificates";
      case "Certificates":
        return "Projects";
      case "Projects":
        return "More";
      case "More":
        return "Contact";
      default:
        return null;
    }
  };

  return (
    <div className="pagination-box">
      <button
        className="pagination-button"
        data-nav-link
        onClick={() => onNavClick(getNextPage())}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default NextButton;
