import React from 'react';
import "./navStyle.css";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Nav = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    return (
        <nav className="nav-section">
          <ul className="nav-menu">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <Link to="/">About Me</Link>
            </li>
            <li className={splitLocation[1] === "portfolio" ? "active" : ""}>
              <Link to="/project">Portfolio</Link>
            </li>
            <li className={splitLocation[1] === "resume" ? "active" : ""}>
              <Link to="/resume">Resume</Link>
            </li>
            <li className={splitLocation[1] === "contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    );
  };
  
  export default Nav;