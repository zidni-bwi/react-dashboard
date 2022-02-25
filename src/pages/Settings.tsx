import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Settings = () => {
  return (
    <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
            <Topbar />
            <div className="container-fluid">
              <div className="card mt-5 mb-4">
                <div className="card-body">
                <h1 className="h2">Notifications</h1>
                <h5 className="h5">Manage the Notifications</h5>
                <div className="row pt-5">
                <div className="col-sm-4">
                <h5 className="h5">Notifications</h5>
                <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label className="form-check-label">
    Email
  </label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
<label className="form-check-label">
Push Notifications
</label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label">
    Text Message
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label">
    Phone Calls
  </label>
</div>
</div>
<div className="col-sm-4">
<h5 className="h5">Messages</h5>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label">
    Email
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label">
    Push Notifications
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label">
    Phone Calls
  </label>
</div>
</div>
</div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                <h1 className="h2">Password</h1>
                <h5 className="h5">Update Password</h5>
                <form>
  <div className="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Password" />
  </div>
  <div className="form-group pt-2">
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Confirm Password" />
  </div>
</form>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Settings;
