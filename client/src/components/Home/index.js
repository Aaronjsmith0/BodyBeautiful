import React from "react";
import "./style.css";

function Home() {
    return (
        <div className="mainDiv">
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
                            <h1 className="jumbo2h1">RestoreNPamper was made off the thought that you should be able to have one membership for all of your restoration and pamper needs.</h1>
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
                                <a href="#" className="btn btn-danger">View Spas</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homePage4">
                <div className="container">
                    <div className="row">
                        <div className="jumboBox3">
                            <h1 className="jumbo2h1">Find All spas near Dallas/Forth Worth, TX</h1>
                        </div>
                        <div className="map"></div>
                        <div className="jumboBox4">
                            <h1 className="jumbo2h1">Designed for people who want more out of their memberships.</h1>
                        </div>
                        <div className="card-group">
                            <div className="card">
                                <img className="card-img-top-1"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Find Spas</h5>
                                    <p className="card-text">Use the iPhone or Android apps to find great spas near you, wherever you are.</p>
                                </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top-2"></img>
                                <div className="card-body-2">
                                    <h5 className="card-title">Recover the BEST Way</h5>
                                    <p className="card-text">Work out hard, recover faster! After a tough className or workout treat yourself!</p>
                                </div>
                            </div>
                            <div className="card">
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
                            <h1 className="jumbo5h1">#RestoreNPamper</h1>
                            <p className="jumbo5P">Check us out on Instagram!</p>
                            <a href="/pricing" className="btn btn-danger signUp">Sign up For You Membership</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerContainer">
                <div className="row footerRow">
                    <div className="col-md-5">
                    <div className="icon2"></div><h5 className="footerHeader">RestoreNPamper</h5>
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
                        <form>
                            <fieldset className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"></input>
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                <button type="button" id="submit-input" className="btn btn-danger">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;