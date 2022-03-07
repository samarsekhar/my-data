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
                            <Link className="nav-link" to="postform" > Post Form </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="postlist" >Post List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;