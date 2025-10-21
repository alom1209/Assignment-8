import { CloudDownload, House, LayoutGrid } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = ({setLoading}) => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to='/' onClick={()=>setLoading(true)} className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 mr-3 font-medium"
            : "text-gray-700 hover:text-blue-500 transition mr-3 font-medium"
        }><div className='flex items-center'> <House className="w-4 h-4 mr-1" /> Home</div> </NavLink>
      <NavLink to='/apps' onClick={()=>setLoading(true)} className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 mr-3 font-medium"
            : "text-gray-700 hover:text-blue-500 transition mr-3 font-medium"
        }><div className='flex items-center'>  <LayoutGrid className='w-4 h-4 mr-1' /> Apps</div></NavLink>
      <NavLink to='/installed apps' onClick={()=>setLoading(true)} className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 mr-3 font-medium"
            : "text-gray-700 hover:text-blue-500 transition mr-3 font-medium"
        }><div className='flex items-center'><CloudDownload className='w-4 h-4 mr-1' /> Installation</div></NavLink>
      </ul>
    </div>
    <Link to='/' onClick={()=>setLoading(true)} className='flex gap-[4px] items-center'>
        <img src='https://i.ibb.co.com/9mZFBrvR/logo.png' alt="" className='h-10'/>
        <p  className=" text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold ">HERO.IO</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink to='/' onClick={()=>setLoading(true)} className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 mr-3 font-medium"
            : "text-gray-700 hover:text-blue-500 transition mr-3 font-medium"
        }><div className='flex items-center'> <House className="w-4 h-4 mr-1" /> Home</div></NavLink>
      <NavLink to='/apps' onClick={()=>setLoading(true)} className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 mr-3 font-medium"
            : "text-gray-700 hover:text-blue-500 transition mr-3 font-medium"
        }><div className='flex items-center'>  <LayoutGrid className='w-4 h-4 mr-1' /> Apps</div></NavLink>
      <NavLink to='/installed apps' onClick={()=>setLoading(true)} className={({ isActive }) =>
          isActive
            ? "text-blue-600 border-b-2 border-blue-600 pb-1 mr-3 font-medium"
            : "text-gray-700 hover:text-blue-500 transition mr-3 font-medium"
        }><div className='flex items-center'>  <CloudDownload className='w-4 h-4 mr-1' /> Installation</div></NavLink>
    </ul>
  </div>
  <div className="navbar-end">
   <a href='https://github.com/alom1209' target="_blank"
    rel="noopener noreferrer"   className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
    <img src="https://i.ibb.co.com/SwbbYJqS/fi-2111432.png" alt="" />
    Contribute
   </a>
  </div>
</div>
    );
};

export default Navbar;