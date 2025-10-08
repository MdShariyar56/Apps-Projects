import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ErrorPage = () => {


  return (

    <div>
       <Navbar/> 
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <img src={"https://i.ibb.co.com/0jJxJ4ht/error-404.png"} alt="" />
       <h1 className="text-4xl font-bold text-[#632EE3] mb-4">Oops, page not found!</h1>
      <p className="text-lg text-gray-700">
        
      </p>
      <p className="mt-2 text-gray-500">
        The page you are looking for is not available.
       
      </p>
       <Link to="/" className="btn text-white mt-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10">
          Home
        </Link>
    </div>
  </div>
</div>
  <Footer/>
    </div>
    

  );
};

export default ErrorPage;
