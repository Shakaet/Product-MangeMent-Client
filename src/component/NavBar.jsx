import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../provider/AuthProvider';



const NavBar = () => {

 

  let {user,signOuts}= useContext(Context)
  let nav=useNavigate()


  let handlelogOut=()=>{
    signOuts()
    nav("/login")

  }

 
    return (
        <div>
        <div className="navbar bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-white p-2 shadow text-black"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">All Products</a>
            </li>
            <li>
              <a href="/sellerReq">Request for Seller</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          
          </ul>
        </div>
        {/* Logo */}
        <a href="#home" className="btn btn-ghost text-2xl font-bold">
          Smarty Product
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a href="#home" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-yellow-300">
              All Products
            </a>
          </li>
            
          <li>
              <a href="/sellerReq">Request for Seller</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
               
              
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-3">
            {/* User Avatar with Hover Name */}
            <div className="relative group">
              <div className="avatar">
                <div className="w-10 rounded-full border-2 border-white">
                  <img src={user.photoURL} alt="User Avatar" />
                </div>
              </div>
              {/* Tooltip with User Name */}
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 hidden group-hover:block rounded-lg bg-black px-2 py-1 text-sm text-white shadow-md">
                {user.displayName}
              </div>
            </div>
            {/* Logout Button */}
            <button
              onClick={handlelogOut}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-black"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={"/login"}
            
            className="btn btn-primary text-white hover:bg-yellow-400"
          >
            Login
          </Link>
        )}
      </div>
    </div>
        </div>
    );
};

export default NavBar;