import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AllProducts = () => {

    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:5000/allproducts`);
        return response.data;
      };

   
    const { data: allProducts = [], isLoading:allLoading } = useQuery({
        queryKey: ["allProducts"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    




    return (
        <div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-20">
      {allProducts.map((product, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-lg font-bold text-blue-900">
              {product.product_title}
            </h2>
            <p
              className={`font-semibold text-sm ${
                product.availability ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.availability ? "Available" : "Out of Stock"}
            </p>
            <p className="text-sm text-yellow-600 font-bold">
              ⭐ {product.rating}/5
            </p>
            <Link to={`/product/details/${product._id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              View Details
            </motion.button></Link>
          </div>
        </motion.div>
      ))}
    </div>
        </div>
    );
};

export default AllProducts;