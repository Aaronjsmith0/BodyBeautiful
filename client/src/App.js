import React, { Component } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;