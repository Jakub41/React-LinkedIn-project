import React, { useState } from "react";
import {
    FaLinkedin,
    FaSearch,
    FaHome,
    FaNetworkWired,
    FaSuitcase,
    FaArrowCircleDown
} from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { Container, Input, Navbar, NavbarBrand, NavItem, NavLink, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

const NavBar = props => {
    const [isOpen, setIsOpen] = useState(false);

    nk const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" light expand="md">
            <Container>
                <NavbarBrand>
                    <FaLinkedin />
                </NavbarBrand>
                <InputGroup style={{width:"25%"}}>
                    <Input placeholder="Search" />
                    <InputGroupAddon addonType="append">
                        <InputGroupText><FaSearch/></InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <NavItem>
                    <NavLink >
                        <FaHome />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <FaNetworkWired />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <FaSuitcase />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <TiMessages />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <IoIosNotificationsOutline />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <FaArrowCircleDown />
                    </NavLink>
                </NavItem>
                </Container>                

            </Navbar>
        </>
    );
};

export default NavBar;
