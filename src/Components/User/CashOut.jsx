import React, { useState } from 'react';
import axios from 'axios';

const CashOut = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/cash-out`, { amount }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('Cash-out successful');
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Cash Out</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Cash Out</button>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default CashOut;
