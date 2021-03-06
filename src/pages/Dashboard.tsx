import React from 'react';

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <div>
    <Topbar />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Dashboard</h1>
    </div>
    <div className="row">
    <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Budget</h5>
        <p className="card-text">24k</p>
      </div>
    </div>
    </div>
    <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Total Customers</h5>
        <p className="card-text">1.6k</p>
      </div>
    </div>
    </div>
    <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Task Progress</h5>
        <p className="card-text">75.5%</p>
      </div>
    </div>
    </div>
    <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Total Profit</h5>
        <p className="card-text">$23k</p>
      </div>
    </div>
    </div>
    </div>
    <div className="row pt-5">
    <div className="col-sm-4">
    <div className="card">
      <div className="card-header">
        Lastest Products
      </div>
      <ul className="list-group list-group-flush">
      <li className="list-group-item">Dropbox</li>
      <li className="list-group-item">Medium Corporation</li>
      <li className="list-group-item">Slack</li>
      <li className="list-group-item">Lyft</li>
      <li className="list-group-item">Github</li>
      </ul>
    </div>
    </div>
    <div className="col-sm-8">
    <div className="card">
      <div className="card-header">
        Lastest Orders
      </div>
      <table className="card-table table">
    <thead>
      <tr>
        <th scope="col">ORDER REF</th>
        <th scope="col">CUSTOMER</th>
        <th scope="col">DATE</th>
        <th scope="col">STATUS</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>PENDING</td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>DELIVERED</td>
      </tr>
      <tr>
        <td>Thornton</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
        <td>REFUNDED</td>
      </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div>
        </main>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
