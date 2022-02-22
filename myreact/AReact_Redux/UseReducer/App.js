import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Message from "./Message/Message";

let App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/message" element={<Message />} />
                </Routes>
            </Router>
        </>
    );
};
export default App;