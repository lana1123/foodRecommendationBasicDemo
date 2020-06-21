import React, { Component } from "react";
import FoodList from "./components/foodList";
import NavBar from "./components/navbar";
import RandomPick from "./components/randomPick";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = {
    //declaring a state where items containing text and key
    pickedFood: [],
    duration: "duration",
    food: [],
    currentFood: {
      text: "",
      key: "",
    },
  };

  constructor(props) {
    super(props);
  }

  handleInput = (e) => {
    this.text = e.target.value;
    this.setState({
      currentFood: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  handleClick = () => {
    const foodList = this.state.food;

    var n = 1;
    const dur = this.state.duration;
    console.log(dur);

    if (dur === "duration") {
      n = 0;
    } else if (dur === "timebeing") {
      n = 1;
    } else if (dur === "day") {
      n = 2;
    } else if (dur === "week") {
      n = 3;
    } else {
      n = 4;
    }

    this.setState({
      duration: dur,
      pickedFood: foodList.sort(() => 0.5 - Math.random()).slice(0, n),
    });
  };

  addFood = (e) => {
    e.preventDefault();
    const newFav = this.state.currentFood;
    if (newFav.text !== "") {
      const newFavs = [...this.state.food, newFav];
      this.setState({
        food: newFavs,
        currentFood: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteFood = (key) => {
    const filteredFavFood = this.state.food.filter((food) => food.key !== key);
    this.setState({
      food: filteredFavFood,
    });
  };

  updateFood = (text, key) => {
    const favFoods = this.state.food;
    favFoods.map((food) => {
      if (food.key === key) {
        food.text = text;
      }
    });
    this.setState({
      food: favFoods,
    });
  };

  handleDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Redirect to="/foodlist" />
            </Route>

            <Route
              path="/foodlist"
              render={(props) => (
                <FoodList
                  {...props}
                  food={this.state.food}
                  handleInput={this.handleInput}
                  addFood={this.addFood}
                  updateFood={this.updateFood}
                  deleteFood={this.deleteFood}
                  currentFood={this.state.currentFood}
                />
              )}
            />
            <Route
              path="/randompick"
              component={() => (
                <RandomPick
                  food={this.state.food}
                  handleClick={this.handleClick}
                  pickedFood={this.state.pickedFood}
                  duration={this.state.duration}
                  handleDuration={this.handleDuration}
                  isFlipped={this.isFlipped}
                />
              )}
            />
          </Switch>
        </header>
      </Router>
    );
  }
}

export default App;
