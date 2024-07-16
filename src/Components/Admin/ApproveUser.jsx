import React, { useState } from 'react';
import axios from 'axios';

const ApproveUser = () => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleApprove = async () => {
    try {
      await axios.post(`http://localhost:5000/admin/approve-user`, { userId }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('User approved successfully');
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Approve User</h1>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <button onClick={handleApprove}>Approve</button>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ApproveUser;
