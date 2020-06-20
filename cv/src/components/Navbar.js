import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-entry">
        Home
      </Link>
      <Link to="/experience" className="navbar-entry">
        Experience
      </Link>
      <Link to="/skills" className="navbar-entry">
        Skills
      </Link>
      <Link to="/education" className="navbar-entry">
        Education
      </Link>
      <Link to="/referees" className="navbar-entry">
        Referees
      </Link>
      <Link to="/portfolio" className="navbar-entry">
        Portfolio
      </Link>
    </nav>
  );
};

export default NavBar;
