import React from "react";
import "./style.css";

function Footer() {
    return (
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
    );
}

export default Footer;
