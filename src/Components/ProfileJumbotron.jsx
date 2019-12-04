import React, { Component } from 'react';
import {Jumbotron, Container} from 'reactstrap';
import { FaPencilAlt } from "react-icons/fa";
import ProfileModal from './ProfileModle';

class ProfileJumbotron extends Component {
    render() {
        return (
            <div>
            <Container >
            <Jumbotron >
             
            <h4>Experience</h4>
            <div style={{ padding: '.5rem' }}>
                        <div className="mx-3 float-right">
                        <ProfileModal buttonLabel={<FaPencilAlt />} />
                    </div></div>
            </Jumbotron>
            </Container>
            </div>
          
        );
      };         
    }


export default ProfileJumbotron;