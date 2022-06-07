import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faList, faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link className='navbar-brand' to="/" >Restaurants</Link>
          <div className='navbar navbar-collapse'>
              <ul className='navbar-nav'>
                  <li className='nav-item'>
                      <Link className='nav-link' to="/home">
                          <FontAwesomeIcon icon={faHome} color="limegreen"/>Home</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='nav-link' to="/list">
                          <FontAwesomeIcon icon={faList} color="#f2118d"/>List</Link>
                  </li>
                  <li className='nav-item'>
                      <Link className='nav-link' to="/create">
                          <FontAwesomeIcon icon={faPlus} color="#087afc"/>Create</Link>
                  </li>
                  {/* <li className='nav-item'>
                      <Link className='nav-link' to="/update">Update</Link>
                  </li> */}
                  <li className='nav-item'>
                      <Link className='nav-link' to="/search">
                          <FontAwesomeIcon icon={faSearch} color="#087afc"/>Search</Link>
                  </li>
              </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navbar;
