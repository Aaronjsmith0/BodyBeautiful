import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const BlowoutCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Drybar</CardTitle>
                        <CardSubtitle>NO CUTS. NO COLOR. JUST BLOWOUTS!</CardSubtitle>
                    </CardBody>
                    <img className="BlowoutImg1" />
                    <CardBody>
                        <CardText>Named one of the top “100 Brilliant Ideas of 2010” by Entrepreneur Magazine and New York Magazine’s Boom Brands of 2013, Drybar is based on the simple concept of focusing on one thing and being the best at it: Blowouts. </CardText>
                        <CardLink href="https://www.thedrybar.com/" target="_blank">Drybar Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Blo</CardTitle>
                        <CardSubtitle>Flawless hair never goes out of style!</CardSubtitle>
                    </CardBody>
                    <img className="BlowoutImg2" />
                    <CardBody>
                        <CardText>Blo has transformed beauty norms for the modern woman by making catwalk-quality blowouts accessible worldwide!</CardText>
                        <CardLink href="https://blomedry.com/" target="_blank">Blo Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">The Hair Bar</CardTitle>
                        <CardSubtitle>The Best Blowout You Have Ever Had!</CardSubtitle>
                    </CardBody>
                    <img className="BlowoutImg3" />
                    <CardBody>
                        <CardText>The Hair Bar is here for all of you hair and makeup needs!</CardText>
                        <CardLink href="http://www.dropinblowout.com/" target="_blank">The Hair Bar Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default BlowoutCards;