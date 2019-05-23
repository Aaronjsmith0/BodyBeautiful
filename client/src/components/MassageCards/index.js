import React from 'react';
import "./style.css";
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row } from 'reactstrap';

const MassageCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Riviera Spa</CardTitle>
                        <CardSubtitle>Dallas’ Premier Day Spa Destination</CardSubtitle>
                    </CardBody>
                    <img className="MassageImg1" />
                    <CardBody>
                        <CardText>Riviera Spa is a day spa like no other in Dallas, Texas. Take your time to learn about us and discover the exceptional facility, amenities, and spa treatments we have to offer.</CardText>
                        <CardLink href="https://rivieraspadallas.com/" target="_blank">Riviera Spa Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Hiatus Spa</CardTitle>
                        <CardSubtitle>Your experience at Hiatus will be personalized from start to finish.</CardSubtitle>
                    </CardBody>
                    <img className="MassageImg2" />
                    <CardBody>
                        <CardText>Here, attention to detail is a given: All sixty-minute services include a purifying foot soak ritual and our signature hand and foot massage, along with a sensory journey and customized aromatherapy.</CardText>
                        <CardLink href="https://hiatusspa.com/" target="_blank">Hiatus Spa Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Sole Therapy</CardTitle>
                        <CardSubtitle>Relax As You Wish!</CardSubtitle>
                    </CardBody>
                    <img className="MassageImg3" />
                    <CardBody>
                        <CardText>Sole Therapy always makes efforts to give you best foot massage and relaxation.</CardText>
                        <CardLink href="http://www.soletherapydallas.com/" target="_blank">Sole Therapy Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default MassageCards;