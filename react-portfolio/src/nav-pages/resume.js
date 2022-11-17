import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import Resume from "../components/resume";
import Footer from "../components/footer";

const ResumePage = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <Resume />
        <Footer />
      </div>
    </>
  );
};

export default ResumePage;