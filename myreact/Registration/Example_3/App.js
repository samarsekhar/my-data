import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegistrationA from "./FormComponent/RegistrationA";
import Navbar from "./Navbar/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/registrationa" component={RegistrationA} />
                </Switch>
            </Router>
        </>
    );
};
export default App;