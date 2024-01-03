import React, { useState } from "react";
import Contact from "../../Pages/Contact";
import More from "../../Pages/More";
import Projects from "../../Pages/Projects";
import Certificates from "../../Pages/Certificates";
import About from "../../Pages/About";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  const [activePage, setActivePage] = useState("About"); // Default active page

  const renderPage = () => {
    switch (activePage) {
      case "About":
        return <About onNavClick={handleNavClick} activePage={activePage} />;
      case "Certificates":
        return (
          <Certificates onNavClick={handleNavClick} activePage={activePage} />
        );
      case "Projects":
        return <Projects onNavClick={handleNavClick} activePage={activePage} />;
      case "More":
        return <More onNavClick={handleNavClick} activePage={activePage} />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="main-content">
      <Navbar onNavClick={handleNavClick} activePage={activePage} />
      {renderPage()}
    </div>
  );
};

export default Main;
