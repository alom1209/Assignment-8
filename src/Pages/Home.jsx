import React from 'react';
import useApps from '../hooks/useApps';
import Apps from './Appscard';
import { Link, useOutletContext } from 'react-router';
import Appscard from './Appscard';

const Home = () => {
  const [apps,loading,error]=useApps();
  const trendingApps=apps.slice(0,8)
  const {setLoading}=useOutletContext();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-infinity loading-xl text-[#632EE3]"></span>
      </div>
    );
  }
    return (
        <>
        <div className="hero bg-base-200 ">
  <div className="hero-content text-center pb-0">
    <div className="max-w-3xl">
      <h1 className="text-5xl font-bold">We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold '>Productive</span> Apps</h1>
      <p className="py-6 text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
     <div className='flex flex-col md:flex-row items-center justify-around gap-2'>
        <a href="https://play.google.com/store/games?hl=en"  target="_blank"
    rel="noopener noreferrer"   className='btn border-4 p-5 md:mr-2'>
            <img src="https://i.ibb.co.com/YFM8n4Ln/fi-16076057.png" alt="" />
            <p className='font-semibold text-[20px]'>Play Store</p>
            </a>
        <a href="https://www.apple.com/app-store/"  target="_blank"
    rel="noopener noreferrer"   className='btn border-4 p-5 md:ml-1'>
            <img src="https://i.ibb.co.com/wZnVqBFB/Group-2.png" alt="" />
            <p className='font-semibold text-[20px]'>App Store</p>
            </a>
     </div>
     <div className='mt-5'>
    <img src="src/assets/All images/hero.png" alt="" />
  </div>
    </div>
  </div>
</div>
<section className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 px-6 mb-10">
  <div className="text-center">
   
    <h2 className="text-4xl  md:text-[48px] font-bold mb-16">
      Trusted By Millions, Built For You
    </h2>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
     
      <div className="flex flex-col items-center">
        <p className="text-base  mb-2 text-gray-200">Total Downloads</p>
        <h3 className="text-5xl font-bold">29.6M</h3>
        <p className="text-sm mt-2 text-gray-200">
          21% More Than Last Month
        </p>
      </div>

     
      <div className="flex flex-col items-center">
        <p className="text-base  mb-2 text-gray-200">Total Reviews</p>
        <h3 className="text-5xl  font-bold">906K</h3>
        <p className="text-sm mt-2 text-gray-200">
          46% More Than Last Month
        </p>
      </div>

      
      <div className="flex flex-col items-center">
        <p className="text-base mb-2 text-gray-200">Active Apps</p>
        <h3 className="text-5xl font-bold">132+</h3>
        <p className="text-sm mt-2 text-gray-200">
          31 More Will Launch
        </p>
      </div>
    </div>
  </div>
</section>
<div className='py-6'>
  <h2 className='text-center font-bold text-[48px]'>Trending Apps</h2>
  <p className='text-center text-[#627382] text-[20px] mt-1'>Explore All Trending Apps on the Market developed by us</p>
</div>
<div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
  {
    trendingApps.map((app,index)=><Appscard key={index} app={app}></Appscard>)
  }
</div>

<div className='py-6 text-center'>
  <Link to='/apps' onClick={()=>setLoading(true)} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
    Show All
   </Link>
</div>
        </>
        

    );
};
export default Home;