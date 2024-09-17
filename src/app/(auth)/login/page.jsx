import 'bootstrap/dist/css/bootstrap.css';
import styles from './login.module.css';

const LoginPage = () => {
    return (
        <div className={styles.loginContainer}>
            <h3 className={styles.loginHeader}>Login</h3>
            <form>
                <div className="mb-3">
                <label className="email">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className={`${styles.loginBtn} btn btn-primary`}>Login</button> {/* Apply both CSS module and Bootstrap class */}
            </form>
        </div>
    )
}

export default LoginPage;
