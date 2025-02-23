import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const fetchUsers = async () => {
    const response = await axios.get(`https://product-project-server.vercel.app/allproducts`);
    return response.data;
  };

  const { data: allProducts = [], isLoading: allLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchUsers,
  });

  // Filter products based on search query
  let filteredProducts = allProducts.filter(product =>
    product.product_title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting logic
  if (sortOption === "priceLowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "ratingHighToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "ratingLowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.rating - b.rating);
  }

  return (
    <div className='bg-blue-300'>
      <div className="p-6 mt-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title..."
            className="w-full sm:w-1/2 p-3 rounded-lg border border-blue-400"
          />

          {/* Sorting Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 border border-blue-400 rounded-lg"
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="ratingHighToLow">Rating: High to Low</option>
            <option value="ratingLowToHigh">Rating: Low to High</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
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
                <p className="text-gray-700 font-semibold">Price: ${product.price}</p>
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
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
