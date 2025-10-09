import { Github } from 'lucide-react';
import Logoimg from '../assets/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <img className='w-10 h-10' src={Logoimg} alt="" />
   <a
  className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "
>
  HERO.IO
</a>

  </div>
  <div className='navbar-center'>
     <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow hover:text-[#632EE3]">
        <li><Link  className="hover:text-[#632EE3]  " to="/">Home</Link></li>
        <li><Link className="hover:text-[#632EE3]  " to="/apps">Apps</Link></li>
        <li><Link className="hover:text-[#632EE3]  " to="/installation">Installation</Link></li>
      </ul>
    </div>
  </div>
 <div className="navbar-center hidden lg:flex ">
  <ul className="menu menu-horizontal px-1">
    <li><Link className="hover:text-[#632EE3]" to="/">Home</Link></li>
    <li><Link className="hover:text-[#632EE3]" to="/apps">Apps</Link></li>
    <li><Link className="hover:text-[#632EE3]" to="/installation">Installation</Link></li>
  </ul>
</div>

  <div className="navbar-end ">
    
    <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
    
    href="https://github.com/MdShariyar56" 
    target="_blank" 
    rel="noopener noreferrer"
  ><Github />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;