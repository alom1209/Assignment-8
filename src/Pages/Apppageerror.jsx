import React from 'react';
import { Link } from 'react-router';

const Apppageerror = () => {
    return (
        <div className='bg-base-200 '>
         <div className='flex flex-col items-center p-10'>
            <img src="https://i.ibb.co.com/4gY57frV/App-Error.png" alt="" />
            <h2 className='text-[20px] md:text-[48px] font-semibold'>OPPS!! APP NOT FOUND</h2>
            <p className='text-[#627382] text-[15px] md:text-[20px] text-center'>The App you are requesting is not found on our system.  please try another apps</p>
            <div className='pt-6 text-center'>
  <Link to='/apps'  className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
    Go Back!
   </Link>
</div>
         </div>
        </div>
    );
};

export default Apppageerror;