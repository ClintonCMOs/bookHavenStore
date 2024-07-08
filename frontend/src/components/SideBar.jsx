import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/booklogo.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li className="active">
            <Link to="#">
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-Link">
              <i className="fas fa-user"></i> Users
              <i className="fas fa-chevron-down arrow"></i>
            </Link>
            <ul>
              <li>
                <Link to="/manage_user">Manage Users</Link>
              </li>
              <li>
                <Link to="/delete_user">Delete User</Link>
              </li>
              <li>
                <Link to="/users_stats">Users Statistics</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-Link">
              <i className="fas fa-book"></i> Manage Books
              <i className="fas fa-chevron-down arrow"></i>
            </Link>
            <ul>
              <li>
                <Link to="/books/create">Add Book</Link>
              </li>
              <li>
                <Link to="/books/edit/:isbn">Edit Book content</Link>
              </li>
              <li>
                <Link to="/books/delete/:isbn">Delete Book</Link>
              </li>
              <li>
                <Link to="/books/show">Books Available</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
