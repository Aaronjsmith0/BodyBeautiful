import React, { Component } from 'react'
import axios from 'axios'
import "./style.css";

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    clearField() {
        document.contactForm.reset();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        axios.post('/user/contact', {
            email: this.state.email,
            message: this.state.message
        })
            .then(response => {
                if (!response.data.errmsg) {
                    this.setState({email: "", message: ""})
                }
            }).catch(error => {
                console.log('contact error: ')
                console.log(error)
            })
    }

    render() {
        return (
            <div className="footerContainer" >
                <div className="row footerRow">
                    <div className="col-md-5">
                        <div className="icon2"></div><h5 className="footerHeader">BodyBeautiful</h5>
                        <ul className="nav">
                            <li className="nav-item"><a target="_blank" href=" "><img alt="follow me on facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook40x40.png"></img></a></li>
                            <li className="nav-item"><a target="_blank" href=" "><img alt="follow me on twitter" src="https://c866088.ssl.cf3.rackcdn.com/assets/twitter40x40.png"></img></a></li>
                            <li className="nav-item"><a target="_blank" href=" "><img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png"></img></a></li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-md-right">Contact Us</h5>
                    </div>
                    <div className="col-md-5">
                        <form id="contactForm">
                            <fieldset className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    placeholder="Enter email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                >
                                </input>
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea
                                    className="form-control"
                                    id="exampleMessage"
                                    name="message"
                                    placeholder="Message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                >
                                </textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                <button
                                    type="submit"
                                    id="submit-input"
                                    className="btn btn-danger"
                                    value="Reset Form"
                                    onClick={this.handleSubmit}
                                >Send
                                    </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
};
export default Footer;
