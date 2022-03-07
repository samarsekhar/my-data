import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="home" > Web Page </Link>

                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="post" > Post </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="car"> Car </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;