import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { Context } from '../provider/AuthProvider';



const AddProduct = () => {
  //add

    let {user}= useContext(Context)

    const [formData, setFormData] = useState({
        product_title: "",
        product_image: "",
        category: "Computers",
        price: "",
        description: "",
        Specification: "",
        availability: true,
        rating: "",
        email:user?.email
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: name === "Specification" ? value.split(",") : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Product Data:", formData);
        // Add your database submission logic here

        axios.post("https://product-project-server.vercel.app/addproducts", formData)
                .then((res) => {
                    console.log("Response:", res.data);
                    if (res.data.
                        acknowledged
                        ) {
                        
                        Swal.fire({
                            icon: "success",
                            title: "Product added Successfully",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                })
               

      };
    return (
        <div>
            <div className="p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Add a New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-extrabold text-blue-800 mb-1">
            Product Title
          </label>
          <input
            type="text"
            name="product_title"
            value={formData.product_title}
            onChange={handleChange}
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
            value={formData.product_image}
            onChange={handleChange}
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
            value={formData.category}
            onChange={handleChange}
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
            value={formData.price}
            onChange={handleChange}
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
            value={formData.description}
            onChange={handleChange}
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
            value={formData.Specification}
            onChange={handleChange}
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
            value={formData.availability}
            onChange={handleChange}
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
            value={formData.rating}
            onChange={handleChange}
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
          Add Product
        </button>
      </form>
    </div>
        </div>
    );
};

export default AddProduct;