import React from "react";

const Projects = () => {
  return (
    <article className="projects" data-page="projects">
      <header>
        <h2 className="h2 article-title">My Projects</h2>
      </header>

      <section className="projects notranslate">
        <ul className="filter-list">
          {/* Remaining content for filter-list */}
        </ul>

        <div className="filter-select-box">
          {/* Remaining content for filter-select-box */}
        </div>

        <ul className="project-list">{/* Projects List */}</ul>

        {/* Next Page */}
        <div className="pagination-box">
          <button
            className="pagination-button"
            data-nav-link
            data-target-section="more"
          >
            Next &gt;
          </button>
        </div>
      </section>
    </article>
  );
};

export default Projects;
