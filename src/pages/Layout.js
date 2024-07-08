import { Outlet, Link } from "react-router-dom";
import './styles/Layout.css'

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand p-0">
                        <h2 className="text-warning m-0"><i className="fas fa-hamburger me-3"></i>Burger King</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="d-flex flex-grow-1 justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-warning active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/About' className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Service' className="nav-link">Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Menu' className="nav-link">Menu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Contact' className="nav-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-end">
                            <ul className="navbar-nav">
                                <li>
                                    <Link to='/Login' className="btn btn-info py-2 px-4">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="mt-5">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
