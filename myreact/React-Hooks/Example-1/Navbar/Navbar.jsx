import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="message" > React Hooks - Use State</Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="message" className="nav-link"> Message </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    };
};
export default Navbar;