// Common layout wrapper component
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="app-logo">
            Survey Project
          </Link>
          <nav className="app-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/surveys/create" className="nav-link">Create Survey</Link>
          </nav>
        </div>
      </header>
      
      <main className="app-main">
        <Outlet />
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Intern Survey Project</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
