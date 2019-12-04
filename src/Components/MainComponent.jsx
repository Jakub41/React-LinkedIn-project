import React, { Component } from "react";
import NavBar from "./NavBar";
import ProfileJumbotron from './ProfileJumbotron';
import Profile from "./Profile";

class MainComponent extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Profile />
        <ProfileJumbotron />
      </div>
    );
  }
}

export default MainComponent;
