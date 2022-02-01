import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="home" >React Routing</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">

                    </ul>
                </div>
            </nav>
        </>
    };
};
export default Navbar