import React, { Component } from 'react'
import CardBtn from "../CardBtn";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

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
        console.log(plan);
        console.log(this.props.username);

        axios
            .post('/user/userplan', {
                userplan: plan,
                username: this.props.username
            })
            .then(response => {
                console.log(response)

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
                    <Card body>
                        <CardTitle className="title">Diamond Package</CardTitle>
                        <CardText>Get Restored and Pampered to the MAX!</CardText>
                        <CardText className="price">$250/mo</CardText>
                        <CardText>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</CardText>
                        <CardBtn onClick={(e) => this.handleSubmit("Diamond", e)}></CardBtn>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="title">Sapphire Package</CardTitle>
                        <CardText>Just looking for a little rest and relaxation.</CardText>
                        <CardText className="price">$150/mo</CardText>
                        <CardText>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</CardText>
                        <CardBtn onClick={(e) => this.handleSubmit("Sapphire", e)}></CardBtn>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="title">Ruby Package</CardTitle>
                        <CardText>Just looking to see what the subscription is like..</CardText>
                        <CardText className="price">$50/mo</CardText>
                        <CardText>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</CardText>
                        <CardBtn onClick={(e) => this.handleSubmit("Ruby", e)}></CardBtn>
                    </Card>
                </Col>
            </Row>
        );
    }
};

export default Cards;