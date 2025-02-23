import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageProduct = () => {

    let location= useLocation()

    const fetchUsers = async () => {
        const response = await axios.get("https://product-project-server.vercel.app/allproduct");
        return response.data;
      };

   
    const { data: allProducts = [], refetch } = useQuery({
        queryKey: ["allproducts"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

      let onDelete=(id)=>{
        // alert(id)
        Swal.fire({
            title: "Are you sure?",
            text: "Do you Want to Delete this item?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://product-project-server.vercel.app/product/${id}`)
                .then((res)=>{
                    if(res.data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "This item is successfully deleted !",
                            text: "This user is successfully deleted !",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
      }
    
    return (
        <div>
            <div>
            <div className="overflow-x-auto">
            <h2 className="mb-10 text-3xl font-extrabold mt-10 text-center">Total Products: {allProducts.length}</h2>
      <table className="w-full table-auto border-collapse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="text-left bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg">
          <th className="p-4">no</th>
            <th className="p-4">Product Image</th>
            <th className="p-4">Product Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price ($)</th>
            <th className="p-4">Update</th>
            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((product,index) => (
            <tr
              key={product.product_id}
              className="font-bold text-black bg-gradient-to-br from-yellow-500 via-blue-200 to-blue-800 hover:bg-gray-600 transition-colors rounded-lg"
            >
                <td className="p-4 font-semibold">{index+1}</td>
              <td className="p-4">
                <img
                  src={product.product_image}
                  alt={product.product_title}
                  className="h-16 w-16 rounded-lg object-cover"
                />
              </td>
              <td className="p-4 font-semibold">{product.product_title}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">
                <Link to={`/dashboard/updateProduct/${product._id}`}
                state={{ from: location.pathname }}
                  
                  className="bg-green-500 hover:bg-green-600 text-sm py-2 px-4 rounded-lg"
                >
                  Update
                </Link>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onDelete(product._id)}
                  className="bg-red-500 hover:bg-red-600 text-sm py-2 px-4 rounded-lg"
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
        </div>
    );
};

export default ManageProduct;