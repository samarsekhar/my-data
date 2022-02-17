import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalFunction from "./Digital/DigitalFunction";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/digitalfunction" element={<DigitalFunction />} />
                </Routes>
            </Router>
        </>
    )
};
export default App;