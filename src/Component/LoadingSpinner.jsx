import React from 'react';
import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-285px)]'>
            <HashLoader/>

        </div>
    );
};

export default LoadingSpinner;