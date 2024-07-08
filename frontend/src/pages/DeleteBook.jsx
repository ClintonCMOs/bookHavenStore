import React from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Delete from "../components/Delete";

const DeleteBook = () => {
  return (
    <div className="admin-dashboard">
      <SideBar />
      <main className="main-content">
        <TopNav />
        <h1>Delete Book</h1>
        <Delete />
      </main>
    </div>
  );
};

export default DeleteBook;
