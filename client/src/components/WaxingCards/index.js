import React from 'react';
import "./style.css";
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row } from 'reactstrap';

const WaxingCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Waxing the City</CardTitle>
                        <CardSubtitle>Waxing The City is devoted solely to the art of body waxing, catering to both women and men.</CardSubtitle>
                    </CardBody>
                    <img className="WaxingImg1" />
                    <CardBody>
                        <CardText>We provide a superior wax experience with proprietary wax, techniques, and unparalleled customer service. </CardText>
                        <CardLink href="https://www.waxingthecity.com/index.html" target="_blank">Waxing the City Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Relax and Wax</CardTitle>
                        <CardSubtitle>Give You Body The Smooth Touch!</CardSubtitle>
                    </CardBody>
                    <img className="WaxingImg2" />
                    <CardBody>
                        <CardText>The Best all natural wax is the only thing we use!</CardText>
                        <CardLink href="http://www.relaxandwax.com/index.html" target="_blank">Relax and Wax Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">The Pretty Kitty</CardTitle>
                        <CardSubtitle>At The Pretty Kitty, we do things differently than most waxing establishments.</CardSubtitle>
                    </CardBody>
                    <img className="WaxingImg3" />
                    <CardBody>
                        <CardText>You have found the best Brazilian Wax in Dallas! Our unique approach to this delicate service is what has made us so successful. We are full service salon, from eyebrow waxing to full leg packages!</CardText>
                        <CardLink href="https://prettykittywax.com/" target="_blank">The Pretty Kitty Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default WaxingCards;