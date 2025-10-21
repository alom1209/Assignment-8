import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div>
            <div className='bg-base-200 min-h-screen'>
         <div className='flex flex-col items-center p-10'>
            <img src="https://i.ibb.co.com/mCXfVpXh/error-404.png" alt="" />
            <h2 className='text-[20px] md:text-[48px] font-semibold'>Oops, page not found</h2>
            <p className='text-[#627382] text-[15px] md:text-[20px] text-center'>The page you are looking for is not available.</p>
            <div className='pt-6 text-center'>
  <Link to='/'  className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
    Go Back!
   </Link>
</div>
         </div>
        </div>
        </div>
    );
};

export default Errorpage;