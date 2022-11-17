import React from "react";
import './index.css';
import AboutPage from './nav-pages/about';
import ContactPage from './nav-pages/contact';
import ProjectPage from './nav-pages/project';
import ResumePage from './nav-pages/resume';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/project" element={<ProjectPage />} />
    <Route path="/resume" element={<ResumePage />} />
    </Routes>
    </>
  );
};

export default App;
