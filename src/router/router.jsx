import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../component/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import ForgetPass from '../component/ForgetPass';
import Dashboard from '../layout/Dashboard';
import AllUsers from '../assets/adminRoute/AllUsers';
import SellerReq from '../component/SellerReq';
import PrivateRoute from './PrivateRoute';
import AdminRoutes from './AdminRoutes';
import MyProfile from '../component/MyProfile';
import UpdateProfile from '../component/UpdateProfile';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
          path:"/sellerReq",
          element:<SellerReq></SellerReq>

        }
       

      ]
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/forgetPassword",
      element:<ForgetPass></ForgetPass>
    },
    {
      path:"/register",
      element:<Register></Register>
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"/dashboard/allusers",
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path:"/dashboard/myProfile",
          element:<MyProfile></MyProfile>
        },
        {
          path:"/dashboard/updateProfile",
          element:<UpdateProfile></UpdateProfile>
        }
      ]
    }
  ]);

export default router;