import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import axios from 'axios';
import useAllUsers from '../assets/hook/useAllUsers';
import Swal from 'sweetalert2';

const SellerReq = () => {


    let {user}= useContext(Context)

     let [users,refetch]= useAllUsers()

    


    let handleSeller=()=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });



        // axios.patch(`http://localhost:5000/users/${user?.email}`)
        // .then((res)=>{
        //     if(res.data.modifiedCount>0){
        //         alert("Seller Request Successfully Done")
        //     }
        // })
    }

    
    return (
        <div className='flex justify-center mt-60'>

                    {
                    users.map((u) => {
                        if (u.email === user?.email) {
                        return u?.role === "user" ? (
                            <button
                            key={u.id}
                            onClick={handleSeller}
                            className="btn btn-warning btn-lg"
                            >
                            Request For Seller
                            </button>
                        ) : (
                            <button key={u.id} className="btn btn-warning btn-lg">
                            You Are Already a Seller
                            </button>
                        );
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