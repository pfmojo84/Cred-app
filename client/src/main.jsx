import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/userReg.jsx'
import Registration from './pages/employerReg.jsx'
import Home from './pages/Homepage'
import CreateJob from './pages/CreateJobPage.jsx'
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
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/createjob',
        element: <CreateJob />
      }
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
