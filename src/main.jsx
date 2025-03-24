import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import MainLayout from './layout/MainLayout/MainLayout.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Login from './pages/Login/Login.jsx';
import CardDetails from './pages/Home/CardDetails.jsx';
import PrivateRoute from './firebase/PrivateRoute.jsx';
import Application from './pages/Home/Application.jsx';
import MyApplication from './pages/Home/MyApplication.jsx';
import AddJob from './pages/Home/AddJob.jsx';
import MyPostedJobs from './pages/Home/MyPostedJobs.jsx';
import VIewApplication from './pages/Home/VIewApplication.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        // loader:()=> fetch(`http://localhost:3000/jobs`)
      },
      {
        path:'/jobsApply/:id',
        element:<PrivateRoute><Application></Application></PrivateRoute>,
        
      },
      {
        path:'/jobs/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        // loader:({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path:'/my-application',
        element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>,
       
      },
      {
        path:'/add-job',
        element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
       
      },
      {
        path:'/application/:job_id',
        element:<PrivateRoute><VIewApplication></VIewApplication></PrivateRoute>,
        // loader:({params})=>fetch(`https://job-portal-server-for-recruiter-part3-sand.vercel.app//job-applications/jobs/${params.job_id}`)
      },
      {
        path:'/my-posted-jobs',
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
  </StrictMode>,
)
