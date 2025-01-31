import React, { useContext } from 'react';
import { Context } from '../../provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    let {user}= useContext(Context)



    const fetchUsers = async () => {
        const response = await axios.get(`https://product-project-server.vercel.app/addtocart/${user?.email}`);
        return response.data;
      };

   
    const { data: cartData = [], isLoading:cartDataLoading,refetch } = useQuery({
        queryKey: [user?.email,"cartData"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [cartData,refetch]
};

export default useCart;