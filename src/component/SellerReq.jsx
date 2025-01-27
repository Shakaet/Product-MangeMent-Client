import React, { useContext, useState } from 'react';
import { Context } from '../provider/AuthProvider';
import axios from 'axios';
import useAllUsers from '../assets/hook/useAllUsers';
import Swal from 'sweetalert2';

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
                axios.patch(`http://localhost:5000/users/${user?.email}`)
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
        <div className='flex justify-center mt-60'>

                    {/* {
                    users.map((u) => {
                        if (u.email === user?.email) {
                        return u?.role === "user" || u?.role==="pending Seller Request" ? (
                            <button
                            key={u.id}
                            onClick={handleSeller}
                            className="btn btn-warning btn-lg"
                            disabled={isButtonDisabled}
                            >
                            Request For Seller
                            </button>
                        ) : (
                            <h1 key={u.id} className="text-3xl font-extrabold text-green-500">
                            You Are Already a Seller
                            </h1>
                        );
                        }
                        return null;
                    })
                    } */}


{
  users.map((u) => {
    if (u.email === user?.email) {
      if (u?.role === "pending Seller Request") {
        return (
          <h1 key={u.id} className="text-3xl font-extrabold text-yellow-500">
            Your Seller Request is Pending
          </h1>
        );
      } else if (u?.role === "user") {
        return (
          <button
            key={u.id}
            onClick={handleSeller}
            className="btn btn-warning btn-lg"
            disabled={isButtonDisabled}
          >
            Request For Seller
          </button>
        );
      } else if (u?.role === "admin") {
        return (
            <h1 key={u.id} className="text-3xl text-center font-extrabold text-yellow-500">
             Your are Admin,Only User Can Request for Seller
          </h1>
        );
    }
      
      else {
        return (
          <h1 key={u.id} className="text-3xl font-extrabold text-green-500">
            You Are Already a Seller
          </h1>
        );
      }
    }
    return null;
  })
}






            {/* {
                users.map((u)=>{
                    return u.email ==user?.email && u?.role=="user" ?
                    <button onClick={handleSeller} className="btn btn-warning btn-lg">Request For Seller</button>


                    :
                    <button className="btn btn-warning btn-lg">You Already A Seller</button>
                  

                })
            } */}
            {/* <button onClick={handleSeller} className="btn btn-warning btn-lg">Request For Seller</button> */}
        </div>
    );
};

export default SellerReq;