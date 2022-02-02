import React from "react";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompUsers from "./CompUsers/CompUsers";

class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/compusers" component={CompUsers} />
                </Switch>
            </Router>
        </>
    };
};
export default App; 