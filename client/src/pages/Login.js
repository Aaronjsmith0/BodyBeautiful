import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import LoginForm from '../components/LoginForm/login'
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Login extends Component {
    render() {
        return (
            <LoginForm updateUser={this.updateUser} />
        )
    }
}

export default Login;