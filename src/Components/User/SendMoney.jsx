import React, { useState } from 'react';
import axios from 'axios';

const SendMoney = () => {
  const [amount, setAmount] = useState('');
  const [recipientMobileNumber, setRecipientMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/send-money`, { amount, recipientMobileNumber }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('Transaction successful');
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Send Money</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Recipient Mobile Number"
          value={recipientMobileNumber}
          onChange={(e) => setRecipientMobileNumber(e.target.value)}
          required
        />
        <button type="submit">Send</button>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SendMoney;
