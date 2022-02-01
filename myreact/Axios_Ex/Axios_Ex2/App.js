import React from "react";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NextUser from "./NextUser/NextUser";
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/nextuser" component={NextUser} />
                </Switch>
            </Router>
        </>
    };
};
export default App; 