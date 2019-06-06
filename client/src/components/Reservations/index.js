import React, { Component } from "react";
import "./style.css";
import ReservationCards from "../ReservationCards"

class Reservation extends Component {
    render() {
        return (
            <div className="mainDiv">
                <div className="jumbotron jumbotron-fluid reservationJumbotron1">
                </div>
                <div className="homePage2">
                    <div className="container">
                        <div className="row">
                            <div className="jumboBox">
                                <h1 className="jumboh1">Get On It!</h1>
                                <h1 className="jumboh1">Reserve Your Spot Today!</h1>
                                <p className="jumboP">Plenty of different places and times to choose from.</p>
                            </div>
                            <div className="jumboBox2">
                                <div className="icon5"></div>
                                <h1 className="jumbo2h1">These Are The Current Times Available</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reserveHomePage3">
                    <div className="container">
                        <div className="row">
                            <ReservationCards />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reservation;