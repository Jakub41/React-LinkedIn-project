import React, { Component } from "react";
import NavBar from "./NavBar";
import NewJumbotron from "./NewJumbotron";
import Profile from "./Profile";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Profile />
        <NewJumbotron />
      </div>
    );
  }
}

export default MainComponent;
