import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import useAdmin from '../assets/hook/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    let {user,loading}= useContext(Context)
    let [isAdmin,adminLoading]= useAdmin()


             let location= useLocation()

    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isAdmin){
        return children
    }


    return <Navigate  to={"/login"} state={{from:location}} replace></Navigate>



    

};

export default AdminRoutes;