import React from 'react';
import CardBtn from "../CardBtn";
import "./style.css";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const ManiPediCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">UPTOWN NAIL SPA</CardTitle>
                        <CardSubtitle>Uptown Nail Spa offers the ultimate in pampering and restoring!</CardSubtitle>
                    </CardBody>
                    <img className="ManiPediImg1" />
                    <CardBody>
                        <CardText>After a hard working day and you want to treat yourself in a relaxing and comfortable place, Uptown Nail Spa is the ideal destination. </CardText>
                        <CardLink href="http://uptownnailspadallas.com/" target="_blank">UPTOWN NAIL SPA Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Nailed Nail Bar</CardTitle>
                        <CardSubtitle>Get nailed with us!</CardSubtitle>
                    </CardBody>
                    <img className="ManiPediImg2" />
                    <CardBody>
                        <CardText>Yes, we're talking about the best pedicures, manicures and nail services on Oak Lawn Avenue!</CardText>
                        <CardLink href="http://nailednailbar.com/" target="_blank">Nailed Nail Bar Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Castle Nail Spa</CardTitle>
                        <CardSubtitle>Come in to the newest and best Nail Salon in Dallas, TX!</CardSubtitle>
                    </CardBody>
                    <img className="ManiPediImg3" />
                    <CardBody>
                        <CardText>Not only will you look great after visiting Castle Nail Spa, but you will also feel safe knowing that we use only state-of-the-art spa chairs and hygenic systems to clean and seal all the tools after every use.</CardText>
                        <CardLink href="http://www.castlenailspamockingbird.com/" target="_blank">Castle Nail Spa Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default ManiPediCards;