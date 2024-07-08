import React from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Show from "../components/Show";

const ShowBook = () => {
  return (
    <div className="admin-dashboard">
      <SideBar />
      <main className="main-content">
        <TopNav />
        <h1>Books Available</h1>
        <Show />
      </main>
    </div>
  );
};

export default ShowBook;
