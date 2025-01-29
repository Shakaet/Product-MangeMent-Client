import React, { useContext, useState } from 'react';
import { Context } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const UpdateProduct = () => {
      
    let location= useLocation()
    console.log(location)
    const previousPath = location.state?.from; 

    let {id}= useParams()
    let nav= useNavigate()

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        return response.data;
      };

   
    const { data: specificData = [], isLoading:SellerLoading } = useQuery({
        queryKey: [id,"specificData"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
      console.log(specificData)

//       Specification

// availability

// category

// description

// email

// price

// product_image

// product_title

// rating

// _id



    let {user}= useContext(Context)

    
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            product_title: e.target.product_title.value,
            product_image: e.target.product_image.value,
            category: e.target.category.value,
            price: parseFloat(e.target.price.value),
            description: e.target.description.value,
            Specification: e.target.Specification.value.split(",").map((item) => item.trim()), // Convert comma-separated list to an array
            availability: e.target.availability.value === "true", // Convert string to boolean
            rating: parseFloat(e.target.rating.value),
          };
        
          console.log(formData);
        // Add your database submission logic here

        axios.patch(`http://localhost:5000/product/${id}`, formData)
                .then((res) => {
                    console.log("Response:", res.data);
                    if (res.data.
                        modifiedCount>0
                        ) {
                        
                        Swal.fire({
                            icon: "success",
                            title: "Product Updated Successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });

                          if(previousPath==="/dashboard/manageProduct"){
                            nav("/dashboard/manageProduct")

                          }
                          else{
                            nav("/dashboard/myaddedProduct")
                          }
                         

                    }
                })

            }
               


    return (
        <div>

<div>
    <div className="p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Update Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-extrabold text-blue-800 mb-1">
            Product Title
          </label>
          <input
            type="text"
            name="product_title"
            defaultValue={specificData.product_title}
         
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Product Image URL
          </label>
          <input
            type="url"
            name="product_image"
            defaultValue={specificData.product_image}
           
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Category
          </label>
          <select
            name="category"
            defaultValue={specificData.category}
           
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Computers">Computers</option>
            <option value="Phones">Phones</option>
            <option value="Smart Watches">Smart Watches</option>
            <option value="Chargers">Chargers</option>
            <option value="Power Banks">Power Banks</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            defaultValue={specificData.price}
           
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter price"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={specificData.description}
            
            required
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Specification (comma-separated)
          </label>
          <input
            type="text"
            name="Specification"
            defaultValue={specificData.Specification}
            
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 16GB RAM, 512GB SSD"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Availability
          </label>
          <select
            name="availability"
            defaultValue={specificData.availability}
            
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={true}>Available</option>
            <option value={false}>Out of Stock</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-800 mb-1">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            defaultValue={specificData.rating}
            
            required
            step="0.1"
            max="5"
            min="0"
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter rating (0-5)"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Update Product
        </button>
      </form>
    </div>
        </div>
            
        </div>
    );
};

export default UpdateProduct;