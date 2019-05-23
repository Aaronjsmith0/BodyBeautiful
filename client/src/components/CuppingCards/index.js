import React from 'react';
import "./style.css";
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row } from 'reactstrap';

const CuppingCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Cupping.guru</CardTitle>
                        <CardSubtitle>Discover The Relief of Cupping!</CardSubtitle>
                    </CardBody>
                    <img className="cuppingImg1" />
                    <CardBody>
                        <CardText>Cupping is a traditional, time-honored treatment remaining favored by millions of people world wide because it is safe, comfortable and remarkably effective for many health conditions.</CardText>
                        <CardLink href="http://www.cupping.guru/home.html" target="_blank">Cupping.guru Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Sage Massage Studio</CardTitle>
                        <CardSubtitle>Your Path to Stress Reduction & Muscular Health</CardSubtitle>
                    </CardBody>
                    <img className="cuppingImg2" />
                    <CardBody>
                        <CardText>Choose from a menu of relaxing, therapeutic, and restorative massages including the signature Sage Integrative Massage and Healing Cupping Massage.</CardText>
                        <CardLink href="https://www.sagemassagestudio.com/" target="_blank">Sage Massage Studio Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Pearl Acupuncture</CardTitle>
                        <CardSubtitle>Pearl Acupuncture is a patient-focused practice Richardson, Texas.</CardSubtitle>
                    </CardBody>
                    <img className="cuppingImg3" />
                    <CardBody>
                        <CardText> Our customized treatments help people improve their health and well being by reducing chronic pain, eliminating inflammation and restoring balance and proper functioning to the body.</CardText>
                        <CardLink href="http://www.pearlacu.com/" target="_blank">Pearl Acupuncture Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default CuppingCards;