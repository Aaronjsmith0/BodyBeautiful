import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const PlaceCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle>Drybar</CardTitle>
                        <CardSubtitle>NO CUTS. NO COLOR. JUST BLOWOUTS!</CardSubtitle>
                    </CardBody>
                    <img className="placeIMG" />
                    <CardBody>
                        <CardText>Named one of the top “100 Brilliant Ideas of 2010” by Entrepreneur Magazine and New York Magazine’s Boom Brands of 2013, Drybar is based on the simple concept of focusing on one thing and being the best at it: Blowouts. </CardText>
                        <CardLink href="https://www.thedrybar.com/" target="_blank">Drybar Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle>Blo</CardTitle>
                        <CardSubtitle>NO CUTS. NO COLOR. JUST BLOWOUTS!</CardSubtitle>
                    </CardBody>
                    <img className="placeIMG" />
                    <CardBody>
                        <CardText>Named one of the top “100 Brilliant Ideas of 2010” by Entrepreneur Magazine and New York Magazine’s Boom Brands of 2013, Drybar is based on the simple concept of focusing on one thing and being the best at it: Blowouts. </CardText>
                        <CardLink href="https://www.thedrybar.com/" target="_blank">Drybar Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default PlaceCards;