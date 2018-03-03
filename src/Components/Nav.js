import React, { Component } from 'react';
import '../Styles/Nav.css';
import { Navbar, NavItem } from 'react-materialize';
import logo from '../Images/white-logo.png';


class Nav extends Component {
    render() {
        return (
            <Navbar brand={<img src={logo} />} right className="navbar">
                <NavItem href='get-started.html'>Products</NavItem>
                <NavItem href='components.html'>Log In</NavItem>
            </Navbar>

        )
    }
}

export default Nav;