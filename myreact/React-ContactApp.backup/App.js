import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ContactApp from "./ContactApplication/ContactApp";
import User from "./UserLifeCycle/User"

class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contactapp" element={<ContactApp />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}
export default App;