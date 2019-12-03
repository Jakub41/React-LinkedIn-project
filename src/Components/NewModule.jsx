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

const NewModalComponent = props => {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>

            <Button color="primary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add Experience</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="titlename">Title*</Label>
                            <Input
                                type="text"
                                name="title"
                                id="newTitle"
                                placeholder="ex: software engineer"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="employmenttype">Employment Type</Label>
                            <Input
                                type="text"
                                name="employment"
                                id="lastname"
                                placeholder="---"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="companyname">Company</Label>
                            <Input
                                type="text"
                                name="company"
                                id="companyname"
                                placeholder="company name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="education">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="ex: country/state"
                            />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="startdate">Start Date</Label>
                                    <Input type="number" name="startdate" id="startdate" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="enddate">End Date</Label>
                                    <Input type="number" name="enddate" id="enddate" />
                                </FormGroup>
                                <Col>
                                </Col>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>edit</Button>{' '}
                    <Button color="primary" onClick={toggle}>save</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default NewModalComponent;
