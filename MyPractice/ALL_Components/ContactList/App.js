import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactApp from "./ALL_Components/ContactList/ContactApp";
import Navbar from "./Navbar/Navbar";

class App extends Component {
    render() {
        return(
            <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contact" element={<ContactApp />} />
                </Routes>
            </Router>
            </>
        )
    }
}
export default App;