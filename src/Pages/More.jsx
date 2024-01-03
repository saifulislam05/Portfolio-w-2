import React from "react";
import BlogCard from "../components/More/BlogCard";
import PageHeader from "../components/PageHeader";
import NextButton from "../components/NextButton";
import projectsData from "../Data/More/moreProjectsData.json";

const More = () => {
  const { projects } = projectsData; 

  return (
    <article className="more" data-page="more">
      <PageHeader title="Side Projects" />

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {projects.map((project, index) => (
            <BlogCard key={index} project={project} />
          ))}
        </ul>

        <NextButton />
      </section>
    </article>
  );
};

export default More;
