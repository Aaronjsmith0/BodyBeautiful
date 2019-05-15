import React from "react";
import "./style.css";

function Nav() {
  return (
    <div data-sticky-container>
      <div class="top-bar" data-sticky data-margin-top="0">
        <div class="top-bar-left">
          <ul class="dropdown menu siteTitle">
            <li><a class="menu-text" href="/">Restore-and-Pamper</a></li>
          </ul>
        </div>
        <div class="top-bar-middle" data-magellan>
          <ul class="dropdown menu mainLinks" data-dropdown-menu>
            <li><a href="#">Membership</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Reservations</a></li>
          </ul>
        </div>
        <div class="top-bar-right">
          <ul class="menu">
            <li><button type="button" class="clear button alert">Login</button></li>
            <div class="signupButttonDiv">
              <li><button type="button" class="button alert signupButton">Sign Up</button></li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
