import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1); // 1 = Enter Email, 2 = Enter Code, 3 = Reset Password
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEmailSubmit = () => {
    if (email) {
      // Simulate sending the reset code to the email
      console.log("Reset code sent to:", email);
      setStep(2); // Proceed to Enter Code step
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleCodeSubmit = () => {
    if (code) {
      // Simulate verifying the reset code
      console.log("Code entered:", code);
      setStep(3); // Proceed to Reset Password step
    } else {
      alert("Please enter the code sent to your email.");
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = () => {
    if (!newPassword) {
      alert("Please enter a new password.");
    } else if (!validatePassword(newPassword)) {
      alert(
        "Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    } else {
      // Simulate password update
      console.log("Password updated to:", newPassword);
      alert("Password successfully updated.");
      setStep(1); // Reset to the initial step
      setEmail("");
      setCode("");
      setNewPassword("");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {step === 1 && (
        <div>
          <h2>Forgot Password</h2>
          <p>We'll send you an email to reset your password.</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
          />
          <br />
          <button
            onClick={handleEmailSubmit}
            style={{
              backgroundColor: "#cc0000",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Reset Password
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Enter Reset Code</h2>
          <p>Check your email for the reset code and enter it below.</p>
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
          />
          <br />
          <button
            onClick={handleCodeSubmit}
            style={{
              backgroundColor: "#cc0000",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Verify Code
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Reset Password</h2>
          <p>Enter your new password below.</p>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
          />
          <br />
          <button
            onClick={handlePasswordChange}
            style={{
              backgroundColor: "#cc0000",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Change Password
          </button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
