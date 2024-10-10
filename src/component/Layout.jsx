import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import '../App.css'

const Layout = () => {
  const location = useLocation();  // Get the current route path

  return (
    <div className="app-layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <div className="main-content">
          {/* Conditionally render the heading only on the main (root) page */}
          {location.pathname === '/' && (
            <h1 className="text-4xl text-center mt-20">Welcome Company Management</h1>
          )}
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;
