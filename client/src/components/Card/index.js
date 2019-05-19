import React, { Component } from 'react'
import CardBtn from "../CardBtn";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import "./style.css";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Cards extends Component {
    constructor() {
		super()
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
    handleSubmit(event) {
        event.preventDefault()

        axios
            .post('/user/userplan', {
                userplan: this.state.userplan
            })
            .then(response => {
                console.log(response)

                if (response.status === 200) {
                    if (this.props.updateUser) {
                        this.props.updateUser({
                            userplan: response.data.userplan
                        })
                        this.setState({
                            redirectTo: '/'
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
                        <CardBtn onClick={this.handleSubmit}></CardBtn>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="title">Sapphire Package</CardTitle>
                        <CardText>Just looking for a little rest and relaxation.</CardText>
                        <CardText className="price">$150/mo</CardText>
                        <CardText>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</CardText>
                        <CardBtn onClick={this.handleSubmit}></CardBtn>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle className="title">Ruby Package</CardTitle>
                        <CardText>Just looking to see what the subscription is like..</CardText>
                        <CardText className="price">$50/mo</CardText>
                        <CardText>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</CardText>
                        <CardBtn onClick={this.handleSubmit}></CardBtn>
                    </Card>
                </Col>
            </Row>
        );
    }
};

export default Cards;