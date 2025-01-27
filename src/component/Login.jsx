import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { Context } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

  let {loginSetup}=useContext(Context)
  let navigate= useNavigate()
  let location= useLocation()
  const redirectPath = location.state?.from || "/";

 

    let handleSubmit=(e)=>{
        e.preventDefault()

        let email=e.target.email.value
        let password=e.target.password.value
        loginSetup(email, password)
      .then(() => {
        toast.success("Login successfully!");
        navigate(redirectPath);
      })
      .catch((error) => {
        toast.error(error.message || "Failed to login.");
      });

      

      
     
    

    }

    let handleForgetPassword=()=>{
      let email = document.querySelector('input[name="email"]').value;
      navigate("/forgetPassword", { state: { email } });
    
    }

   
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </button>
          </form>
          <button onClick={handleForgetPassword} className='mt-2 ms-2 opacity-40 underline hover:text-blue-400'>Forget Password? </button>
          <div className="text-center mt-4">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;