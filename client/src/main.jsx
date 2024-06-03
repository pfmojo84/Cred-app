import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App.jsx'
import Home from './pages/Home'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/userReg'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: '',
    children: [
      {
        path: '/home',
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
