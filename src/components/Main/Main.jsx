import React from 'react'
import Projects from '../../Pages/Projects';
// import Certificates from '../../Pages/Certificates';
// import About from '../../Pages/About';
import Navbar from '../Navbar/Navbar';

const Main = () => {
  return (
    <div className="main-content">
      <Navbar />
      {/* <About/> */}
      {/* <Certificates /> */}
      <Projects/>
    </div>
  );
}

export default Main