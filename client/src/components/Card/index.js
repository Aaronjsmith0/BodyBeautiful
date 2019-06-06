import React, { Component } from 'react'
import CardBtn from "../CardBtn";
import axios from 'axios'
import "./style.css";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userplan: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(plan, e) {
        e.preventDefault();

        axios
            .post('/user/userplan', {
                userplan: plan,
                username: this.props.username
            })
            .then(response => {
                if (response.status === 200) {
                    if (this.props.updateUser) {
                        this.props.updateUser({
                            userplan: response.data.userplan
                        })
                    }
                }
            }).catch(error => {
                console.log('posting error: ')
                console.log(error);
            })
    }

    render() {
        return (
            <Row>
                <Col sm="4">
                    <Card body className="priceCards">
                        <CardTitle className="title">Diamond Package</CardTitle>
                        <CardText>Get Restored and Pampered to the MAX!</CardText>
                        <CardText className="price">$250</CardText>
                        <CardText className="title">2500 Points</CardText>
                        <CardText>
                            &#10004; Most available features.<br></br>
                            &#10004; Customize Your Plan.<br></br>
                            &#10004; Most number of premium visits.<br></br>
                            &#10004; Pause or change at any time.<br></br>
                        </CardText>
                        <CardBtn onClick={(e) => this.handleSubmit("Diamond", e)}></CardBtn>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body className="priceCards">
                        <CardTitle className="title">Sapphire Package</CardTitle>
                        <CardText>Just looking for a little rest and relaxation.</CardText>
                        <CardText className="price">$150</CardText>
                        <CardText className="title">1500 Points</CardText>
                        <CardText>
                            &#10004; A little less features than Diamond Package.<br></br>
                            &#10004; Customize Your Plan.<br></br>
                            &#10004; Choose between a pamper package or a restore package.<br></br>
                            &#10004; Pause or change at any time.<br></br>
                        </CardText>
                        <CardBtn onClick={(e) => this.handleSubmit("Sapphire", e)}></CardBtn>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body className="priceCards">
                        <CardTitle className="title">Ruby Package</CardTitle>
                        <CardText>Just looking to see what the subscription is like..</CardText>
                        <CardText className="price">$50</CardText>
                        <CardText className="title">500 Points</CardText>
                        <CardText>
                            &#10004; The most basic package available.<br></br>
                            &#10004; A trial plan just for you.<br></br>
                            &#10004; A couple visits to try out our plans.<br></br>
                            &#10004; Pause or change at any time.<br></br>
                        </CardText>
                        <CardBtn onClick={(e) => this.handleSubmit("Ruby", e)}></CardBtn>
                    </Card>
                </Col>
            </Row>
        );
    }
};

export default Cards;