import Link from 'next/link';

const Topbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light topbar mb-4 static-top shadow">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown no-arrow">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="userDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <img
                            className="img-profile rounded-circle"
                            src="../img/undraw_profile.svg"
                            alt="User Profile"
                        />
                    </a>
                    {/* Dropdown - User Information */}
                    <div
                        className="dropdown-menu dropdown-menu-end shadow animated--grow-in"
                        aria-labelledby="userDropdown"
                    >
                        <Link href="#" className="dropdown-item">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profile
                        </Link>
                        <Link href="#" className="dropdown-item">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </Link>
                        <Link href="#" className="dropdown-item">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link href="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#logoutModal">
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Topbar;
