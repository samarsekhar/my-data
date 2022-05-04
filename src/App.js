import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import AddUser from "./Components/Users/AddUser";
import User from "./Components/Users/User";

function App() {
    return(
        <Router>
            <div className="App">
                <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route element={<NotFound/>}/>
                <Route path="/user" element={<User/>} />
                <Route path="/adduser" element={<AddUser/>} />
            </Routes>
            </div>
        </Router>
    )
};
export default App;