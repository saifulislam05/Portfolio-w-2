import React from "react";
import TimelineGroup from "../components/Certificates/TimelineGroup";

import certificatesData from '../Data/Certificates/CertificatesData.json'


const Certificates = () => {
  return (
    <article className="certificates" data-page="certificates">
      <header>
        <h2 className="h2 article-title">My Certificates</h2>
      </header>
      <br />
      <br />
      <TimelineGroup title="Technical Competence" data={certificatesData.technicalCertificatesData} />
    </article>
  );
};

export default Certificates;
