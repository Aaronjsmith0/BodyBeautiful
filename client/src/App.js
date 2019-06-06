import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import axios from 'axios'
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Places from "./pages/Places";
import SignUp from "./pages/SignUp";
import Login from './pages/Login'
import Reservations from './pages/Reservations'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
      <div>
        <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pricing" render={() => <Pricing username={this.state.username}/>}/>
          <Route exact path="/reservations" render={() => <Reservations username={this.state.username}/>}/>
          <Route exact path="/places" component={Places} />
          <Route exact path="/login" render={() => <Login updateUser={this.updateUser}/>} />
          <Route exact path="/signup" render={() => <SignUp signup={this.signup}/>} />
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;