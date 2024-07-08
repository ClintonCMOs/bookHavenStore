import React from "react";
import Show from "./Show";

const Admin = () => {
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-users"></i>
        </div>
        <div className="stat-value" id="total-users">
          4
        </div>
        <div className="stat-label">Total Users</div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-book"></i>
        </div>
        <div className="stat-value" id="total-books">
          10
        </div>
        <div className="stat-label">Total Books</div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-download"></i>
        </div>
        <div className="stat-value" id="total-downloads">
          30
        </div>
        <div className="stat-label">Total Downloads</div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="stat-value" id="active-users">
          2
        </div>
        <div className="stat-label">Active Users</div>
      </div>
    </div>
  );
};

export default Admin;
