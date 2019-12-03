import React from 'react';
import {
  Button, Modal, ModalBody, ModalHeader, ModalFooter,
  Col, Row, Form, FormGroup, Label, Input
} from 'reactstrap';


class ModalComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color='primary' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add profile</ModalHeader>
          <ModalBody>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="firstName">First Name*</Label>
                    <Input type="text" name="first" id="firstname" placeholder="firstname" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="lastname">Last Name*</Label>
                    <Input type="text" name="password" id="lastname" placeholder="lastname" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="headline">Headline</Label>
                <Input type="text" name="head" id="headline" placeholder="profile heading" />
              </FormGroup>
              <FormGroup>
                <Label for="education">Education</Label>
                <Input type="text" name="edu" id="education" placeholder="highest degree" />
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
                      <Input type="text" name="education" id="currenteducation" placeholder="recent education" />
                    </FormGroup>
                  </Col>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>Update</Button>{' '}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default <ModalComp buttonLabel='open modal' />;