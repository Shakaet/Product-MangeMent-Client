import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {

    
    
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
  {/* Sidebar */}
  <section className="bg-gradient-to-b from-amber-500 to-orange-500 md:w-1/4 p-5 text-white">
    <div className="m-5 p-5 text-3xl font-bold">
      <ul className="space-y-4">
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all">
          <Link to="/dashboard/allusers" className="block">All Users</Link>
        </li>
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all">
          <Link to="/manage-product" className="block">Manage Product</Link>
        </li>
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all">
          <Link to="/manage-product" className="block">My Cart</Link>
        </li>
        <li className="hover:bg-orange-600 p-3 rounded-md transition-all">
          <Link to="/" className="block">Home</Link>
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