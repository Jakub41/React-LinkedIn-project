import React, { Component } from "react";
import {
  FaLinkedinIn,
  FaSearch,
  FaHome,
  FaNetworkWired,
  FaSuitcase,
  FaArrowCircleDown,
  FaBookReader
} from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { AiFillSlackSquare } from "react-icons/ai";
import {
  Container,
  Input,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavbarToggler,
  Collapse
} from "reactstrap";
import { IconContext } from "react-icons";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isActive: false,
      isActiveColor: "#000",
      photo: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.onRefs(this);
  }

  componentWillUnmount() {
    this.props.onRefs(undefined);
  }

  setProfile = photo => {
    this.setState({ photo });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      isActiveColor: "#fff"
    });
  }

  activeLink = () => {
    this.setState(prevState => ({
      linkRefActive: !this.state.linkRefActive
    }));
  };

  render() {
    return (
      <>
        <Navbar light expand="md" className="sticky-top">
          <Container>
            <NavbarBrand>
              <IconContext.Provider
                value={{
                  color: "#ffff",
                  size: "2.5em"
                }}
              >
                <FaLinkedinIn />
              </IconContext.Provider>
            </NavbarBrand>
            <InputGroup className="my-2 my-lg-3">
              <Input placeholder="Search" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <FaSearch />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={this.state.isOpen}
              navbar
              className="justify-content-end"
            >
              <NavItem>
                <NavLink href="#">
                  <FaHome />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FaNetworkWired />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FaSuitcase />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <TiMessages />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <IoIosNotificationsOutline />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.activeLink}>
                  <FaArrowCircleDown />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.activeLink}>
                  <AiFillSlackSquare />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FaBookReader />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-pic-set">
                  <img
                    src={
                      this.state.photo ||
                      "http://lorempixel.com/output/people-q-c-640-480-8.jpg"
                    }
                    alt="small-profile"
                    className="rounded-circle nav-pic"
                  />
                </NavLink>
              </NavItem>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
