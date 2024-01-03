
import React from "react";

const BlogCard = ({ project }) => {
  const { imageSrc, categories, title, description, links } = project;

  return (
    <li className="blog-card">
      <figure className="blog-banner-box">
        <img src={imageSrc} alt={title} loading="lazy" />
      </figure>
      <div className="blog-content">
        <div className="blog-meta">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <p className="blog-category">{category}</p>
              {index < categories.length - 1 && <span className="dot"></span>}
            </React.Fragment>
          ))}
        </div>
        <h3 className="h3 blog-item-title">{title}</h3>
        <p className="blog-text">{description}</p>
      </div>
      <div className="project-buttons">
        {links.website && (
          <a href={links.website}>
            <ion-icon name="globe-outline"></ion-icon> Website
          </a>
        )}
        {links.instagram && (
          <a href={links.instagram}>
            <ion-icon name="camera-outline"></ion-icon> Instagram
          </a>
        )}
        {links.youtube && (
          <a href={links.youtube}>
            <ion-icon name="videocam"></ion-icon> YouTube
          </a>
        )}
        {links.spotify && (
          <a href={links.spotify}>
            <ion-icon name="musical-notes"></ion-icon> Spotify
          </a>
        )}
      </div>
    </li>
  );
};

export default BlogCard;
