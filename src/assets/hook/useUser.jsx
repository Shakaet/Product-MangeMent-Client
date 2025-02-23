import React, { useContext } from 'react';
import { Context } from '../../provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {

    
    let {user}= useContext(Context)



    const fetchUsers = async () => {
        const response = await axios.get(`http://localhost:5000/users/user/${user?.email}`);
        return response.data?.user;
      };

   
    const { data: isUser = [],  isLoading:userLoading } = useQuery({
        queryKey: [user?.email,"isUser"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [isUser,userLoading]


    
   
};

export default useUser;