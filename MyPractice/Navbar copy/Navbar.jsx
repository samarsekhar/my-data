import React, {Component} from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="Home" >Home Page</Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="login" >Apply</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="registration">Registration</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="smsapp"> SMSApp</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
};
export default Navbar;