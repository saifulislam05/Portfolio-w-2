import React from "react";
import CopyEmailButton from "../components/Contact/CopyEmailButton";
import ScheduleVideoCall from "../components/Contact/ScheduleVideoCall";
import SocialLinks from "../components/Contact/SocialLinks";
import SupportMyWork from "../components/Contact/SupportMyWork";
import PageHeader from "../components/PageHeader";
import contactData from "../Data/Contact/ContactData.json";

const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <PageHeader title="Contact" />

      {/* Copy Email Address */}
      <CopyEmailButton email={contactData.copyEmail} />
      <br />
      {/* Schedule Video Call */}
      <ScheduleVideoCall
        scheduleVideoCallUrl={contactData.scheduleVideoCallUrl}
      />
      <br />

      {/* Social Links */}
      <SocialLinks socialLinks={contactData.socialLinks} />
      <br />

      {/* Donations */}
      <SupportMyWork supportMyWork={contactData.supportMyWork} />
    </article>
  );
};

export default Contact;
