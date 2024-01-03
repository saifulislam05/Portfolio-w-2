
import React from "react";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { IoLocationSharp, IoPersonSharp } from "react-icons/io5";
import { FaTwitter ,FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar active" data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Saiful Islam"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Saiful Islam">
            Saiful Islam
          </h1>

          <p className="title notranslate" id="motto">
            Hello, World !
          </p>
        </div>

        <button className="info_more-btn" data-sidebar-btn="">
          <ion-icon
            name="swap-vertical"
            role="img"
            className="md hydrated"
            aria-label="swap vertical"
          ></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaRegHourglassHalf />
            </div>
            <div className="contact-info">
              <p className="contact-title">Age</p>
              <time id="age" className="counting-animation">
                21 years old
              </time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationSharp />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>West Bengal, India</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPersonSharp />
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
              <FaGithub />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/developersaiful"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/" className="social-link">
              <FaInstagram />
            </a>
          </li>

          <li className="social-item">
            <a href="https://twitter.com/" className="social-link">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
