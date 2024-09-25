import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../style.min.css';
import Link from 'next/link';

const AdminPage = () => {
    return (
        <div id="page-top">
            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Sidebar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <hr className="sidebar-divider my-0" />

                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active">
                        <Link href="/admin" className="nav-link">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <hr className="sidebar-divider" />
                    <div className="sidebar-heading">Interface</div>

                    {/* Nav Item - Components */}
                    <li className="nav-item">
                        <Link
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseComponents"
                            aria-expanded="false"
                            aria-controls="collapseComponents"
                        >
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Components</span>
                        </Link>
                        <div
                            id="collapseComponents"
                            className="collapse"
                            aria-labelledby="headingComponents"
                            data-bs-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Components:</h6>
                                <Link href="/buttons" className="collapse-item">Buttons</Link>
                                <Link href="/cards" className="collapse-item">Cards</Link>
                            </div>
                        </div>
                    </li>

                     {/* Nav Item - Utilities */}
                     <li className="nav-item">
                        <Link
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseUtilities"
                            aria-expanded="false"
                            aria-controls="collapseUtilities"
                        >
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Utilities</span>
                        </Link>
                        <div
                            id="collapseUtilities"
                            className="collapse"
                            aria-labelledby="headingUtilities"
                            data-bs-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <Link href="/utilities-color" className="collapse-item">Colors</Link>
                                <Link href="/utilities-border" className="collapse-item">Borders</Link>
                                <Link href="/utilities-animation" className="collapse-item">Animations</Link>
                                <Link href="/utilities-other" className="collapse-item">Other</Link>
                            </div>
                        </div>
                    </li>

                    <hr className="sidebar-divider" />

                     {/* Heading */}
                     <div className="sidebar-heading">Addons</div>

                    {/* Nav Item - Pages */}
                    <li className="nav-item">
                        <Link
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsePages"
                            aria-expanded="false"
                            aria-controls="collapsePages"
                        >
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </Link>
                        <div
                            id="collapsePages"
                            className="collapse"
                            aria-labelledby="headingPages"
                            data-bs-parent="#accordionSidebar"
                        >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <Link href="/login" className="collapse-item">Login</Link>
                                <Link href="/register" className="collapse-item">Register</Link>
                                <Link href="/forgot-password" className="collapse-item">Forgot Password</Link>
                                <div className="collapse-divider"></div>
                                <h6 className="collapse-header">Other Pages:</h6>
                                <Link href="/404" className="collapse-item">404 Page</Link>
                                <Link href="/blank" className="collapse-item">Blank Page</Link>
                            </div>
                        </div>
                    </li>

                     {/* Nav Item - Tables */}
                     <li className="nav-item">
                        <Link href="/tables" className="nav-link">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span>
                        </Link>
                    </li>

                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />

                    {/* Divider */}
                    <hr className="sidebar-divider" />
                </ul>
                
                {/* End of Sidebar */}

                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
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
                        {/* End of Topbar */}

                        {/* Main Content Here */}
                        <div className="container-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
