import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const AcupunctureCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">The Acupuncture Juncture</CardTitle>
                        <CardSubtitle>The Acupuncture Juncture is a full service acupuncture clinic.</CardSubtitle>
                    </CardBody>
                    <img className="AcupunctureImg1" />
                    <CardBody>
                        <CardText>Offering herbal consults, NAET allergy treatments, cupping, moxibustion, and Mayan adominal therapy in addition to acupuncture. </CardText>
                        <CardLink href="https://www.theacupuncturejuncture.com/home" target="_blank">The Acupuncture Juncture Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Acupuncture Center of Dallas</CardTitle>
                        <CardSubtitle>A NEW ERA FOR ACUPUNCTURE</CardSubtitle>
                    </CardBody>
                    <img className="AcupunctureImg2" />
                    <CardBody>
                        <CardText>We genuinely appreciate the opportunity to serve you and all your health concerns. Your health is more than the absence of illness and disorder. It is a state of complete physical, mental, and social well-being.</CardText>
                        <CardLink href="https://www.acupuncturecenterofdallas.com/" target="_blank">Acupuncture Center of Dallas Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Modern Acupuncture</CardTitle>
                        <CardSubtitle>"To make your life better."</CardSubtitle>
                    </CardBody>
                    <img className="AcupunctureImg3" />
                    <CardBody>
                        <CardText>Join us as we launch a movement to make sure EVERYONE experiences the true inspiration behind that mission. </CardText>
                        <CardLink href="https://www.modernacupuncture.com/" target="_blank">Modern Acupuncture Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default AcupunctureCards;