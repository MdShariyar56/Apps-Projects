import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayouts = () => {
    return (
        <div>
           <Navbar/>
            <div >
                 
                 <Outlet/>
            </div>
           
            <Footer/>
        </div>
    );
};

export default MainLayouts;