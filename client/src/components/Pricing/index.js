import React, { Component } from "react";
import "./style.css";
import Cards from "../Card";

class Price extends Component {
    render() {
        return (
            <div className="mainDiv">
                <div className="jumbotron jumbotron-fluid pricingJumbotron1">
                </div>
                <div className="homePage2">
                    <div className="container">
                        <div className="row">
                            <div className="jumboBox">
                                <h1 className="jumboh1">Multiple Plans &</h1>
                                <h1 className="jumboh1">Pricing Options Available.</h1>
                                <p className="jumboP">A membership that fits your needs, lifestyle, and budget. Upgrade or downgrade at anytime.</p>
                            </div>
                            <div className="jumboBox2">
                                <h1 className="jumbo2h1">You are Looking at Pricing for Dallas/Forth Worth, TX</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage3">
                    <div className="container">
                        <div className="row">
                            <Cards />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Price;