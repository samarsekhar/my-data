import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Sam Cart
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
