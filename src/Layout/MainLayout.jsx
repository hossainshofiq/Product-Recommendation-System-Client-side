import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/SharedComponents/Navbar';
import Footer from '../Pages/SharedComponents/Footer';

const MainLayout = () => {
    return (
        <div className='font-jakarta'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;