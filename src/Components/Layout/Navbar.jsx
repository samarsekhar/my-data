import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">React User</Link>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/home" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
            </ul>
        </div>
            </div>
        </nav>
    )
};

export default Navbar;