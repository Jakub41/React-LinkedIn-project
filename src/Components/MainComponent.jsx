import React, { Component } from "react";
import NavBar from "./NavBar";
import NewJumbotron from "./NewJumbotron";
import Profile from "./Profile";

class MainComponent extends Component {
  setProfile = photo => {
    this.childComponent.setProfile(photo);
  };

  render() {
    return (
      <>
        <NavBar onRefs={ref => (this.childComponent = ref)} />
        <Profile setProfile={this.setProfile} />
        <NewJumbotron />
      </>
    );
  }
}

export default MainComponent;
