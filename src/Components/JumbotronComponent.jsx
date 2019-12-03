import React, {Component} from 'react'; 
import { Jumbotron, Container,} from 'reactstrap';
import { FaPencilAlt } from 'react-icons/fa';
import Modal from './Modal';
import Profile from './Profile';

class JumbotronComponent extends Component {

    render() {
    return (
        <div>
            <Container>
            <Jumbotron>
                    <h6>name</h6>
                    <h6> User Location</h6>
                    <p className="lead">User information.</p>
                    <div style={{ padding: '.5rem' }}>
                        <div className="mx-3 float-right">
                        <Modal buttonLabel={<FaPencilAlt />} />
                    </div></div>
            </Jumbotron>
            </Container>
        </div>
    );
};
}

export default JumbotronComponent;