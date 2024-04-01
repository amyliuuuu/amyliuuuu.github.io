import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './Footer';
import Dashboard from './Dashboard';
import About from './About';
import Experience from './Experience';
import PIPProjects from './PIPProjects';
import CreativeProjs from './CreativeProjs';
import Contact from './Contact.jsx'
import Projects from './Projects.jsx';

const PageList = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/PIPprojects" element={<PIPProjects/>} />
        <Route path="/creativeProjs" element={<CreativeProjs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      <hr />
      <Footer />
    </>
  );
}

export default PageList;
