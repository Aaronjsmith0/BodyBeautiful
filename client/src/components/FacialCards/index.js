import React from 'react';
import "./style.css";
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Row } from 'reactstrap';

const FacialCards = (props) => {
    return (
        <div>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Fresh Faces</CardTitle>
                        <CardSubtitle>Quality should never be a compromise!</CardSubtitle>
                    </CardBody>
                    <img className="FacialImg1" />
                    <CardBody>
                        <CardText>It is important to me to bring Fresh, healthy skincare to my customers at medical strength. </CardText>
                        <CardLink href="http://freshfacesandbody.com/" target="_blank">Fresh Faces Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Anh’s Skin Health & Esthetics</CardTitle>
                        <CardSubtitle>Wellness for the skin, the body, and the soul…</CardSubtitle>
                    </CardBody>
                    <img className="FacialImg2" />
                    <CardBody>
                        <CardText>All facials are carefully customized based on your skin goals, your skin type, and your skin’s condition.</CardText>
                        <CardLink href="https://anhskincare.com/" target="_blank">Anh’s Skin Health & Esthetics Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
            <Row className="placesRow">
                <Card className="placesCard">
                    <CardBody>
                        <CardTitle className="title">Facelogic Spa</CardTitle>
                        <CardSubtitle>Imagine a facial day spa unlike any other!</CardSubtitle>
                    </CardBody>
                    <img className="FacialImg3" />
                    <CardBody>
                        <CardText>As an essential skincare spa, we offer high-end facials and signature products at an affordable price.</CardText>
                        <CardLink href="http://dallas.facelogicspa.com/" target="_blank">Facelogic Spa Website</CardLink>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};

export default FacialCards;