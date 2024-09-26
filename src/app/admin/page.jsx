import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from '../style.min.css';
import Link from 'next/link';
import Topbar from '../components/Topbar'; 
import Sidebar from '../components/Sidebar'; 

const AdminPage = () => {
    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar />
            <div className="flex-grow-1 d-flex flex-column">
                <Topbar />
                <div id="content" className="flex-fill overflow-auto">
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-3">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a
                                href="#"
                                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                                style={{ marginRight: '22px' }}
                            >
                                <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                            </a>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Pending Requests
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fa-solid fa-file-lines fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-danger shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                                    Pending Complaints
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fa-solid fa-file-pen fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 mb-4">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Transactions</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="myAreaChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
