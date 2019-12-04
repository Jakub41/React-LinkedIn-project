import React, { Component } from "react";
import { getProfile, updateProfile } from "../Services/ProfileCRUD";
import JumbotronComponent from "./JumbotronComponent";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      LinkedInData: [],
      form: {}
    };
  }

  componentDidMount = async () => {
    const myProfile = await getProfile(); // from profileCRUD to fetch all data line 8

    setTimeout(() => {
      this.props.setProfile(myProfile.image);
      this.setState({
        LinkedInData: myProfile,
        form: myProfile
      }); // to put data of a profile
    }, 100);
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    let form = this.state.form;
    form[name] = value;
    this.setState({ form });
  };

  handleSubmit = async () => {
    await updateProfile(
      JSON.stringify(this.state.form),
      this.state.LinkedInData._id
    );
    setTimeout(() => {
      alert("Profile updated !");
    }, 100);
  };

  render() {
    const { LinkedInData, form } = this.state;
    // ... are used in long queries to propagate the data of ES6 (spread operater)
    return (
      <JumbotronComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        formData={form}
        LinkedInData={LinkedInData}
      />
    );
  }
}
