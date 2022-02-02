import React from "react";
import Navbar from "./Navbar/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostList from "./PostList/PostList";

class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={ } />
                </Switch>
            </Router>
        </>
    };
};
export default App; 