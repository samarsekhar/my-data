import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expend-lg bg-dark">
                <Link to="about" >React All</Link>
            </nav>
            <div>
                <Link to="home" >Home</Link>
                <Link to="contact" >Contact Page</Link>
                <Link to="about" >About Us</Link>
            </div>
        </div>
    );
};
export default Navbar;