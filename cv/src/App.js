import React, { Component } from "react";
import Home from "./components/home";
import NavBar from "./components/Navbar";
import Referees from "./components/referees";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Portfolio from "./components/portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/referees" component={Referees} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experience} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default App;
