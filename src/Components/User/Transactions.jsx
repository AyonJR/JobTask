import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/transactions`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setTransactions(response.data.transactions);
      } catch (err) {
        setError(err.response?.data || 'An error occurred');
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {error && <p>{error}</p>}
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <li key={transaction.id}>{transaction.details}</li>
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </ul>
    </div>
  );
};

export default Transactions;
