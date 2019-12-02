import React, { Component } from "react";
import { getProfile } from "../Services/ProfileCRUD";

export default class Profile extends Component {
  state = {
    profile: null
  };

  componentDidMount = async () => {
    let myProfile = getProfile();
    console.log(myProfile);



    this.setState = {
      profile: myProfile
    };
  };

  render() {
    return (
      <div>
        {this.state.profile ? (
          <>
            <div>{this.state.profile.name}</div>
            <div>{this.state.profile.bio}</div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
