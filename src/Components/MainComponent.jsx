import React, { Component } from "react";
import NavBar from "./NavBar";
import JumbotronComponent from "./JumbotronComponent";
import NewJumbotron from "./NewJumbotron";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumbotronComponent />
        <NewJumbotron />
      </div>
    );
  }
}

export default MainComponent;
