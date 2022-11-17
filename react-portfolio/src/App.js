import React from "react";
import './index.css';
import About from './nav-pages/about';
import Project from './nav-pages/project';
import Contact from './nav-pages/contact';
import Resume from './nav-pages/resume';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<About />} />
    <Route path="/project" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
