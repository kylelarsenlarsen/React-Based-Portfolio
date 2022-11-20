import "./aboutStyle.css";
import React from "react";

const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
            <div className="about-image">
                    <img src={require("../images/me.jpg")} alt="Kyle Larsen" />
                </div>
                <div className="about-container-2">
                    <h1>Welcome!</h1>
                    <br></br>
                    <p>
                        Hello! I'm Kyle from Utah County, Utah. I'm currently a student enrolled in the full stack web development course at University of Utah. Feel free to explore my site and check out my recent projects. If you see anything you like and need my services, you can get in touch with me through my contact page!
                    </p>
                    <br></br>
                </div>
            </div>
        </div>
    );
};

export default About;