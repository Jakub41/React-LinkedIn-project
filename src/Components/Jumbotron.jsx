import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { FaPencilAlt } from 'react-icons/fa';

const Jumbo = (props) => {
    return (
        <div>
            <Container>
            <Jumbotron>
                    <h6> User first Name & last Name</h6>
                    <h6> User Location</h6>
                    <p className="lead">User information.</p>
                    <div style={{ padding: '.5rem' }}>
                        <div className="mx-3 float-right"> <FaPencilAlt /></div>
                        <Button className="float-right" color="primary">Add profile section </Button>
                    </div>
            </Jumbotron>
            </Container>
        </div>
    );
};

export default Jumbo;