import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";

let App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
};
export default App;