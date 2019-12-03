import React, { Component } from 'react'
import NavBar from '../NavBar';

export default class ActiveLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      linkRefActiveColor: "#111",
      linkRefNotActiveColor: "#000"
    };

    activeLink = () => {
      this.setState({ linkRefActive: true })
    }

  render() {
    <NavBar activeLink={
      { backgroundColor:
        this.state.linkRefActive ?
        this.state.linkRefActiveColor
        : this.state.linkRefNotActiveColor}
    }/>
  }
}
}
