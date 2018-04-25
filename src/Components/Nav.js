import React, { Component } from 'react';
import '../Styles/Nav.css';
import { Navbar, NavItem } from 'react-materialize';
import logo from '../Images/white-logo.png';
import Products from './Products';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <Navbar href='/' brand={<img src={logo} />} right className="navbar" fixed="true" >
                <NavItem href='/products'><Link to="/products">Products</Link></NavItem>
                <NavItem href='components.html'>Log In</NavItem>
            </Navbar>
        )
    }
}

export default Nav;