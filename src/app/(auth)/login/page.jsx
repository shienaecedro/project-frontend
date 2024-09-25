import 'bootstrap/dist/css/bootstrap.css';
import styles from '../../style.min.css';

const LoginPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100"> {/* Full-height container, centered vertically & horizontally */}
            <div className="col-xl-4 col-lg-6 col-md-8"> {/* Adjusted column size */}
                <div className="card o-hidden border-0 shadow-lg">
                    <div className="card-body p-0">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Login</h1> {/* Changed text */}
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control form-control-user"
                                        id="exampleInputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-user"
                                        id="exampleInputPassword"
                                        placeholder="Password"
                                    />
                                </div>
                                {/* Forgot Password link below password input */}
                                <div className="text-right mb-3">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Login
                                </button>
                                <hr />
                            </form>
                            <div className="text-center">
                                <a className="small" href="register.html">Create an Account!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
