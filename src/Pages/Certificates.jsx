import React from "react";
import TimelineGroup from "../components/Certificates/TimelineGroup";
import NextButton from "../components/NextButton";

import certificatesData from '../Data/Certificates/CertificatesData.json'


const Certificates = ({ onNavClick, activePage }) => {
  return (
    <article className="certificates" data-page="certificates">
      <header>
        <h2 className="h2 article-title">My Certificates</h2>
      </header>
      <br />
      <br />
      <TimelineGroup
        title="Technical Competence"
        data={certificatesData.technicalCertificatesData}
      />
      <NextButton onNavClick={onNavClick} activePage={activePage} />
    </article>
  );
};

export default Certificates;
