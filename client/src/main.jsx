import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App.jsx'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/userReg'
import Home from './pages/Homepage'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/signIn',
        element: <SignIn/>
      },
      {
        path: '/register',
        element: <Register />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
