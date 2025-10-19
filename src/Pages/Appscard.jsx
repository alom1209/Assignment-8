import React from 'react';
import { Link } from 'react-router';
const Appscard = ({app}) => {
    return (
        <>
        <Link to={`/appdetails/${app.id}`}>
        <div className="card bg-base-100 shadow-sm hover:scale-103 transition ease-in-out">
  <figure>
    <img
      src={app.image}
      alt='' className='p-3'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{app.title}</h2>
    <div className="flex justify-between items-center">
      <div className='flex justify-center items-center gap-1 p-1 bg-[#F1F5E8]'>
        <img src="https://i.ibb.co.com/3YTjS6cT/icon-downloads.png" alt="" className='h-4'/>
        <p className='text-[#00D390]'>{app.downloads}</p>
      </div>
      <div className='flex justify-center items-center gap-1 p-1 bg-[#F1F5E8]'>
        <img src="https://i.ibb.co.com/Kz78s7zv/icon-ratings.png" alt="" className='h-4'/>
        <p className='text-[#00D390]'>{app.ratingAvg}</p>
      </div>
    </div>
  </div>
</div>
        </Link>
        </>
    );
};

export default Appscard;