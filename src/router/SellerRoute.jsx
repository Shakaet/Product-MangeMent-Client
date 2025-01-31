import React, { useContext } from 'react';
import { Context } from '../provider/AuthProvider';
import useSeller from '../assets/hook/useSeller';
import { useLocation } from 'react-router-dom';

const SellerRoute = ({children}) => {
    let {user,loading}= useContext(Context)
    let [isSeller,sellerLoading]= useSeller()


             let location= useLocation()

    if(loading || sellerLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isSeller){
        return children
    }


    return <Navigate  to={"/login"} state={{from:location}} replace></Navigate>
};

export default SellerRoute;