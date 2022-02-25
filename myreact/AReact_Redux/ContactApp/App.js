import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ContactApp from "./Components/ContactApp";
import Funcontactapp from "./Components/Funcontactapp";
import Navbar from "./Navbar/Navbar";

let App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contactapp" element={<ContactApp />} />
                    <Route path="/funcontactapp" element={<Funcontactapp />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </>
    );
};
export default App;