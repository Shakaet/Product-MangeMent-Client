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
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/dashboard/allusers",
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;