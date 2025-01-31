import React from 'react';
import useCart from '../assets/hook/useCart';
import { Link } from 'react-router-dom';
import { MdPayment } from "react-icons/md";

const MyCart = () => {

    let [cartData,refetch]=useCart()


    let totalPrice = 0;
            cartData.map((product) => (totalPrice = totalPrice+ product.price));

            // console.log(totalPrice);

    return (
        <div>
            <div>
            <div className="flex-col gap-5 md:flex justify-between items-center bg-gradient-to-r from-blue-600 to-red-500 overflow-x-hidden text-white p-6 rounded-xl shadow">
  <div className="flex items-center gap-3">
    <div className="text-xs md:text-3xl bg-white text-purple-600 p-2 rounded-lg shadow-md">
      🛒
    </div>
    <h1 className="text-xl md:text-2xl font-bold">Total Cart: {cartData.length}</h1>
  </div>

  <div className="flex items-center gap-3 mt-5">
    <div className="text-xs md:text-3xl bg-white text-blue-600 p-2 rounded-lg shadow-md">
      💰
    </div>
    <p className="text-xl md:text-2xl font-semibold">Total Price: ${totalPrice}</p>
  </div>
  {
  cartData.length === 0 ? (
    <Link to="#" className="flex items-center gap-3 mt-5">
      <p className="text-xl md:text-2xl font-semibold btn btn-warning">
        <MdPayment />
        Pay
      </p>
    </Link>
  ) : (
    <Link to="/dashboard/pay" className="flex items-center gap-3 mt-5">
      <p className="text-xl md:text-2xl font-semibold btn btn-warning">
        <MdPayment />
        Pay
      </p>
    </Link>
  )
}

</div>
            <div className="overflow-x-auto">



      <table className="w-full table-auto border-collapse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="text-left bg-gradient-to-r from-gray-800 to-gray-700">
            <th className="p-4">Product Image</th>
            <th className="p-4">Product Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Price ($)</th>
            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((product) => (
            <tr
              key={product.product_id}
              className="font-bold text-black bg-gradient-to-br from-yellow-500 via-blue-200 to-blue-800 hover:bg-gray-600 transition-colors"
            >
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

export default MyCart;