import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { FaPencilAlt } from "react-icons/fa";
import Modal from "./Modal";

class JumbotronComponent extends Component {
  render() {
    const { LinkedInData } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col className="col-12">
              <Jumbotron className='profile-background-image jumbotronProfile'>
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
              </Col>
              </Row>
        </Container>
      </div>
          );
        }
      }
      
      export default JumbotronComponent;
