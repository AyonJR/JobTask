export const routes = {
    admin: [
      { path: '/admin/users', label: 'User List' },
      { path: '/admin/approve-user', label: 'Approve Users' },
    ],
    user: [
      { path: '/balance', label: 'Balance' },
      { path: '/send-money', label: 'Send Money' },
      { path: '/cash-out', label: 'Cash Out' },
      { path: '/cash-in', label: 'Cash In' },
      { path: '/transactions', label: 'Transactions' },
    ],
    guest: [
      { path: '/', label: 'Login' },
      { path: '/register', label: 'Register' },
    ],
  };
  