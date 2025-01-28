import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const MyProfile = () => {

    let {user,signOuts}= useContext(Context)
    let nav=useNavigate()

    let handleLogout=()=>{
        signOuts()
        nav("/login")


    }
    return (
        <div>

<div className="min-h-screen flex items-center justify-center bg-opacity-80 bg-gradient-to-br from-yellow-500 via-blue-200 to-blue-800 hover:bg-gray-600 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-6">
        <div className="flex flex-col items-center">
          {/* User Photo */}
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-md object-cover"
          />

          {/* User Name */}
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user?.displayName || "Anonymous User"}
          </h2>

          {/* User Email */}
          <p className="text-gray-600 mt-2">{user?.email || "No Email Available"}</p>

          {/* Actions */}
          <div className="mt-6 flex flex-col items-center space-y-3">
            <Link to={"/dashboard/updateProfile"} className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-all">
              Edit Profile
            </Link>
            {/* <button onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all">
              Logout
            </button> */}
          </div>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default MyProfile;