import React from "react";

const More = () => {
  return (
    <article className="more" data-page="more">
      <header>
        <h2 className="h2 article-title">Side Projects</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {/* Project 1 */}
          <li className="blog-card">
            <figure className="blog-banner-box">
              <img
                src="./assets/images/projects/pigletz.jpg"
                alt="Pigletz"
                loading="lazy"
              />
            </figure>
            <div className="blog-content">{/* Project 1 content */}</div>
            <div className="project-buttons">{/* Project 1 buttons */}</div>
          </li>

          {/* Project 2 */}
          <li className="blog-card">
            <figure className="blog-banner-box">
              <img
                src="./assets/images/projects/sha-beats.jpg"
                alt="Sha Beats"
                loading="lazy"
              />
            </figure>
            <div className="blog-content">{/* Project 2 content */}</div>
            <div className="project-buttons">{/* Project 2 buttons */}</div>
          </li>

          {/* Project 3 */}
          <li className="blog-card">
            <figure className="blog-banner-box">
              <img
                src="./assets/images/projects/sha-pixels.png"
                alt="Sha Pixels"
                loading="lazy"
              />
            </figure>
            <div className="blog-content">{/* Project 3 content */}</div>
            <div className="project-buttons">{/* Project 3 buttons */}</div>
          </li>
        </ul>

        {/* Next Page */}
        <div className="pagination-box">
          <button
            className="pagination-button"
            data-nav-link
            data-target-section="contact"
          >
            Next &gt;
          </button>
        </div>
      </section>
    </article>
  );
};

export default More;
