import React, { Component } from "react";
import SignupForm from '../components/SignUp/signup'

class SignUp extends Component {
    render() {
        return (
            <SignupForm signup={this.signup} />
        )
    }
}

export default SignUp;