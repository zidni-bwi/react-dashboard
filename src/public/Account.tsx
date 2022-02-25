import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Account = () => {
  return (
    <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
            <Topbar />
            <div className="container-fluid">
            <div className="row pt-5">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                 <img src="https://www.seekpng.com/png/full/41-410093_circled-user-icon-user-profile-icon-png.png" className="rounded-circle w-25"/>
                  <h5 className="card-title">Nama User</h5>
                  <p className="card-text">Informasi User</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                <form>
<div className="row pb-2">
  <div className="col">
    <input type="text" className="form-control" placeholder="First name" />
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Last name" />
  </div>
</div>
<div className="row pb-2">
<div className="col">
  <input type="text" className="form-control" placeholder="Email Address" />
</div>
<div className="col">
  <input type="text" className="form-control" placeholder="Last name" />
</div>
</div>
<div className="row pb-2">
<div className="col">
  <input type="text" className="form-control" placeholder="Country" />
</div>
<div className="col">
  <input type="text" className="form-control" placeholder="Select State" />
</div>
</div>
</form>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Account;
