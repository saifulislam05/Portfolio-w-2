import React from "react";


const Certificates = () => {
  return (
    <article className="certificates" data-page="certificates">
      <header>
        <h2 className="h2 article-title">My Certificates</h2>
      </header>

      <br />
      <br />

      {/* Group 1 */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="desktop-outline"></ion-icon>
          </div>
          <h3 className="h3">Technical Competence</h3>
        </div>

        <ol className="timeline-list">{/* Remaining content for Group 1 */}</ol>

        <br />
        <br />

        {/* Group 2 */}
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="people-outline"></ion-icon>
          </div>
          <h3 className="h3">Professional Skills</h3>
        </div>

        <ol className="timeline-list">{/* Remaining content for Group 2 */}</ol>

        <br />
        <br />

        {/* Group 3 */}
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="language-outline"></ion-icon>
          </div>
          <h3 className="h3">Language Proficiency</h3>
        </div>

        <ol className="timeline-list">{/* Remaining content for Group 3 */}</ol>

        {/* Next Page */}
        <div className="pagination-box">
          <button
            className="pagination-button"
            data-nav-link
            data-target-section="projects"
          >
            Next &gt;
          </button>
        </div>
      </section>
    </article>
  );
};

export default Certificates;
