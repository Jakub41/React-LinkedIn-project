import React, { Component } from "react";
import NavBar from "./NavBar";
import JumbotronComponent from "./JumbotronComponent";
import Profile from "./Profile";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumbotronComponent />
        <Profile />
      </div>
    );
  }
}

export default MainComponent;
