import React from 'react'

const NextButton = () => {
  return (
    <div className="pagination-box">
      <button
        className="pagination-button"
        data-nav-link
        data-target-section="certificates"
      >
        Next &gt;
      </button>
    </div>
  );
}

export default NextButton