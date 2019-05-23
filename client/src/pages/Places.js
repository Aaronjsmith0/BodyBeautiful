import React, { Component } from "react";
import Place from "../components/Places"
import { Row, Container } from "../components/Grid";

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