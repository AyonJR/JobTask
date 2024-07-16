import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/login`, { mobileNumber, email, pin });
      localStorage.setItem('token', response.data.token);
      navigate('/balance');
    } catch (err) {
      setError(err.response?.data || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="PIN"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
