import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    let {googleSign}= useContext(Context)
    let navigate= useNavigate()
    let location= useLocation()
    const redirectPath = location.state?.from || "/";

    const handleGoogle = () => {
        googleSign()
          .then((result) => {
            let user=result.user
            // console.log(user)
            toast.success("Google Sign in successfully!");
            navigate(redirectPath);

            let usersData={
                name:user?.displayName,
                email:user?.email,
                user_photo:user?.photoURL,
                role:"user"

            }
            axios.post("https://product-project-server.vercel.app/users",usersData)
            .then((res)=>{
                if(res.data.insertedId){
                    // alert("user added")
                    
                }
            })
            .catch((error)=>{
                // alert("user already existed")
            })
          })
          .catch((error) => {
            toast.error(error.message || "Failed to create account.");
          });
      };
    return (
        <div>
            <button onClick={handleGoogle} className="btn btn-accent mt-5 items-center flex mx-auto w-full">Login with < FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;