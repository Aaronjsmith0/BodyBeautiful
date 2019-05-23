import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlowoutCards from "../BlowoutCards"
import ServicesBtn from "../ServicesBtn"
import CuppingCards from "../CuppingCards";
import FacialCards from "../FacialCards";
import ManiPediCards from "../ManiPediCards";
import WaxingCards from "../WaxingCards";
import AcupunctureCards from "../AcupunctureCards";
import CryotherapyCards from "../CryotherapyCards";
import MassageCards from "../MassageCards";

class Place extends Component {
    state = {
        selection: null
    }

    onSelectButton = (selection) => {
        this.setState({
            selection: selection
        })
    }

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
                                <h1 className="jumboh1">Which Will You Try First!</h1>
                            </div>
                            <div className="jumboBox2">
                                <div className="icon8"></div>
                                <h1 className="jumbo2h1">You are Looking at Places in Dallas/Forth Worth, TX</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="serviceBTN">
                    <ServicesBtn onSelectButton={this.onSelectButton} />
                </div>
                <div className="homePagePlaces">
                    {this.state.selection === "blowouts" ? <BlowoutCards /> : null}
                    {this.state.selection === "cupping" ? <CuppingCards /> : null}
                    {this.state.selection === "facials" ? <FacialCards />: null}
                    {this.state.selection === "maniPedi" ? <ManiPediCards />: null}
                    {this.state.selection === "waxing" ? <WaxingCards />: null}
                    {this.state.selection === "acupuncture" ? <AcupunctureCards />: null}
                    {this.state.selection === "cryotherapy" ? <CryotherapyCards />: null}
                    {this.state.selection === "massage" ? <MassageCards />: null}
                </div>
            </div>
        )
    }
}

export default Place;