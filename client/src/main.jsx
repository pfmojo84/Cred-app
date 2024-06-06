import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/userReg.jsx'
import Registration from './pages/employerReg.jsx'
import Home from './pages/Homepage'
import CreateJob from './pages/CreateJobPage.jsx'
import FindJob from './pages/FindJobs.jsx';
import UserProfile from './pages/userProfile.jsx';
import EmpProfile from './pages/empProfile.jsx';
import { createTheme } from '@mui/material';
import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: '#013e87',
    },
    secondary: {
      main: "#2e74c9",
    },
  },
});

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
      },
      {
        path: '/findjobs',
        element: <FindJob />
      },
      {
        path: '/portfolio',
        element: <UserProfile />
      },
      {
        path: '/empprofile',
        element: <EmpProfile />
      }    
      

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
