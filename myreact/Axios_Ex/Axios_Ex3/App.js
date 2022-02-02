import React from "react";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserLifeCycle from "./UserLifeCycle/UserLifeCycle";
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/userlifecycle" component={UserLifeCycle} />
                </Switch>
            </Router>
        </>
    };
};
export default App; 