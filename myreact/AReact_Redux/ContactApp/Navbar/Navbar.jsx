import { Link } from "react-router-dom";

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary lg-expand-warning">
                <Link className="navbar-brand" to="home" >Web Page</Link>

                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="contactapp"> ContactApp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="funcontactapp"> Funcontactapp</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="cart"> Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};
export default Navbar;