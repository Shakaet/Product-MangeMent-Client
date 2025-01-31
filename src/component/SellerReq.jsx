import React, { useContext, useState } from 'react';
import { Context } from '../provider/AuthProvider';
import axios from 'axios';
import useAllUsers from '../assets/hook/useAllUsers';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from "../assets/dashboard.json"

const SellerReq = () => {


    let {user}= useContext(Context)
    

     let [users,refetch]= useAllUsers()

     const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    


    let handleSeller=()=>{
        

        Swal.fire({
            title: "Are you sure?",
            text: "Do you Want to be a Seller?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want to be a Seller!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`https://product-project-server.vercel.app/users/${user?.email}`)
                .then((res)=>{
                    if(res.data.modifiedCount>0){
                        setIsButtonDisabled(true);
                        refetch()
                        Swal.fire({
                            title: "Seller Request Sent Successfully !",
                            text: "Seller Request Sent Successfully !",
                            icon: "success"
                          });
                    }
                })
                setIsButtonDisabled(true);
              
            }
          });



       
    }

    
    return (
//         <div className=' md:flex justify-between items-center  md:mt-0 md:min-h-screen bg-gray-500'>

//                     {/* {
//                     users.map((u) => {
//                         if (u.email === user?.email) {
//                         return u?.role === "user" || u?.role==="pending Seller Request" ? (
//                             <button
//                             key={u.id}
//                             onClick={handleSeller}
//                             className="btn btn-warning btn-lg"
//                             disabled={isButtonDisabled}
//                             >
//                             Request For Seller
//                             </button>
//                         ) : (
//                             <h1 key={u.id} className="text-3xl font-extrabold text-green-500">
//                             You Are Already a Seller
//                             </h1>
//                         );
//                         }
//                         return null;
//                     })
//                     } */}

//       <div className="">
//       <Lottie animationData={animationData} loop={true} className="w-96 h-96" />
//     </div>


// {
//   users.map((u) => {
//     console.log(u.role)
//     if (u.email === user?.email) {
//       if (u?.role === "pending Seller Request") {
//         return (
//           <h1 key={u.id} className="text-3xl font-extrabold text-yellow-500">
//             Your Seller Request is Pending
//           </h1>
//         );
//       } else if (u?.role === "user") {
//         return (
//           // <button
//           //   key={u.id}
//           //   onClick={handleSeller}
//           //   className="btn btn-warning btn-lg"
//           //   disabled={isButtonDisabled}
//           // >
//           //   Request For Seller
//           // </button>

//           <>
//           <div className="flex flex-col items-center justify-center text-center space-y-4 p-6   rounded-lg max-w-md mx-auto my-10">
        
//            <button
//             key={u.id}
//             onClick={handleSeller}
//             className="btn btn-warning btn-lg"
//             disabled={isButtonDisabled}
//           >
//             Request For Seller
//           </button>

// </div>


//           </>
//         );
//       } else if (u?.role === "admin") {
//         return (
//           //   <h1 key={u.id} className="text-3xl text-center font-extrabold text-yellow-500 bg-white">
//           //    Your are Admin,Only User Can Request for Seller
//           // </h1>
//           <>
//           <div className="flex flex-col items-center justify-center text-center space-y-4 p-6   rounded-lg max-w-lg mx-auto my-10">
//           <h1
//             key={u.id}
//             className="text-3xl mb-5  font-extrabold text-green-500"
//           >
//             Your are Admin,Only User Can Request for Seller
//           </h1>
        
         
//         </div>

//         </>

//         );
//     }
      
//       else {
//         return (
//           <>
//           <div className="flex flex-col items-center justify-center text-center space-y-4 p-6   rounded-lg max-w-md mx-auto my-10">
//   <h1
//     key={u.id}
//     className="text-3xl mb-5  font-extrabold text-green-500"
//   >
//     You Are Already a Seller
//   </h1>

//   <p>
//     <NavLink
//       to={"/dashboard/addProduct"}
//       className="btn bg-green-500 text-white text-xs md:text-sm py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
//     >
//       Add Product
//     </NavLink>
//   </p>
// </div>


//           </>
//         );
//       }
//     }
//     return null;
//   })
// }






//             {/* {
//                 users.map((u)=>{
//                     return u.email ==user?.email && u?.role=="user" ?
//                     <button onClick={handleSeller} className="btn btn-warning btn-lg">Request For Seller</button>


//                     :
//                     <button className="btn btn-warning btn-lg">You Already A Seller</button>
                  

//                 })
//             } */}
//             {/* <button onClick={handleSeller} className="btn btn-warning btn-lg">Request For Seller</button> */}
//         </div>


<div className="flex flex-col md:flex-row justify-between items-center min-h-screen bg-gray-500 p-6 md:p-10">

{/* Lottie Animation */}
<div className="w-full md:w-1/2 mt-16 flex justify-center">
  <Lottie animationData={animationData} loop={true} className="w-64 md:w-96 h-64 md:h-96" />
</div>

{/* User Status Section */}
<div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6 mt-6 md:mt-0">
  {users.map((u) => {
    if (u.email === user?.email) {
      if (u?.role === "pending Seller Request") {
        return (
          <h1 key={u.id} className="text-2xl md:text-3xl font-extrabold text-yellow-500">
            Your Seller Request is Pending
          </h1>
        );
      } else if (u?.role === "user") {
        return (
          <button
            key={u.id}
            onClick={handleSeller}
            className="btn btn-warning btn-lg px-6 py-3 text-lg"
            disabled={isButtonDisabled}
          >
            Request For Seller
          </button>
        );
      } else if (u?.role === "admin") {
        return (
          <div key={u.id} className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
            <h1 className="text-2xl font-extrabold text-green-500">
              You are an Admin. Only Users Can Request to Become a Seller.
            </h1>
          </div>
        );
      } else {
        return (
          <div key={u.id} className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
            <h1 className="text-2xl font-extrabold text-green-500 mb-4">
              You Are Already a Seller
            </h1>
            <NavLink
              to="/dashboard/addProduct"
              className="btn bg-green-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Add Product
            </NavLink>
          </div>
        );
      }
    }
    return null;
  })}
</div>

</div>

    );
};

export default SellerReq;