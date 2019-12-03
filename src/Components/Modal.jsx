import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const ModalComponent = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name*</Label>
                  <Input
                    type="text"
                    name="first"
                    id="firstname"
                    placeholder="firstname"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastname">Last Name*</Label>
                  <Input
                    type="text"
                    name="password"
                    id="lastname"
                    placeholder="lastname"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="headline">Headline</Label>
              <Input
                type="text"
                name="head"
                id="headline"
                placeholder="profile heading"
              />
            </FormGroup>
            <FormGroup>
              <Label for="education">Education</Label>
              <Input
                type="text"
                name="edu"
                id="education"
                placeholder="highest degree"
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="country">Country/Region</Label>
                  <Input type="text" name="country" id="countryname" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleZip">Zip</Label>
                  <Input type="text" name="zipcode" id="zip" />
                </FormGroup>
                <Col>
                  <FormGroup>
                    <Label for="education">Education</Label>
                    <Input
                      type="text"
                      name="education"
                      id="currenteducation"
                      placeholder="recent education"
                    />
                  </FormGroup>
                </Col>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
