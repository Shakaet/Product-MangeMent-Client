import React from 'react';
import useAllUsers from '../hook/useAllUsers';
import axios from 'axios';

const AllUsers = () => {

    let [users,refetch]= useAllUsers()

    let handlePendingSellerRequest=(email)=>{

        axios.patch(`http://localhost:5000/users/adminUpdateSeller/${email}`)
        .then((res)=>{
            if(res.data.modifiedCount>0){
                refetch()
                alert("This User Now Seller")
            }
        })


    }
    return (
        <div>
        <h2 className="mb-10 text-3xl font-extrabold">Total Users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
              <tr>
                <th className="text-left p-3">No</th>
                <th className="text-left p-3">Photo</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3">Role</th>
                <th className="text-left p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                  } hover:bg-gray-200 transition-all`}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <img
                      src={user.user_photo}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td
                    className={"p-3"}
                  >
                    {user.role === "pending Seller Request" ? (
                <button
                  onClick={() => handlePendingSellerRequest(user.email)}
                  className=" hover:btn-lg text-yellow-600 font-bold underline hover:text-yellow-800 transition-all"
                >
                  {user.role}
                </button>
              ) : (
                user.role
              )}
                  </td>
                 
                  {/* Delete Button */}
                  <td className="p-3">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    );
};

export default AllUsers;