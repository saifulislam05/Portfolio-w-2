import React from 'react'
const Navbar = () => {
  return (
    <nav class="navbar notranslate">
      <ul class="navbar-list">
        <li class="navbar-item">
          <button class="navbar-link  active" data-nav-link>
            About
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            Certificates
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            Projects
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            More
          </button>
        </li>

        <li class="navbar-item">
          <button class="navbar-link" data-nav-link>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar