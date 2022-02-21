import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return <React.Fragment>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <Link to="home" className="navbar-brand" > Web Page </Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="message" > Message </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="product" > Product </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    }
};
export default Navbar;