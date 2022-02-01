import React from "react";
import Navbar from "./Navbar/Navbar";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>

                </Switch>
            </Router>
        </>
    };
};
export default App; 