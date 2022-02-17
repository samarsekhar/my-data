import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalClock from "./DigitalClock/DigitalClock";
import Navbar from "./Navbar/Navbar";

let App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/time" element={<DigitalClock />} />
                </Routes>
            </Router>
        </>
    )
};
export default App;