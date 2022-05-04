import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return(
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link className="navbar-brand" to="/Home"> React Home Page</Link>
      <div className="navbar ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="reader" >Reader</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
};
export default Navbar;