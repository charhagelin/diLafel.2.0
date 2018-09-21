import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "../../Styles/LoginPage.css";
// import {Col, Row} from 'react-bootstrap';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page-container">
        <h3>Log in</h3>
        <LoginForm setCurrentUser={this.props.setCurrentUser} />
      </div>
    );
  }
}

export default LoginPage;
