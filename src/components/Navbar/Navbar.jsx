import React from "react";

const Navbar = ({ onNavClick, activePage }) => {
  const pages = ["About", "Certificates", "Projects", "More", "Contact"];

  return (
    <nav className="navbar notranslate">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li className="navbar-item" key={page}>
            <button
              className={`navbar-link ${activePage === page ? "active" : ""}`}
              data-nav-link
              onClick={() => onNavClick(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
