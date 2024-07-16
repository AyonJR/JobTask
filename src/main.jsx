import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Login from './Components/Auth/Login.jsx';
import Register from './Components/Auth/Register.jsx';
import Balance from './Components/User/Balance.jsx';
import SendMoney from './Components/User/SendMoney.jsx';
import CashOut from './Components/User/CashOut.jsx';
import CashIn from './Components/User/CashIn.jsx';
import Transactions from './Components/User/Transactions.jsx';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import UserList from './Components/Admin/UserList.jsx';
import ApproveUser from './Components/Admin/ApproveUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // You might want to set up the login or registration as the default route
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/balance",
    element: <Balance />,
  },
  {
    path: "/send-money",
    element: <SendMoney />,
  },
  {
    path: "/cash-out",
    element: <CashOut />,
  },
  {
    path: "/cash-in",
    element: <CashIn />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/users",
    element: <UserList />,
  },
  {
    path: "/admin/approve-user",
    element: <ApproveUser />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
