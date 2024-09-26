import Link from 'next/link';

const Sidebar = () => {
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
          <div className="sidebar-heading">ADMIN</div>

          {/* Nav Item - Document Requests */}
          <li className="nav-item">
            <Link
              href="#"
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseComponents"
              aria-expanded="false"
              aria-controls="collapseComponents"
            >
              <i className="fa-solid fa-file-lines"></i>
              <span>Document Requests</span>
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

          {/* Nav Item - Complaints */}
          <li className="nav-item">
            <Link
              href="#"
              className="nav-link collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#collapseUtilities"
              aria-expanded="false"
              aria-controls="collapseUtilities"
            >
              <i className="fa-solid fa-file-pen"></i>
              <span>Complaints</span>
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

          {/* Nav Item - Resident List */}
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
              <span>Resident List</span>
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

          {/* Nav Item - Transaction History */}
          <li className="nav-item">
            <Link href="/tables" className="nav-link">
              <i className="fa-solid fa-clock"></i>
              <span>Transaction History</span>
            </Link>
          </li>

          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />

          {/* Divider */}
          <hr className="sidebar-divider" />
        </ul>
        {/* End of Sidebar */}
      </div>
    </div>
  );
};

export default Sidebar;
