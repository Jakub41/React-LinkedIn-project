import React, { Component } from "react";
import { getProfile } from "../Services/ProfileCRUD";
import JumbotronComponent from "./JumbotronComponent"

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LinkedInData: []
    };
  }
  componentDidMount = async () => {
    const myProfile = await getProfile();// from profileCRUD to fetch all data line 8

    setTimeout(() => {
      this.setState({ LinkedInData: myProfile }); // to put data of a profile
    }, 100);
  };
  render() {
    //const {props} = this.state;
// ... are used in long queries to propagate the data of ES6 (spread operater)
    return (
    
      <JumbotronComponent />
    );
  }
}
