import {Link} from "react-router-dom";

const Login = () => {
  return (
    <form className="form-signin">
    <div className="card">
      <div className="card-body">
      <Link to="/">Dashboard</Link>
      <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
      <label className="sr-only">Email address</label>
      <input className="form-control" placeholder="Email address" required />
      <label className="sr-only">Password</label>
      <input className="form-control mb-2" required />
      <button className="btn btn-lg btn-primary btn-block form-control" type="submit">Sign in</button>
      </div>
      </div>
    </form>
  );
};

export default Login;
