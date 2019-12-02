import React, { Component } from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';

class MainComponent extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Jumbotron />
                
            </div>
        );
    }
}

export default MainComponent;