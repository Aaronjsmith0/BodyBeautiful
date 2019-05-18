import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SignupForm from '../components/SignUp/signup'
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class SignUp extends Component {
    render() {
        return (
            <SignupForm signup={this.signup} />
        )
    }
}

export default SignUp;