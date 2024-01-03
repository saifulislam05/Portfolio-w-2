import React from "react";
import PageHeader from "../components/PageHeader"
import ProjectList from "../components/Projects/ProjectList";
import projectsData from '../Data/Projects/projectsData.json'
import NextButton from '../components/NextButton'
import FilterList from "../components/Projects/FilterList";

const Projects = ({ onNavClick, activePage }) => {
  return (
    <article className="projects" data-page="projects">
      <PageHeader title="My Projects" />

      <section className="projects notranslate">
        <FilterList />
        <ProjectList projects={projectsData.projectsData} />

        <NextButton onNavClick={onNavClick} activePage={activePage} />
      </section>
    </article>
  );
};

export default Projects;
