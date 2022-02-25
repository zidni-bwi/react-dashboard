import React from 'react';

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Products = () => {
  return (
    <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
            <Topbar />
            <div className="container-fluid">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 className="h2">Products</h1>
  </div>

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-5">
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Dropbox</text></svg>

              <div className="card-body">
                <p className="card-text">Dropbox is a file hosting service that offer cloud storage. file syncronization, a personal cloud</p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Medium</text></svg>

              <div className="card-body">
              <p className="card-text">Medium is a file hosting service that offer cloud storage. file syncronization, a personal cloud</p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Slack</text></svg>

              <div className="card-body">
                <p className="card-text">Slack is a file hosting service that offer cloud storage. file syncronization, a personal cloud</p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Dropboxl</text></svg>

              <div className="card-body">
                <p className="card-text">Dropbox is a file hosting service that offer cloud storage. file syncronization, a personal cloud</p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Medium</text></svg>

              <div className="card-body">
                <p className="card-text">Medium is a file hosting service that offer cloud storage. file syncronization, a personal cloud</p>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Slack</text></svg>

              <div className="card-body">
                <p className="card-text">Slack is a file hosting service that offer cloud storage. file syncronization, a personal cloud.</p>

              </div>
            </div>
          </div>
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>

            </div>
        </div>
    </div>
  );
};

export default Products;
