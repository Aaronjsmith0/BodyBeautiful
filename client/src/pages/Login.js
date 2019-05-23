import React, { Component } from "react";
import LoginForm from '../components/LoginForm/login'

class Login extends Component {
    render() {
        return (
            <LoginForm updateUser={this.updateUser} />
        )
    }
}

export default Login;