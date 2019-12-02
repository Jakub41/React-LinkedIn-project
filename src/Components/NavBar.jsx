import React, { Component } from 'react';
import { FaLinkedin , FaSearch , FaHome ,  FaNetworkWired , FaSuitcase,
 FaArrowCircleDown} from 'react-icons/fa';
import { TiMessages} from 'react-icons/ti';
import { IoIosNotificationsOutline,} from  "react-icons/io";
import { Input, Navbar , NavbarBrand , NavItem , NavLink,} from 'reactstrap';
class NavBar extends Component {
    state = {
        search: "",
    }
    render() {
        return (
            <div>
            <Navbar color="Dark" light expand="md"></Navbar>
            <NavbarBrand><FaLinkedin /></NavbarBrand>
            <Input type="text" placeholder= " <FaSearch />search"> </Input> 
            <NavItem>
            <NavLink><FaHome /></NavLink>
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
}

export default NavBar;