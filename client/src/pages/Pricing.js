import React, { Component } from "react";
import Price from "../components/Pricing"
import { Row, Container } from "../components/Grid";

class Pricing extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Price username={this.props.username}/>
                </Row>
            </Container>
        )
    }
}

export default Pricing;