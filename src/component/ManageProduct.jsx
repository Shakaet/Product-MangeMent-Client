import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ManageProduct = () => {

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:5000/allproduct");
        return response.data;
      };

   
    const { data: allProducts = [], refetch } = useQuery({
        queryKey: ["allproducts"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
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
                <button
                  onClick={() => onUpdate(product.product_id)}
                  className="bg-green-500 hover:bg-green-600 text-sm py-2 px-4 rounded-lg"
                >
                  Update
                </button>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onDelete(product.product_id)}
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