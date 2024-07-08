import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import DeleteBook from "./pages/DeleteBook";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/show" element={<ShowBook />} />
      <Route path="/books/edit/:isbn" element={<EditBook />} />
      <Route path="/books/delete/:isbn" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
