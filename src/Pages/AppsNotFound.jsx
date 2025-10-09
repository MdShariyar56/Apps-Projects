import React from "react";
import { Link } from "react-router-dom";
import ImagesErro from "../assets/error-404.png"


const AppsNotFound = () => {


  return (

    <div>
     
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <img src={ImagesErro} alt="" />
       <h1 className="text-4xl font-bold text-[#632EE3] mb-4">OPPS!! APP NOT FOUND</h1>
      <p className="text-lg text-gray-700">
        
      </p>
      <p className="mt-2 text-gray-500">
       The App you are requesting is not found on our system.  please try another apps
       
      </p>
       <Link to="/" className="btn text-white mt-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10">
          Go Back!
        </Link>
    </div>
  </div>
</div>
  
    </div>
    

  );
};

export default AppsNotFound;
