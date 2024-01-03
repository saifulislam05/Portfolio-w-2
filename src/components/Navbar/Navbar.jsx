import React from 'react'
const Navbar = () => {
  return (
    <nav className="navbar notranslate">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link  active" data-nav-link>
            About
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Certificates
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Projects
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            More
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar