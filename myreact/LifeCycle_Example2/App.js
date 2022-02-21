import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Message from "./Message/Message";
import Product from "./Product/Product";
import Navbar from "./Navbar/Navbar";

class App extends Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/message" element={<Message />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </Router>
        </React.Fragment>
    };
};
export default App;