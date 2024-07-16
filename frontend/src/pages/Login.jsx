import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5555/users/login",
        formData
      );
      if (response.data === "Success") {
        console.log("User logged in successfully:", response.data);

        navigate("/admin"); // Redirect to "/admin" after successful login
      } else {
        console.log("Invalid credentials");
      }
    } catch (err) {
      console.error("Invalid credentials:", err);
    }
  };

  return (
    <div className="login-register-container">
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <Link to="/" className="Home-link">
          Home
        </Link>
      </div>
      <h3>Login to BookHaven</h3>
      <form onSubmit={handleSubmit}>
        <div className="login-register-form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder=""
            type="email"
            name="email"
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-register-form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder=""
            type="password"
            name="password"
            aria-label="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-register-button">
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
