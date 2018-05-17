import React, {Component} from 'react';
import LoginForm from './LoginForm';
import '../Styles/LoginPage.css'

class LoginPage extends Component {
    render(){
        return(
            <div className="login-page-container">
                <h3>Log in</h3>
                <LoginForm />
            </div>
        )
    }
}

export default LoginPage;