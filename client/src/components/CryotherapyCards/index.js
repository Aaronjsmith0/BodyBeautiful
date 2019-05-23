import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const CryotherapyCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Cryo1one</CardTitle>
                        <CardSubtitle>The #1 Provider of Cryotherapy</CardSubtitle>
                    </CardBody>
                    <img className="CryotherapyImg1" />
                    <CardBody>
                        <CardText>With three convenient locations serving Dallas, Plano, and Oak Lawn, Cryo1one is the metroplex’s leading provider of whole-body cryotherapy. </CardText>
                        <CardLink href="https://cryo1one.com/" target="_blank">Cryo1one Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Katy Trail Cryo</CardTitle>
                        <CardSubtitle>Katy Trail Cryo is Dallas’s premier luxury cryotherapy spa that draws on a holistic yet modern approach to health and wellness. </CardSubtitle>
                    </CardBody>
                    <img className="CryotherapyImg2" />
                    <CardBody>
                        <CardText>Our goal is to promote overall well-being, to reduce pain and inflammation and to enhance athletic performance and recovery.</CardText>
                        <CardLink href="http://katytrailcryo.com/" target="_blank">Katy Trail Cryo Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">CryoUSA</CardTitle>
                        <CardSubtitle>Leading With Integrity</CardSubtitle>
                    </CardBody>
                    <img className="CryotherapyImg3" />
                    <CardBody>
                        <CardText>CryoUSA strives to be the front runners for industry standards in safety, equipment, and reliability on all products we offer.</CardText>
                        <CardLink href="https://www.cryousasolutions.com/" target="_blank">CryoUSA Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default CryotherapyCards;