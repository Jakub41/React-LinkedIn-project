import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";

class JumbotronComponent extends Component {
  render() {
    const { LinkedInData } = this.props;
    return (
      <div>
        <Container>
          <Jumbotron>
          <img src={LinkedInData.image} />
            <h6>
              {LinkedInData.name} {LinkedInData.surname}
            </h6>
            <h6>{LinkedInData.area}</h6>
            <p className="lead">{LinkedInData.bio}</p>
            <div style={{ padding: ".5rem" }}>
              <div className="mx-3 float-right">
                <Modal buttonLabel={<FaPencilAlt />} />
              </div>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default JumbotronComponent;
