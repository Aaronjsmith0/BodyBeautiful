import React, { Component } from 'react'
import DropText from "../DropText";
import "./style.css";

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="mainDiv" >
                <div className="jumbotron jumbotron-fluid homeJumbotron1">
                </div>
                <div className="homePage2">
                    <div className="container">
                        <div className="row">
                            <div className="jumboBox">
                                <h1 className="jumboh1">One Membership.</h1>
                                <h1 className="jumboh1">Tons of Spas to Choose</h1>
                                <p className="jumboP">Welcome to your all-in-one restore and pamper membership to the best spas in your city.</p>
                            </div>
                            <div className="icon">
                            </div>
                            <div className="jumboBox2">
                                <h1 className="jumbo2h1">BodyBeautiful was made off the thought that you should be able to have one membership for all of your restoration and pamper needs.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage3">
                    <div className="container">
                        <div className="row">
                            <div className="cryoIMG"></div>
                            <div className="card1">
                                <div className="card-body">
                                    <h5 className="card-title">Because having one pass for many spas is better.</h5>
                                    <p className="card-text">Ready to be able to choose from many spas with one membership?</p>
                                    <a href="/places" className="btn btn-danger">View Spas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage4">
                    <div className="container">
                        <div className="row">
                            <div className="jumboBox3">
                                <div className="icon7"></div>
                                <h1 className="jumbo2h1">Find All spas near {<DropText />}</h1>
                            </div>
                            <div className="map"></div>
                            <div className="jumboBox4">
                                <div className="icon6"></div>
                                <h1 className="jumbo2h1">Designed for people who want more out of their memberships.</h1>
                            </div>
                            <div className="card-group">
                                <div className="card3">
                                    <img className="card-img-top-1"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Find Spas</h5>
                                        <p className="card-text">Use the iPhone or Android apps to find great spas near you, wherever you are.</p>
                                    </div>
                                </div>
                                <div className="card3">
                                    <img className="card-img-top-2"></img>
                                    <div className="card-body-2">
                                        <h5 className="card-title">Recover the BEST Way</h5>
                                        <p className="card-text">Work out hard, recover faster! After a tough className or workout treat yourself!</p>
                                    </div>
                                </div>
                                <div className="card3">
                                    <img className="card-img-top-3"></img>
                                    <div className="card-body-3">
                                        <h5 className="card-title">Try Something New</h5>
                                        <p className="card-text">With the many available options at your fingertips, branch out and try something different.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage5">
                    <div className="container">
                        <div className="row">
                            <div className="messageTable"></div>
                            <div className="card2">
                                <div className="card-body">
                                    <h5 className="card-title">Different Memberships Available</h5>
                                    <p className="card-text">There are differnet plans to suit your individual needs.</p>
                                    <a href="/pricing" className="btn btn-danger">View Plans</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage6">
                    <div className="container">
                        <div className="row">
                            <div className="jumboBox5">
                                <div className="icon3"></div>
                                <h1 className="jumbo5h1">#BodyBeautiful</h1>
                                <p className="jumbo5P">Check us out on Instagram!</p>
                                <a href="/pricing" className="btn btn-danger signUp">Sign up For You Membership</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;