import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Services from "./Component_2/Services";
import Contact1 from "./Component_2/Contact1"
let App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/services" component={Services} />
                <Route path="/contact1" component={Contact1} />
            </Switch>
        </Router>
    );
};
export default App;