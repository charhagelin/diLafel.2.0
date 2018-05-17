import React, { Component } from 'react';
import '../Styles/Nav.css';
import { Navbar, NavItem } from 'react-bootstrap';
import logo from '../Images/white-logo.png';
import ProductsPage from './ProductsPage';
import OrderPage from './OrderPage';
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

                {this.props.authenticated ? 
                   <div>
                        <NavItem href='/admin/add-new-item'><Link to="/admin/add-new-item" > Add new</Link></NavItem>
                        <NavItem href='/products'><Link to="/products" >Products</Link></NavItem>
                   </div> 
                    
                    :  <NavItem href='/login'><Link to="/login" >Login/ Register</Link></NavItem>
                } 
            </Navbar>
        )
    }
}

export default Nav;

// href='/' brand={<img src={logo} />} right className="navbar" fixed="true"