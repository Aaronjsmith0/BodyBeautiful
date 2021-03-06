import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
import axios from 'axios'

class Nav extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div data-sticky-container>
        <div className="top-bar" data-sticky data-margin-top="0">
          <div className="top-bar-left">
            <ul className="dropdown menu siteTitle">
              <li><div className="icon4"></div></li>
              <li><a className="menu-text" href="/">BodyBeautiful</a></li>
            </ul>
          </div>
          <div className="top-bar-middle" data-magellan>
            <ul className="dropdown menu mainLinks" data-dropdown-menu>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/places">Places</a></li>
              <li><a href="/reservations">Reservations</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                  <span className="text-secondary">logout</span></Link>

              </section>
            ) : (
                <section className="navbar-section">
                  <Link to="/login" className="btn btn-link text-secondary">
                    <span className="text-secondary">login</span>
                  </Link>
                  <Link to="/signup" className="btn btn-danger">
                    <span className="text-secondary">sign up</span>
                  </Link>
                </section>
              )}
          </div>
        </div>
      </div>
    )
  };
}

export default Nav;
