import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {app} from '../base';


class LogOut extends Component {
    constructor(){
        super()
        this.state = {
            redirect: false
        }
    }

    componentWillMount() {
        app.auth().signOut().then((user) => {
           this.setState({redirect: true })
        })
    }
    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return(
            <div>
                <h3>Logging out...</h3>
                <i className="fas fa-spinner"></i>
            </div>
        )
    }
}

export default LogOut;