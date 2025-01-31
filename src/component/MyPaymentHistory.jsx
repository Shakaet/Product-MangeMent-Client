import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MyPaymentHistory = () => {

    let {user}= useContext(Context)


   
 
     const { data:paymentsHistory,isLoading:paymentsHistoryLoading } = useQuery({
         queryKey: [user?.email,'paymentsHistory'],
         queryFn: async () =>{
             let res = await axios.get(`https://product-project-server.vercel.app/payments/${user?.email}`) 
            //  console.log(res.data)
             return res.data
         }
       })
    return (
        <div>
            <div>
            <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="text-left bg-gradient-to-r from-gray-800 to-gray-700">
          <th className="p-4">No</th>
            <th className="p-4">Transaction Id</th>
            <th className="p-4">Price</th>
            <th className="p-4">Status</th>
            <th className="p-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentsHistory?.map((product,index) => (
            <tr
              key={product.product_id}
              className="font-bold text-black bg-gradient-to-br from-yellow-500 via-blue-200 to-blue-800 hover:bg-gray-600 transition-colors"
            >
                <td className="p-4">
              {/* <td className="p-4 font-semibold">{index+1}</td> */}
              <td className="p-4 font-semibold">{index+1} </td>
              </td>
              <td className="p-4">
              {/* <td className="p-4 font-semibold">{index+1}</td> */}
              <td className="p-4 font-semibold">{product.transectionId}</td>
              </td>
              <td className="p-4 font-semibold">{product.price}</td>
              <td className="p-4">{product.status}</td>
              <td className="p-4">{new Date(product.date).toLocaleDateString("en-GB")}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
        </div>
    );
};

export default MyPaymentHistory;