import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";

class JumbotronComponent extends Component {
  render() {
    const { LinkedInData, formData, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <Container className="profile-container">
          <Jumbotron id="profile-banner"></Jumbotron>
          <div className="lowerSection">
            <Row>
              <Col lg="3" sm="12">
                <img
                  src={
                    LinkedInData.image ||
                    "http://lorempixel.com/output/people-q-c-640-480-8.jpg"
                  }
                  alt="profile-img"
                  className="rounded-circle psize img-area"
                />
              </Col>
            </Row>
            <Row className="btn-area">
              <Col lg="2" md="2" sm="2" className="svgimg">
                <Modal
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  buttonLabel={<FaPencilAlt />}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="6" sm="12" className="info">
                <h3>
                  {LinkedInData.name} {LinkedInData.surname}
                </h3>
                <h5 className="prrofile-text">{LinkedInData.area}</h5>
                <h5 className="prrofile-text">{LinkedInData.title}</h5>
              </Col>
              <Col lg="4" md="4" sm="12" className="info">
                <h5 className="prrofile-text">{LinkedInData.bio}</h5>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default JumbotronComponent;
