import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Place from "../components/Places"
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Places extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Place />
                </Row>
            </Container>
        )
    }
}

export default Places;