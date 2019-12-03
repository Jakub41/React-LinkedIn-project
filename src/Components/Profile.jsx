import React, { Component } from "react";
import { getProfile } from "../Services/ProfileCRUD";
import JumbotronComponent from "./JumbotronComponent";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LinkedInData: []
    };
  }
  componentDidMount = async () => {
    const myProfile = await getProfile(); // from profileCRUD to fetch all data line 8

    setTimeout(() => {
      this.setState({ LinkedInData: myProfile }); // to put data of a profile
    }, 100);
  };
  render() {
    const { LinkedInData } = this.state;

    return (
      <div>
        {LinkedInData.name ? (
          <>
            <h1>LinkedIn name is {LinkedInData.name}</h1>
            <h1>LinkedIn surname is {LinkedInData.surname}</h1>
            <h1>LinkedIn email is {LinkedInData.email}</h1>
            <h1>LinkedIn bio is {LinkedInData.bio}</h1>
            <h1>LinkedIn title is {LinkedInData.title}</h1>
            <h1>LinkedIn area is {LinkedInData.area}</h1>
            <h1>LinkedIn username is {LinkedInData.username}</h1>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}
