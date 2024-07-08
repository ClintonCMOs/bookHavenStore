import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("", { formData });
    console.log("Submitted:", formData);
  };

  return (
    <div>
      <div className="login-register-container">
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
          <Link to="/" className="Home-link">
            Home
          </Link>
        </div>
        <h3>Register to BookHaven</h3>
        <form onSubmit={handleSubmit}>
          <div className="login-register-form-group">
            <label>Name</label>
            <input
              placeholder=""
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-register-form-group">
            <label>Email</label>
            <input
              placeholder=""
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-register-form-group">
            <label>Password</label>
            <input
              placeholder=""
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="login-register-button" onClick={handleSubmit}>
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
