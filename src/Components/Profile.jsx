import React, { Component } from "react";
import { getProfile } from "../Services/ProfileCRUD";
import { Container } from "reactstrap"

export default class Profile extends Component {
  state = {
    profile: []
  };

  componentDidMount = async () => {
    getProfile().then(
      data =>
        (this.setState = {
          profile: data
        })
    );
    console.log();
  };

  render() {
    return (
      <div>
        {this.state.data ? (
          <>
            <div>{this.state.profile.name}</div>
            <div>{this.state.profile.bio}</div>
            <img src={this.state.profile.img} alt="profile" />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
