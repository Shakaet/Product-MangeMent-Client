import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from 'axios';
import { Context } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../assets/hook/useCart';
import useAllUsers from '../assets/hook/useAllUsers';

const ProductDetails = () => {

    let {user}= useContext(Context)
    let [users]= useAllUsers()
    
    let [cartData,refetch]=  useCart()
    // let [cartBtn,setCartBtn] = useState(false)

    let {id}= useParams()

    const fetchUsers = async () => {
        const response = await axios.get(`https://product-project-server.vercel.app/product/${id}`);
        return response.data;
      };

   
    const { data: product = [], isLoading:specificLoading,refetch:ref } = useQuery({
        queryKey: [id,"specificData"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });

    //   {
    //     product_title: 'Voluptas excepturi i',
    //     product_image: 'https://i.ibb.co.com/znvvfNn/product1.jpg',
    //     category: 'Computers',
    //     price: 604,
    //     description: 'Qui aliquam et volup',
    //     Specification: [ 'Praesentium iure mol' ],
    //     availability: true,
    //     rating: 5,
    //     email: 'abdshakaet@gmail.com'
    //   }


    let handleAddToCart=(product)=>{
        // console.log(product)

        let productDetailsData={


            product_Id:id,
            product_title:product.product_title,
            product_image:product.product_image,
            category:product.category,
            price:product.price,
            description:product.description,
            Specification:product.Specification,
            availability:product.availability,
            rating:product.rating,
            buyer_email:user?.email

        }
        // console.log(productDetailsData)

        axios.post("https://product-project-server.vercel.app/addtocart",productDetailsData)
                .then((res) => {
                    console.log("Response:", res.data);
                    if (res.data.
                        acknowledged
                        ) {
                            ref()
                            refetch()
                            
                        
                        Swal.fire({
                            icon: "success",
                            title: "Product added Successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })



    }
    

   
    
    return (
        <div className="">

<div className="mt-20 p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 min-h-screen flex items-center justify-center">
  <motion.div
    className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg w-full"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-5">
      {/* Image Section */}
      <div className="relative w-full h-full">
  {/* Product Image with Hover Effect */}
  <motion.img
    src={product.product_image}
    alt={product.product_title}
    className="w-full h-full object-cover rounded-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  />

  {/* Availability Badge */}
  <span className={`absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded 
    ${product.availability ? "bg-green-500" : "bg-red-500"}`}>
    {product.availability ? "Available" : "Out of Stock"}
  </span>

 
</div>


      {/* Product Details Section */}
      <div className="p-6 space-y-4">
      <span className="bg-blue-500 text-xs text-white font-bold px-2 py-1 rounded">
    Posted by: {product?.email || "Unknown"}
  </span>
        <h1 className="mt-2 text-3xl font-bold text-purple-700">
          {product.product_title}
        </h1>
        <p className="text-gray-600">{product.description}</p>

        <div className="space-y-2">
          <p className="text-gray-800">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Price:</span> ${product.price}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Specifications:</span> 
            {Array.isArray(product.Specification) ? product.Specification.join(",") : "No specifications available"}
          </p>
          <p className="text-gray-800">
            <span className="font-bold">Rating:</span> {product.rating}/5 ⭐
          </p>
        </div>

        {
            users
              .filter((u) => u.email === user?.email && u.role === "user" || u.role === "pending Seller Request")
              .map((u) => (
                <>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleAddToCart(product)}
                disabled={!product.availability}
                className={`${product.availability ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"} w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition duration-300`}
              >
                {product.availability ? "Add to Cart" : "Out of Stock"}
              </motion.button>
              </>
              ))
                }
      </div>
    </div>
  </motion.div>
</div>




            
        </div>
    );
};

export default ProductDetails;