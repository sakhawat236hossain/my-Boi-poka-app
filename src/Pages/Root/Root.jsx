import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Bnner/Banner';

const Root = () => {
    return (
        <div className='max-w-[1240px] mx-auto'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;