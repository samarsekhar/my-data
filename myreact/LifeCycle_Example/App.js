import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./Example/Example";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/example" element={<Example />} />
                </Routes>
            </Router>
        </div>
    )
};
export default App;