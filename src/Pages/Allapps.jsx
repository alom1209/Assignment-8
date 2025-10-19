import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useApps';
import Appscard from './Appscard';
import { Link, useNavigate } from 'react-router';

const Allapps = () => {
    const[apps,loading,error]=useApps();
    const[search,setSearch]=useState('');
    const navigate=useNavigate();
    const term=search.trim().toLocaleLowerCase();
    const searchedApps=term?apps.filter(app=>{
        const title=app.title.toLocaleLowerCase();
        const words=term.split(' ');
        return words.every(word=>title.includes(word));
    }):apps;

    useEffect(() => {
  if (term && searchedApps.length === 0) {
    navigate('/appnotfound');
  }
}, [term, searchedApps, navigate]);

    return (
        <>
         <div className=" bg-base-200 pb-10">
  <div className="hero-content text-center pb-0">
    <div className="mt-[80px] mb-[40px]">
      <h1 className="text-5xl font-bold">Our All Applications</h1>
      <p className="py-6 text-[#627382] text-[20px]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
     </div>
     </div>
      <div className='w-11/12 mx-auto flex justify-between items-center py-2'>
                <h2 className='text-md  md:text-xl font-medium md:font-bold
                '>({searchedApps.length}) Apps Found</h2>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search} onChange={e=>setSearch(e.target.value)} type="search" required placeholder="Search" />
</label>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    searchedApps.map(app=><Appscard key={app.id} app={app}></Appscard>)
                }
            </div>
     </div>
        </>
    );
};

export default Allapps;