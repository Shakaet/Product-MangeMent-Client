import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Smarty Product
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-lg mb-4"
            >
              We offer a wide variety of quality products for every need. Explore our catalog and experience the best service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex space-x-4"
            >
              
            </motion.div>
          </div>

          {/* Quick Links Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="space-y-3 text-lg"
            >
              <li>
                <Link to="/" className="hover:text-yellow-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/allProducts" className="hover:text-yellow-300">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/sellerReq" className="hover:text-yellow-300">
                  Request for Seller
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-yellow-300">
                  Dashboard
                </Link>
              </li>
            </motion.ul>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-2xl font-semibold mb-4"
            >
              Join Our Newsletter
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1 }}
              className="mb-4"
            >
              Stay updated with the latest products, discounts, and offers.
            </motion.p>
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="flex"
            >
              
              
            </motion.form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Smarty Product. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
