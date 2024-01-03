import React from "react";

const SocialLinks = ({ socialLinks }) => {
  return (
    <div className="content-card">
      <h3 className="h3 form-title" align="center">
        Socials:
      </h3>
      <ul className="social-list">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-item">
            <a href={link.url} className="socials-item">
              <img src={link.icon} alt={link.platform}></img>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
