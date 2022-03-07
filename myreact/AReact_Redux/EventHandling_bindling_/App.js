import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Messages from "./Messages/Messages";
import Navbar from "./Navbar/Navbar";
import Counter from "./Product/Counter";
import Product from "./Product/Product";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/messages" element={<Messages />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/counter" element={<Counter />} />
                    </Routes>
                </Router>
            </React.Fragment>
        );
    };
};
export default App;