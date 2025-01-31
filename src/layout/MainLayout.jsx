import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;