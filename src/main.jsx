import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registration from './Components/Registration.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
