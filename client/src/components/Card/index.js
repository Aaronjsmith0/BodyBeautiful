import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Cards = (props) => {
    return (
        <Row>
            <Col sm="4">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <CardBtn>Go somewhere</CardBtn>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <CardBtn>Go somewhere</CardBtn>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <CardBtn>Go somewhere</CardBtn>
                </Card>
            </Col>
        </Row>
    );
};

export default Cards;