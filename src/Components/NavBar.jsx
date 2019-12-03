import React, { useState } from "react";
import {
  FaLinkedin,
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
  InputGroupText
} from "reactstrap";
import { IconContext } from "react-icons";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" light expand="md">
        <Container>
          <NavbarBrand>
            <IconContext.Provider value={{ color: "#007fff", size: "2em" }}>
              <div>
                <FaLinkedin />
              </div>
            </IconContext.Provider>
          </NavbarBrand>
          <InputGroup style={{ width: "25%", padding: "5px" }}>
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <div>
                  <FaSearch />
                </div>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <FaHome />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <FaNetworkWired />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <FaSuitcase />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <TiMessages />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <IoIosNotificationsOutline />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <FaArrowCircleDown />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <AiFillSlackSquare />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <FaBookReader />
              </IconContext.Provider>
            </NavLink>
          </NavItem>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
