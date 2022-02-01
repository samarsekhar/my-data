import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="home" >React Routing</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/contact2" className="nav-link" >Contact Page </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services2" className="nav-link" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/smsapp" className="nav-link" >SMSApp</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    };
};
export default Navbar;