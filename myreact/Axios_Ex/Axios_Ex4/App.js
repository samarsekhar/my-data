import React from "react";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactApp from "./ContactApp/ContactApp";
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/contactapp" component={ContactApp} />
                </Switch>
            </Router>
        </>
    };
};
export default App; 