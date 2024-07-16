import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5555/users/register",
        formData
      );
      console.log("User registered successfully:", response.data);

      // Update the success message
      setSuccessMessage("User registered successfully!");
      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      // Set a timer to clear the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      navigate("/login");
    } catch (err) {
      console.error("Error registering user:", err);
    }
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
            <label>First Name</label>
            <input
              placeholder=""
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-register-form-group">
            <label>Last Name</label>
            <input
              placeholder=""
              type="text"
              name="lastName"
              value={formData.lastName}
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

          <button type="submit" className="login-register-button">
            Register
          </button>
          {successMessage && (
            <span className="success-message">{successMessage}</span>
          )}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
