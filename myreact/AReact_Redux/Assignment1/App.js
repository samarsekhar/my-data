import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Car from "./CarEx/Car";
import Navbar from "./Navbar/Navbar";
import PostApi from "./PostApi/PostApi";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/post" element={<PostApi />} />
                    <Route path="/car" element={<Car />} />
                </Routes>
            </Router>
        </>
    );
};
export default App;