import React from "react";
import SideBar from "../components/SideBar";
import TopNav from "../components/TopNav";
import Add from "../components/Add";

const CreateBook = () => {
  return (
    <div className="admin-dashboard">
      <SideBar />
      <main className="main-content">
        <TopNav />
        <h1>Add Book</h1>
        <Add />
      </main>
    </div>
  );
};

export default CreateBook;
