import React, { useState } from "react";
import "./login.css"; // Add your custom CSS styles here
import ForgotPassword from "../components/resetpassword"; // Import the ForgotPassword component

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [isForgotPassword, setIsForgotPassword] = useState(false); // State to toggle Forgot Password page

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleForgotPasswordToggle = () => {
    setIsForgotPassword(true); // Navigate to Forgot Password page
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        {isForgotPassword ? (
          <ForgotPassword /> // Render the ForgotPassword component
        ) : isLogin ? (
          <div className="login-form">
            <h1 className="form-title">Login</h1>
            <div className="form-group">
              <label className="form-label">E-mail Address</label>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="password-container">
                <input
                  className="form-input"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="form-group forgot-password">
              <input
                type="checkbox"
                id="forgot-password"
                onChange={handleForgotPasswordToggle}
              />
              <label htmlFor="forgot-password">Forgot password</label>
            </div>
            <button className="auth-button login-button">Login</button>
            <p className="toggle-form">
              Don’t have an account?{" "}
              <span onClick={handleToggleForm} className="form-link">
                Create an account
              </span>
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h1 className="form-title">Create your account</h1>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">E-mail Address</label>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm password</label>
              <input
                className="form-input"
                type="password"
                placeholder="Re-enter your password"
              />
            </div>
            <button className="auth-button signup-button">Sign Up</button>
            <p className="toggle-form">
              Already have an account?{" "}
              <span onClick={handleToggleForm} className="form-link">
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
