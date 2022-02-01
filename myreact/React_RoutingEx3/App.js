import React from "react";
import Navbar from "./Navbar/Navbar";
import Contact2 from "./Component_3/Contact2";
import Services2 from "./Component_3/Services2";
import SMSApp from "./SMSApp/SMSApp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/contact2" component={Contact2} />
                    <Route path="/services2" component={Services2} />
                    <Route path="/smsapp" component={SMSApp} />
                </Switch>
            </Router>
        </>
    };
};
export default App;