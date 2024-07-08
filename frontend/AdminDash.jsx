import React from "react";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="logo">
          <a href="#">
            <img src="../src/assets/booklogo.png" alt="Logo" />
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li className="active">
              <a href="#">
                <i className="fas fa-tachometer-alt"></i> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-user"></i> Users
                <i className="fas fa-chevron-down arrow"></i>
              </a>
              <ul>
                <li>
                  <a href="/manage_user">Manage Users</a>
                </li>
                <li>
                  <a href="/delete_user">Delete User</a>
                </li>
                <li>
                  <a href="/users_stats">Users Statistics</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-book"></i> Manage Books
                <i className="fas fa-chevron-down arrow"></i>
              </a>
              <ul>
                <li>
                  <a href="pages/AddBook.jsx">Add Book</a>
                </li>
                <li>
                  <a href="pages/edit_book.html">Edit Book content</a>
                </li>
                <li>
                  <a href="pages/delete_book.html">Delete Book</a>
                </li>
                <li>
                  <a href="pages/books_available.html">Books Available</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <main className="main-content">
        <nav className="top-nav">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
          </div>
          <div className="user-info">
            <img src="../src/assets/clinton.jpg" alt="User" />
            <span>Clinton</span>
          </div>
        </nav>
        <h1>Dashboard</h1>
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stat-value" id="total-users">
              500
            </div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-book"></i>
            </div>
            <div className="stat-value" id="total-books">
              1000
            </div>
            <div className="stat-label">Total Books</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-download"></i>
            </div>
            <div className="stat-value" id="total-downloads">
              2500
            </div>
            <div className="stat-label">Total Downloads</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="stat-value" id="active-users">
              300
            </div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
