import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="home" className="navbar-brand">React Life Cycle Methods</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="example">Example</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
};
export default Navbar;