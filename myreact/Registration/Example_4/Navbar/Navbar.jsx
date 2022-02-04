import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark navbar-expend-lg bg-dark">
                    <Link className="navbar-brand" to="home" > React Router </Link>
                    <div className="collapase navbar-collapase">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="form" className="nav-link"> Form</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
};
export default Navbar;