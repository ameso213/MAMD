import React from 'react';
import './profile.css'; // Import your CSS file for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        {/* User Profile Picture */}
        <div className="profile-picture">
          <img
            src=".\her.png" // Replace this with your actual image URL
            
            className="profile-img"
          />
          {/* <button className="profile-picture-btn">
            <span role="img" aria-label="Edit Picture">📷</span> Edit Picture
          </button> */}
        </div>

        {/* Display Name and Message */}
        <h2>Dear Keilah</h2>
        <p className="profile-message">
          Thank you for dining with us! <br />
          We appreciate your support and hope you enjoy your experience.
        </p>
      </div>

      {/* Profile Options */}
      <div className="profile-options">
        <button className="profile-option">
          <span role="img" aria-label="View Menu">📋</span> View Menu
        </button>
        <button className="profile-option">
          <span role="img" aria-label="Order Food">🍔</span> Order Food
        </button>
        <button className="profile-option">
          <span role="img" aria-label="Book a Table">📅</span> Book a Table
        </button>
        <button className="profile-option">
          <span role="img" aria-label="Track Order">🚚</span> Track Order
        </button>
        <button className="profile-option">
          <span role="img" aria-label="View Offers">💸</span> View Offers
        </button>
        <button className="profile-option">
          <span role="img" aria-label="Contact Us">📧</span> Contact Us
        </button>
        <button className="profile-option">
          <span role="img" aria-label="About Us">ℹ️</span> About Us
        </button>

        <button className="profile-option logout">
          <span role="img" aria-label="Log Out">🚪</span> Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
