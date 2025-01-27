import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    let{user,updateUserProfile}= useContext(Context)

    let nav= useNavigate()


    let handleSubmit=(e)=>{
        e.preventDefault()

        let name=e.target.name.value
        // let email=e.target.email.value
        let photo=e.target.photo.value
        // console.log(name,email,photo)

        let profileUpdates={
            displayName: name,
            photoURL: photo
          }

          updateUserProfile(user,profileUpdates)
          .then((result)=>{
           toast.success("Profile Updated")
           nav("/dashboard/myProfile")
           
          
        
        })
        .catch((error)=>{
            // alert("user already existed")
        })



    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="bg-white shadow-xl rounded-lg max-w-lg w-full p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Edit Your Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name='name'
              
              
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              
              defaultValue={user?.email}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
              required
              disabled
            />
          </div>

          {/* Photo URL Input */}
          <div>
            <label htmlFor="photoURL" className="block text-lg font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              name='photo'
             
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter photo URL"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-all"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 transition-all"
              onClick={() => window.history.back()} // Navigate back
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateProfile;