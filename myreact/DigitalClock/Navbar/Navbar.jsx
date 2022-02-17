import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="home" > Digital Clock - (LifeCycle methods (UseEffet Hook))</Link>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="digitalfunction" className="nav-link"> Digital Clock</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};
export default Navbar;