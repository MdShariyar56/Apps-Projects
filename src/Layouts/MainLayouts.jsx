import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Component/Footer';
import LoadingSpinner from '../Component/LoadingSpinner';


const MainLayouts = () => {
   const  Navigation = useNavigation()
    return (
        <div>
           <Navbar/>
           {Navigation?.state === 'loading' ? (
            <LoadingSpinner/>
           ) : (
             <main className='min-h-[calc(100vh-285px)]' >
                 <Outlet/>
            </main>
           )}
           
            <Footer/>
        </div>
    );
};

export default MainLayouts;