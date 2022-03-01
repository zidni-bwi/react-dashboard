import React from 'react';

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Customers = () => {
  return (
    <div>
    <Topbar />
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Customers</h1>
    </div>

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
        </main>
      </div>
    </div>
    </div>
  );
};

export default Customers;
