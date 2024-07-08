import React from "react";
import userImage from "../assets/clinton.jpg";
const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search"></i>
      </div>
      <div className="user-info">
        <i className="fas fa-user-circle"></i>
        <span className="username">Admin User</span>
      </div>
    </nav>
  );
};

export default TopNav;
