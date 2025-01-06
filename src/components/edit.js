import React, { useState } from 'react';

const EditProfile = () => {
  const [displayName, setDisplayName] = useState('');

  const handleResetPassword = () => {
    alert('Password reset link has been sent to your email.');
    // Here, you would call an API to trigger the reset password email
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    );
    if (confirmDelete) {
      alert('Your account has been deleted.');
      // Here, you would call an API to delete the user account
    }
  };

  const handleSaveDisplayName = () => {
    alert(`Display name updated to: ${displayName}`);
    // Here, you would call an API to update the display name
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Edit Profile</h2>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="displayName" style={{ display: 'block', marginBottom: '8px' }}>
          Full Name
        </label>
        <input
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name"
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
        <button
          onClick={handleSaveDisplayName}
          style={{
            marginTop: '10px',
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Save
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={handleResetPassword}
          style={{
            width: '100%',
            padding: '10px 15px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Reset Password
        </button>
      </div>

      <div>
        <button
          onClick={handleDeleteAccount}
          style={{
            width: '100%',
            padding: '10px 15px',
            backgroundColor: '#FF4C4C',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
