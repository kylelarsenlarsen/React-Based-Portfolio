import "./aboutStyle.css";
import React from "react";

const About = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h1>Welcome!</h1>
                    <br></br>
                    <p>
                        Hello! I'm Kyle from Utah County, Utah. I'm currently a student enrolled in the full stack development course at University of Utah.
                    </p>
                    <br></br>
                </div>
                <div className="about-image">
                    <img></img>
                </div>
            </div>
        </div>
    );
};

export default About;