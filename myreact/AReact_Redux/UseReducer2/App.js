import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Message from "./Components/Message";
import MessageOne from "./Components/MessageOne";
import Login from "./Components/Login";

let App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/message" element={<Message />} />
                    <Route path="/messageone" element={<MessageOne />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
};
export default App;