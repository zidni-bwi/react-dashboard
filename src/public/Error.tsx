import {Link} from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Account = () => {
  return (
    <div className="container">
  <div className="row">
    <div className="col text-center">
    <h1 className="h1">Error 404</h1>
      <Link className="btn btn-default" to="/">Kembali ke Dashboard</Link>
    </div>
  </div>
</div>
  );
};

export default Account;
