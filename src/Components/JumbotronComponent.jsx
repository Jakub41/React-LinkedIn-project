import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";

class JumbotronComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h6> User Location</h6>
            <p className="lead">User information.</p>

            <p>Name: {this.props.LinkedInData.name}</p>
            <p>surname: {this.props.LinkedInData.surname}</p>
            <p>email: {this.props.LinkedInData.email}</p>
            <p>bio: {this.props.LinkedInData.bio}</p>
            <p>title: {this.props.LinkedInData.title}</p>
            <p>area: {this.props.LinkedInData.area}</p>
            <p>image: <img src={this.props.LinkedInData.image} alt="profile" /></p>

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
