import React from 'react';
import { Jumbotron, Container,} from 'reactstrap';
import { FaPencilAlt } from 'react-icons/fa';
import Modal from './Modal';

const JumboComponent = (props) => {
    return (
        <div>
            <Container>
            <Jumbotron>
                    <h6> User first Name & last Name</h6>
                    <h6> User Location</h6>
                    <p className="lead">User information.</p>
                    <div style={{ padding: '.5rem' }}>
                        <div className="mx-3 float-right"> <FaPencilAlt /></div>
                        <Modal className="float-right" color="primary" />
                    </div>
            </Jumbotron>
            </Container>
        </div>
    );
};

export default JumboComponent;