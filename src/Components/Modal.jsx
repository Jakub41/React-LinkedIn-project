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
  const { buttonLabel, className, formData, handleChange } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = () => {
    props.handleSubmit();
    toggle();
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Profile Information</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">Name*</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="firstname"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastname">Surname*</Label>
                  <Input
                    type="text"
                    name="surname"
                    id="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="lastname"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="headline">Email*</Label>
              <Input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Bio"
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input
                type="textarea"
                name="bio"
                id="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
              />
            </FormGroup>
            <FormGroup>
              <Label for="area">Area</Label>
              <Input
                type="text"
                name="area"
                id="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Area"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            cancel
          </Button>{" "}
          <Button color="primary" onClick={handleSubmit}>
            save
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalComponent;
