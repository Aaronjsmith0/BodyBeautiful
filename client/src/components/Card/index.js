import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Cards = (props) => {
    return (
        <Row>
            <Col sm="4">
                <Card body>
                    <CardTitle>Deluxe Package</CardTitle>
                    <CardText>Get Restored and Pampered to the MAX!</CardText>
                    <CardText className="price">$250/mo</CardText>
                    <CardBtn></CardBtn>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                    <CardTitle>Pro Package</CardTitle>
                    <CardText>Just looking for a little rest and relaxation.</CardText>
                    <CardText className="price">$150/mo</CardText>
                    <CardBtn></CardBtn>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                    <CardTitle>Trial Package</CardTitle>
                    <CardText>Just looking to see what the subscription is like..</CardText>
                    <CardText className="price">$50/mo</CardText>
                    <CardBtn></CardBtn>
                </Card>
            </Col>
        </Row>
    );
};

export default Cards;