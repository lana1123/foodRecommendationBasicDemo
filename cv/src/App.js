import React, { Component } from "react";
import Home from "./components/home";
import NavBar from "./components/Navbar";
import Referees from "./components/referees";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Portfolio from "./components/portfolio";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sideDrawer from "./components/SideDrawer/SideDrawer";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <div style={{ height: "100%" }}>
          <NavBar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/referees" component={Referees} />
            <Route path="/skills" component={Skills} />
            <Route path="/education" component={Education} />
            <Route path="/experience" component={Experience} />
            <Route path="/portfolio" component={Portfolio} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
