import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactAPP from "./ContactAPP/ContactAPP";
import Navbar from "./Navbar/Navbar";

class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contactapp" element={<ContactAPP />} />
                </Routes>
            </Router>
        </React.Fragment>
    };
};
export default App;