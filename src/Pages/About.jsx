import React from "react";
import AboutText from "../components/About/AboutText";
import HobbiesSection from "../components/About/HobbiesSection";
import LanguagesSection from "../components/About/LanguagesSection";
import ServiceSection from "../components/About/ServiceSection";
import TechnologiesSection from "../components/About/TechnologiesSection";
import NextButton from "../components/NextButton";
import PageHeader from "../components/PageHeader";
import aboutData from '../Data/About/aboutData.json'

const About = ({ onNavClick, activePage }) => {
  const {
    primaryFocusData,
    exploringCreativityData,
    programmingLanguages,
    humanLanguages,
    developmentSkills,
    hobbies,
  } = aboutData;

  return (
    <article className="about active" data-page="about">
      <PageHeader title="About me" />
      <AboutText />

      <ServiceSection title="Primary Focus" serviceData={primaryFocusData} />

      <ServiceSection
        title="Exploring Creativity"
        serviceData={exploringCreativityData}
      />

      <LanguagesSection
        title="Programming Languages"
        languagesData={programmingLanguages}
      />
      <LanguagesSection
        title="Human Languages"
        languagesData={humanLanguages}
      />

      <TechnologiesSection
        title="Development Skills"
        technologiesData={developmentSkills}
      />

      <HobbiesSection hobbiesData={hobbies} />

      <NextButton onNavClick={onNavClick} activePage={activePage} />
    </article>
  );
};

export default About;
