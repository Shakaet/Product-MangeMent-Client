import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';







const useAllUsers = () => {

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        return response.data;
      };

   
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"], // The unique key for this query
        queryFn: fetchUsers, // Function to fetch the data
      });
    
    

    return [users,refetch]
};

export default useAllUsers;