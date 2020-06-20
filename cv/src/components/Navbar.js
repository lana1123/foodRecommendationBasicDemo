import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

const NavBar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <h2>My CV</h2>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
