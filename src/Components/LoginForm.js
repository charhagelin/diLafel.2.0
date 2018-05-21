import React, {Component} from 'react';
import '../Styles/LoginForm.css';
import { app, base } from '../base';
import { Redirect } from 'react-router-dom';
import { Grid, Col, Row, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';



class LoginForm extends Component {
    constructor() {
        super()
        
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);

        this.state = {
            redirect: false
        }
    }

    authWithEmailPassword(event) {
        event.preventDefault();
   
           const email = this.emailInput.value
           const password = this.passwordInput.value

           app.auth().fetchProvidersForEmail(email)
            .then ((providers) => {
                if (providers.length === 0) {
                   return app.auth().createUserWithEmailAndPassword(email, password) 
                }
                else {
                    return app.auth().signInWithEmailAndPassword(email, password);

                }
            })
                .then ((user) => {
                    if (user && user.email) {
                        this.loginForm.reset();
                        this.setState({redirect : true})
                    }
                })
                .catch((error) =>  {
                    alert(error.message)
                })
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return(
            <Grid>
                <Col xs={6} md={4}>
                <Form className="login-form" onSubmit={(event) => this.authWithEmailPassword(event)} ref={(form) => {this.loginForm = form}} > 
                <h5>Note:</h5>
                    If you dont't already have an account this form will create one for you.
                    <FormControl type="email" placeholder="email" name="email" ref={(input) => {this.emailInput = input}}/>
                    <FormControl type="password" placeholder="password" name="password" ref={(input) => {this.passwordInput = input}}/>
                    <Button type="submit" value="sign in" className="btn-login">Log In</Button>
                </Form>
                </Col>
            </Grid>
    )
}
}

export default LoginForm;

