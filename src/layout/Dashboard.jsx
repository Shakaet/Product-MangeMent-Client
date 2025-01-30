import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAdmin from '../assets/hook/useAdmin';
import useUser from '../assets/hook/useUser';
import useSeller from '../assets/hook/useSeller';
import { Context } from '../provider/AuthProvider';
import useCart from '../assets/hook/useCart';



const Dashboard = () => {

  let {signOuts}=useContext(Context)
  let nav= useNavigate()

    let [isAdmin,refetch] = useAdmin()
    let [cartData]=useCart()

    let[isSeller]= useSeller()

    let [isUser]= useUser()

    let handleLogout=()=>{
      signOuts()
      nav("/login")

    }

    
    
    return (
//   <div className="flex flex-col md:flex-row min-h-screen">
//   {/* Sidebar */}
//   <section className="bg-gradient-to-b from-amber-500 to-orange-500 md:w-1/4 p-5 text-white">
//     <div className="m-5 p-5 text-2xl font-bold">
//       <ul className="space-y-4">

//         {
//             isAdmin && <div>

//            <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//           <Link to="/dashboard/allusers" className="block">User Management</Link>
//         </li>
//         <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//           <Link to="/dashboard/manageProduct" className="block">Manage Product</Link>
//         </li>



//             </div>
//         }

//         {
//             isSeller && <div>

//                     <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//                     <Link to="/dashboard/addProduct" className="block">Add Product</Link>
//                     </li>

//                     <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//                     <Link to="/dashboard/myaddedProduct" className="block">My Added Product</Link>
//                     </li>

//             </div>
//         }
        
//         {
//             isUser && <div>
//                 <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//           <Link to="/dashboard/mycart" className="block">My Cart <span className='text-black'>({cartData.length})</span></Link>
//         </li>
//             </div>
//         }
//         <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//           <Link to="/dashboard/myProfile" className="block">My Profile</Link>
//         </li>
//         <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//           <Link to="/" className="block">Home</Link>
//         </li>
//         <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-gray-700 font-extrabold">
//           <Link to="/allProducts" className="block">All Product</Link>
//         </li>
//         <li className="hover:bg-orange-600 p-3 rounded-md transition-all text-red-700 font-extrabold">
//           <Link onClick={handleLogout} className="block">LogOut</Link>
//         </li>
//       </ul>
//     </div>
//   </section>

//   {/* Main Content */}
//   <div className="flex-1 bg-gray-50 p-6">
//     <div className="bg-white shadow-lg rounded-md p-5">
//       <h2 className='text-center text-5xl font-extrabold text-yellow-500 mb-10'>Welcome to Dashboard</h2>
//       <Outlet />
//     </div>
//   </div>
// </div>

<div className="flex flex-col md:flex-row min-h-screen ">
  {/* Sidebar */}
  <section className="text-black bg-gradient-to-b from-amber-500 to-orange-600 md:w-1/4 p-6 font-extrabold shadow-md">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-extrabold uppercase tracking-wide">Dashboard</h1>
    </div>
    <ul className="space-y-4 text-lg font-semibold">
      {isAdmin && (
        <div>
          <li className="group">
            <Link to="/dashboard/allusers" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
              User Management
            </Link>
          </li>
          <li className="group mt-3">
            <Link to="/dashboard/manageProduct" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
              Manage Product
            </Link>
          </li>
        </div>
      )}

      {isSeller && (
        <div>
          <li className="group">
            <Link to="/dashboard/addProduct" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
              Add Product
            </Link>
          </li>
          <li className="group mt-3">
            <Link to="/dashboard/myaddedProduct" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
              My Added Product
            </Link>
          </li>
        </div>
      )}

      {isUser && (
        <div>
          <li className="group">
            <Link to="/dashboard/mycart" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
              My Cart <span className="text-black">({cartData.length})</span>
            </Link>
          </li>
        </div>
      )}

      <li className="group">
        <Link to="/dashboard/myProfile" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
          My Profile
        </Link>
      </li>
      <li className="group">
        <Link to="/" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
          Home
        </Link>
      </li>
      <li className="group">
        <Link to="/allProducts" className="block p-3 rounded-md transition-all bg-orange-500 hover:bg-orange-700 hover:scale-105">
          All Products
        </Link>
      </li>
      <li className="group">
        <Link onClick={handleLogout} className="block p-3 rounded-md transition-all bg-red-500 hover:bg-red-700 hover:scale-105">
          Log Out
        </Link>
      </li>
    </ul>
  </section>

  {/* Main Content */}
  <div className="flex-1 bg-gray-100 p-6">
    <div className=" rounded-xl p-8">
    
      <div className='flex justify-evenly items-center'>
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-yellow-500 mb-8">Welcome to Dashboard</h2>
     
      </div>
      
      <Outlet />
    </div>
  </div>
</div>


      

    );
};

export default Dashboard;