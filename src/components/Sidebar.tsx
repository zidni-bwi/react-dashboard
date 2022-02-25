import React from 'react';
import {Link} from "react-router-dom";
import { renderToString } from 'react-dom/server';

const Sidebar = () => {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">React JS</div>
        <div className="list-group list-group-flush">
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/">Dashboard</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/customers">Customers</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/products">Products</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/account">Account</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/settings">Settings</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/login">Login</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/register">Register</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/error">Error</Link>
        </div>
    </div>

)};
        export default Sidebar;
