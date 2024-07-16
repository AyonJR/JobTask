import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApproveUser = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/pending-users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setPendingUsers(response.data);
      } catch (err) {
        setError(err.response?.data || 'An error occurred while fetching pending users');
      }
    };

    fetchPendingUsers();
  }, []);

  const handleApprove = async (userId) => {
    try {
      await axios.post('http://localhost:5000/admin/approve-user', { userId, action: 'approve' }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMessage('User approved successfully');
      setPendingUsers(pendingUsers.filter(user => user._id !== userId));
    } catch (err) {
      setError(err.response?.data || 'An error occurred while approving the user');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Approve Users</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {message && <p className="text-green-500 text-center mb-4">{message}</p>}
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-300">Name</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Email</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Mobile Number</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Role</th>
            <th className="py-2 px-4 border-b-2 border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingUsers.map(user => (
            <tr key={user._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.mobileNumber}</td>
              <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button 
                  onClick={() => handleApprove(user._id)}
                  className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-600"
                >
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveUser;
