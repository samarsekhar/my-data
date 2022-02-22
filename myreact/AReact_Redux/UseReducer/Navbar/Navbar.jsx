import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark lg-expand-ligth">
                <Link className="navbar-brand" to="home" >Web Page</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="message"> Message</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Navbar;