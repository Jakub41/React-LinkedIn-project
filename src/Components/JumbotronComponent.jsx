import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";

class JumbotronComponent extends Component {
  render() {
    const {LinkedInData} = this.props;
    return (
      <div>
        <Container>
          <Jumbotron>
            <h6> User Location</h6>
            <p className="lead">User information.</p>

            <p>Name: {LinkedInData.name}</p>
            <p>surname: {LinkedInData.surname}</p>
            <p>email: {LinkedInData.email}</p>
            <p>bio: {LinkedInData.bio}</p>
            <p>title: {LinkedInData.title}</p>
            <p>area: {LinkedInData.area}</p>
            <p>image: <img src={LinkedInData.image} alt="profile" /></p>

            <div style={{ padding: ".5rem" }}>
              <div className="mx-3 float-right">
                <Modal buttonLabel={<FaPencilAlt />} color="primary" />
              </div>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default JumbotronComponent;
