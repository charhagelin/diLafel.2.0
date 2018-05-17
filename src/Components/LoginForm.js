import React, {Component} from 'react';
import '../Styles/LoginForm.css';
import {Button} from 'react-bootstrap';
// import { app, base } from './base';


class LoginForm extends Component {
    constructor() {
        super()
        
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    }

    authWithEmailPassword(event) {
        event.preventDefault();
        console.table([{
           email:  this.emailInput.value,
           password:  this.passwordInput.value
        }])

    }

    render() {
        return(
            <div>
                <form className="login-form" onSubmit={(event) => this.authWithEmailPassword(event)} ref={(form) => {this.loginForm = form}} > 
                <h5>Note:</h5>
                    If you dont't already have an account this form will create one for you.
                    <input type="email" placeholder="email" name="email" ref={(input) => {this.emailInput = input}}/>
                    <input type="password" placeholder="password" name="password" ref={(input) => {this.passwordInput = input}}/>
                    <Button type="submit" value="sign in">Log In</Button>
                </form>
            </div>
    )
}
}

export default LoginForm;

