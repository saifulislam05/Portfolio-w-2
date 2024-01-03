
import React from "react";

const FilterList = () => {
  return (
    <ul className="filter-list">
      <li className="filter-item">
        <button className="active" data-filter-btn>
          All
        </button>
      </li>
      <li className="filter-item">
        <button data-filter-btn>Websites</button>
      </li>
      <li className="filter-item">
        <button data-filter-btn>Applications</button>
      </li>
      <li className="filter-item">
        <button data-filter-btn>Games</button>
      </li>
    </ul>
  );
};

export default FilterList;
