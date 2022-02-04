import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Form from "./ComponentZ/Form";
import Navbar from "./Navbar/Navbar";

class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/form" component={Form} />
                </Switch>
            </Router>
        </>
    }
}
export default App;