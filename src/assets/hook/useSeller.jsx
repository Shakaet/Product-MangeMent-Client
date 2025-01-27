import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Context } from '../../provider/AuthProvider';
import axios from 'axios';

const useSeller = () => {

    let {user}= useContext(Context)



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:5000/users/seller/${user?.email}`);
        return response.data?.seller;
      };

   
    const { data: isSeller = [], isLoading:SellerLoading } = useQuery({
        queryKey: [user?.email,"isSeller"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [isSeller,SellerLoading]


    
   
};

export default useSeller;