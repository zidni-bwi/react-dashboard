import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import Account from "./pages/Account";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="account" element={<Account />} />
        <Route path="customers" element={<Customers />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="settings" element={<Settings />} />
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
