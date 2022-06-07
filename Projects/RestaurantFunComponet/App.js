import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import RestaurantList from './Components/RestaurantList';
import RestaurantCreate from './Components/RestaurantCreate';
import RestaurantUpdate from './Components/RestaurantUpdate';
import RestaurantSearch from './Components/RestaurantSearch';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/list" element={<RestaurantList/>} />
          <Route path="/create" element={<RestaurantCreate/>} />
          <Route path="/update/:id" element={<RestaurantUpdate/>}/>
          <Route path="/search" element={<RestaurantSearch/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;