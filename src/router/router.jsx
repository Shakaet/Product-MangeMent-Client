import React from 'react';
import {
    createBrowserRouter,
    ServerRouter,
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
import AddProduct from '../component/AddProduct';
import MyAddedProduct from '../component/MyAddedProduct';
import ManageProduct from '../component/ManageProduct';
import UpdateProduct from '../component/UpdateProduct';
import AllProducts from '../component/AllProducts';
import ProductDetails from '../component/ProductDetails';
import MyCart from '../component/MyCart';
import Paymentas from '../component/Paymentas';
import MyPaymentHistory from '../component/MyPaymentHistory';
import SellerRoute from './SellerRoute';
import UserRoute from './userRoute';

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
          path:"/allProducts",
          element:<AllProducts></AllProducts>

        },
        {
          path:"/product/details/:id",
          element:<ProductDetails></ProductDetails>
        },
        {
          path:"/sellerReq",
          element:<PrivateRoute><SellerReq></SellerReq></PrivateRoute>

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

        //admin routes
        {
          path:"/dashboard/allusers",
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {

          path:"/dashboard/manageProduct",
          element:<AdminRoutes><ManageProduct></ManageProduct></AdminRoutes>

        },

        //seller routes
        {
          path:"/dashboard/addProduct",
          element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
        {
          path:"/dashboard/myaddedProduct",
          element:<SellerRoute><MyAddedProduct></MyAddedProduct></SellerRoute>
        },

        //user panel
        {
          path:"/dashboard/mycart",
          element:<UserRoute><MyCart></MyCart></UserRoute>

        },
        {
          path:"/dashboard/pay",
          element:<UserRoute><Paymentas></Paymentas></UserRoute>
        },
        {
          path:"/dashboard/paymentHistory",
          element:<UserRoute><MyPaymentHistory></MyPaymentHistory></UserRoute>
        },
        {
          path:"/dashboard/myProfile",
          element:<MyProfile></MyProfile>
        },
        {
          path:"/dashboard/updateProfile",
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:"/dashboard/updateProduct/:id",
          element:<UpdateProduct></UpdateProduct>
        }
      ]
    }
  ]);

export default router;