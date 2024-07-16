import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    pin: '',
    mobileNumber: '',
    email: '',
    role: 'user' // default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      alert(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="pin"
            placeholder="5-digit PIN"
            value={formData.pin}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="user">User</option>
            <option value="agent">Agent</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
