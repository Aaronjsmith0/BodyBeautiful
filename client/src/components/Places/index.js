import React, { Component } from "react";
import "./style.css";
import PlaceCards from "../PlaceCards"
import ServicesBtn from "../ServicesBtn"

class Place extends Component {
    render() {
        return (
            <div className="mainDiv">
                <div className="jumbotron jumbotron-fluid placesJumbotron1">
                </div>
                <div className="homePage2">
                    <div className="container">
                        <div className="row">
                            <div className="jumboBox">
                                <h1 className="jumboh1">So Many Places...</h1>
                                <h1 className="jumboh1">Which One Will You Choose First?</h1>
                            </div>
                            <div className="jumboBox2">
                                <h1 className="jumbo2h1">You are Looking at Places in Dallas/Forth Worth, TX</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="serviceBTN">
                    <ServicesBtn />
                </div>
                <div className="homePage3">
                    <PlaceCards />
                </div>
            </div>
        )
    }
}

export default Place;