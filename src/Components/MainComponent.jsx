import React, { Component } from 'react';
import NavBar from './NavBar';
import JumbotronComponent from './JumbotronComponent';

class MainComponent extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <JumbotronComponent />
            </div>
        );
    }
}

export default MainComponent;
