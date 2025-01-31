import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const CategoryDataLoad = ({ category, allProducts }) => {
  const filteredProducts = allProducts.filter(item => item.category === category);

  return (
    <div className="bg-gray-100 py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-44 object-cover rounded-t-lg"
              />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold text-gray-800">{product.product_title}</h2>
                <p className={`text-sm font-semibold ${product.availability ? "text-green-600" : "text-red-600"}`}>
                  {product.availability ? "Available" : "Out of Stock"}
                </p>
                <p className="text-sm text-yellow-600 font-bold">⭐ {product.rating}/5</p>
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

export default CategoryDataLoad;
