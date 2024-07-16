import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = () => {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/balance`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setBalance(response.data.balance);
      } catch (err) {
        setError(err.response?.data || 'An error occurred');
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h1>Balance</h1>
      {error && <p>{error}</p>}
      {balance !== null ? <p>Current Balance: {balance} Taka</p> : <p>Loading...</p>}
    </div>
  );
};

export default Balance;
