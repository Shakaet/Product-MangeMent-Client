import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../assets/hook/useAdmin';
import useUser from '../assets/hook/useUser';
import useSeller from '../assets/hook/useSeller';


const Dashboard = () => {

    let [isAdmin,refetch] = useAdmin()

    let[isSeller]= useSeller()

    let [isUser]= useUser()

    
    
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
  {/* Sidebar */}
  <section className="bg-gradient-to-b from-amber-500 to-orange-500 md:w-1/4 p-5 text-white">
    <div className="m-5 p-5 text-2xl font-bold">
      <ul className="space-y-4">

        {
            isAdmin && <div>

           <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
          <Link to="/dashboard/allusers" className="block">All Users</Link>
        </li>
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
          <Link to="/manage-product" className="block">Manage Product</Link>
        </li>



            </div>
        }

        {
            isSeller && <div>

                    <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
                    <Link to="/manage-product" className="block">Add Product</Link>
                    </li>

                    <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
                    <Link to="/manage-product" className="block">My Added Product</Link>
                    </li>

            </div>
        }
        
        {
            isUser && <div>
                <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
          <Link to="/manage-product" className="block">My Cart</Link>
        </li>
            </div>
        }
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
          <Link to="/dashboard/myProfile" className="block">My Profile</Link>
        </li>
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
          <Link to="/" className="block">Home</Link>
        </li>
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-red-700 font-extrabold">
          <Link to="/" className="block">LogOut</Link>
        </li>
      </ul>
    </div>
  </section>

  {/* Main Content */}
  <div className="flex-1 bg-gray-50 p-6">
    <div className="bg-white shadow-lg rounded-md p-5">
      <Outlet />
    </div>
  </div>
</div>

    );
};

export default Dashboard;