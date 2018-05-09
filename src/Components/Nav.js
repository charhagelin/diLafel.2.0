import React, { Component } from 'react';
import '../Styles/Nav.css';
import { Navbar, NavItem } from 'react-bootstrap';
import logo from '../Images/white-logo.png';
import Products from './Products';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <Navbar inverse fixedTop='true' >
                <Navbar.Header>
                 <Navbar.Brand>
                    <a href='/'  ><img src={logo} /></a>
                 </Navbar.Brand>
                </Navbar.Header>
                <NavItem href='components.html'>Log In</NavItem>
                <NavItem href='/products'><Link to="/products" >Products</Link></NavItem>
            </Navbar>
        )
    }
}

export default Nav;

// href='/' brand={<img src={logo} />} right className="navbar" fixed="true"