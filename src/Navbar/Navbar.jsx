import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary lg-expand-warning">
                <Link className="navbar-brand" to="home" >Web Page</Link>

                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="message"> Message</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="messageone" >MessageOne</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="login" >Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Navbar;