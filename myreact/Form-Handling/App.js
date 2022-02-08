import React from "react";
import Login from "./Form/Login"
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            </>
        )
    }
};
export default App;