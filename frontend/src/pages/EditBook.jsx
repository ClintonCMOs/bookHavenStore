import React from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Edit from "../components/Edit";

const EditBook = () => {
  return (
    <div className="admin-dashboard">
      <SideBar />
      <main className="main-content">
        <TopNav />
        <h1>Edit Book</h1>
        <Edit />
      </main>
    </div>
  );
};

export default EditBook;
