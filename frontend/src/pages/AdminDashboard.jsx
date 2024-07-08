import React from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Admin from "../components/Admin";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <SideBar />
      <main className="main-content">
        <TopNav />
        <h1>Dashboard</h1>
        <Admin />
      </main>
    </div>
  );
};

export default AdminDashboard;
