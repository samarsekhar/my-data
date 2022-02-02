import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="home" > React Routing </Link>
                <div className="collapase navbar-collapase">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/compusers" className="nav-link" >Component Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    };
};
export default Navbar