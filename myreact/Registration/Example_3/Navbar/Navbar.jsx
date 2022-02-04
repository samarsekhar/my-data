import { Link } from "react-router-dom";
let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-extend-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="home"> React Routing - 6v </Link>
                <div className="collapase navbar-collapase" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="RegistrationA" >Registration</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;