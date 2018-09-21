import React, { Component } from 'react';
import '../styles/css/Nav.css';
import logo from '../Images/white-logo.png';
import {Link} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <section id="logo">
                    <a href='/'  ><img id="image-logo" src={logo} alt="Logo"/></a>
                </section> 
                <section id="links">
                    {this.props.authenticated ?     
                    <ul>
                        <li title="Sign out">
                        <Link to='/logout'/> 
                        <i className="fas fa-sign-out-alt"></i>
                        </li>
                        <li href='/admin/add-new-item'> Add <i className="fas fa-plus"></i></li>
                        <li href='/products'>Products</li>
                    </ul>    
                        :<li href='/login'><Link to="/login" >Login/ Register</Link></li>
                    }  
                </section> 
            </div>

        )
    }
}

export default Nav;

// href='/' brand={<img src={logo} />} right className="navbar" fixed="true"



// <Navbar inverse fixedTop={true} >
// <Navbar.Header>
// <Navbar.Brand>
//     <a href='/'  ><img id="image-logo" src={logo} alt="Logo"/></a>
// </Navbar.Brand>
// </Navbar.Header>

// {this.props.authenticated ? 
// <div>                       
//     <NavItem href='/logout' title="Sign out"><i className="fas fa-sign-out-alt"></i></NavItem>
//     <NavItem href='/admin/add-new-item'> Add <i className="fas fa-plus"></i></NavItem>
//     <NavItem href='/products'>Products</NavItem>
// </div>  
// :  <NavItem href='/login'><Link to="/login" >Login/ Register</Link></NavItem>
// } 
// </Navbar>