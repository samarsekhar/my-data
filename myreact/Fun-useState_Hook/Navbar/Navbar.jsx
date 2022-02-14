import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="home" >React Functional Component - useState Hook</Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="message" className="nav-link">Message</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="Counter" className="nav-link">Counter</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};
export default Navbar;