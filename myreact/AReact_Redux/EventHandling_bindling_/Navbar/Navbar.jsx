import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    <nav className="navbar navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/home" > React Application</Link>
                        <div className="ml-auto">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="messages" > Messages</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="product" > Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="counter" > Counter</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        );
    };
};
export default Navbar;