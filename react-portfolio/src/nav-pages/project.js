import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Project from "../components/project";
import Footer from "../components/footer";

const ProjectPage = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <Project />
        <Footer />
      </div>
    </>
  );
};

export default ProjectPage;