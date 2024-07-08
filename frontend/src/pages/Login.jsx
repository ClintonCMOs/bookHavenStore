import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
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
