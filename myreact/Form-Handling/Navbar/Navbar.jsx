import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand text-primary" to="home" > React Hooks - Form </Link>
                <button
                    className="navbar-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="message">useState</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login">Form Handling - useState</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Navbar;