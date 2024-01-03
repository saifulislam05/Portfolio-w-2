
import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar active" data-sidebar="">

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src="./assets/images/avatar.jpg" alt="Saiful Islam"/>
        </figure>

        <div className="info-content">
          <h1 className="name" title="Saiful Islam">Saiful Islam</h1>

          <p className="title notranslate" id="motto">Hello, World !</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn="">
          <ion-icon name="swap-vertical" role="img" className="md hydrated" aria-label="swap vertical"></ion-icon>
        </button>


      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="hourglass" role="img" className="md hydrated" aria-label="hourglass"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Age</p>
              <time id="age" className="counting-animation">21 years old</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-sharp" role="img" className="md hydrated" aria-label="location sharp"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>West Bengal, India</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="person-sharp" role="img" className="md hydrated" aria-label="person sharp"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Personality Type</p>
              <address>INTJ-T</address>
            </div>
          </li>

        </ul>

        <div className="separator"></div>

        <ul className="social-list">

          <li className="social-item">
            <a href="https://github.com/saifulislam05" className="social-link">
              <ion-icon name="logo-github" role="img" className="md hydrated" aria-label="logo github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.linkedin.com/in/developersaiful" className="social-link">
              <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/" className="social-link">
              <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://twitter.com/" className="social-link">
              <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
            </a>
          </li>


        </ul>

      </div>

    </aside>
  );
};

export default Sidebar;
