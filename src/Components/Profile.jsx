import React, { Component } from "react";
import { getProfile } from "../Services/ProfileCRUD";
import { Jumbotron } from "./Jumbotron"

export default class Header extends Component {
  constructor(...props) {
    super(props);
    this.state = {
      LinkedInData: []
    };
  }
  componentDidMount = async () => {
    const myProfile = await getProfile();

    setTimeout(() => {
      this.setState({ LinkedInData: myProfile });
    }, 100);
  };
  render() {
    const { ...props } = this.state;

    return (
      // <div>
      //   {LinkedInData.name ? (
      //     <div>
      //       <h1>LinkedIn name is {LinkedInData.name}</h1>
      //       <h1>LinkedIn surname is {LinkedInData.surname}</h1>
      //       <h1>LinkedIn email is {LinkedInData.email}</h1>
      //       <h1>LinkedIn bio is {LinkedInData.bio}</h1>
      //       <h1>LinkedIn title is {LinkedInData.title}</h1>
      //       <h1>LinkedIn area is {LinkedInData.area}</h1>
      //       <h1>LinkedIn username is {LinkedInData.username}</h1>
      //       <img src={LinkedInData.image} alt="profile" />
      //     </div>
      //   ) : (
      //     <h1>Loading...</h1>
      //   )}
      // </div>
      <Jumbotron {...props} />
    );
  }
}
