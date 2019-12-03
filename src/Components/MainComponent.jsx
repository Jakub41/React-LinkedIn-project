import React, { Component } from "react";
import NavBar from "./NavBar";
import Profile from "./Profile";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Profile />
      </div>
    );
  }
}

export default MainComponent;
