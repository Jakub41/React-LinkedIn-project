import React, { useState } from 'react';
import { FaLinkedin , FaSearch , FaHome ,  FaNetworkWired, FaSuitcase, FaArrowCircleDown} from 'react-icons/fa';
import { IoIosNotificationsOutline,} from  "react-icons/io";
import {TiMessages } from 'react-icons/ti';
import { Input, Navbar , NavbarBrand , NavItem , NavLink,} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
            <div>
            <Navbar color="dark" light expand="md"></Navbar>
            <NavbarBrand><FaLinkedin /></NavbarBrand>
            <NavItem>
            <NavLink href="/Home/"><FaHome /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><FaNetworkWired /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><FaSuitcase /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><TiMessages /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><IoIosNotificationsOutline /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><FaArrowCircleDown /></NavLink>
            </NavItem>

                
            </div>
        );
    }

export default NavBar;