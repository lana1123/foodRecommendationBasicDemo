import React from "react";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">
            <Link to="/home" className="navbar-entry">
              Home
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/experience" className="navbar-entry">
              Experience
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/skills" className="navbar-entry">
              Skills
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/education" className="navbar-entry">
              Education
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/referees" className="navbar-entry">
              Referees
            </Link>
          </a>
        </li>
        <li>
          <a href="/">
            <Link to="/portfolio" className="navbar-entry">
              Portfolio
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
