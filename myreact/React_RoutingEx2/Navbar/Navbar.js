import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/Home" >React Routing</Link>
                <div>
                    <Link to="/services">Services</Link>
                    <Link to="/contact1">Contact Page</Link>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;