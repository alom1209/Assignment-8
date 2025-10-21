import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import  { getApps,addToDB } from '../Mainlayout/addToDB';
import { toast } from 'react-toastify';


const Appdetails = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [installed,setInstalled]=useState(false);
    useEffect(()=>{
        const storedApps= getApps();
        if(storedApps.includes(Number(id))){
            setInstalled(true);

        }
    },[id])
    const[apps,loading,error]=useApps();
   if (loading) return <p className="text-center py-10">Loading...</p>;
    if (error) return <p className="text-center py-10">Error: {error}</p>;
    if (!Array.isArray(apps)) return <p className="text-center py-10">No apps found</p>;
    const app = apps.find(p => p.id === Number(id));
    if (!app) {
  navigate("/app-not-found");
  return null;
}
    const{image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings}=app;
    const reverseRatings=[...ratings].reverse()
    const handleInstall=(id)=>{
    addToDB(id);
    setInstalled(true);
    toast.success(`Successfully installed ${title}`);
  }
    return (
        <div className='bg-base-200 py-10'>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row  gap-5'>
            <div>
                <img src={image}alt="" className='md:w-[350px] md:h-[350px]'/>
            </div>
            <div>
                <h1 className='text-[32px] font-bold'>{title}</h1>
                <p className='text-[20px] text-[#627382]'>Developed by <span className='text-[20px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span> </p>
                <img src="https://i.ibb.co.com/QvrbpWcr/Line-4.png" alt="" className='py-[30px]'/>
               <div className='flex items-center gap-[30px]'>
                 <div>
                    <img src="https://i.ibb.co.com/3YTjS6cT/icon-downloads.png" alt="" />
                    <p>Downloads</p>
                    <p className='font-extrabold text-[40px]'>{downloads}</p>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/Kz78s7zv/icon-ratings.png" alt="" />
                    <p>Average Ratings</p>
                    <p className='font-extrabold text-[40px]'>{ratingAvg}</p>
                </div>
                <div>
                     <img src="https://i.ibb.co.com/tpsC6cgf/icon-review.png" alt="" />
                    <p>Total Reviews</p>
                    <p className='font-extrabold text-[40px]'>{reviews}</p>
                </div>
               </div>
               <div className='py-6'>
                <button onClick={()=>handleInstall(id)} disabled={installed} className={`btn ${installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00c882]'} text-white`}> {installed ? 'Installed' : `Install Now (${size} MB)`}</button>
               </div>
            </div>
            </div>
            <img src="https://i.ibb.co.com/QvrbpWcr/Line-4.png" alt="" className='p-[40px]
            '/>
            <div className='w-11/12 mx-auto'>
  <h2 className='text-2xl font-bold mb-4 mr-14'>Ratings</h2>
  <div className='mr-16'>
    <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={reverseRatings}
          layout="vertical" 
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 'dataMax']} />      
          <YAxis type="category" dataKey="name" />  
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" />
        </BarChart>
      </ResponsiveContainer>
  </div>
            </div>
            <img src="https://i.ibb.co.com/QvrbpWcr/Line-4.png" alt="" className='p-[40px]
            '/>
            <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl font-bold mb-4 '>Description</h2>
            <p className='text-[#627382]'>
                {description}
            </p>
            </div>

        </div>
    );
};

export default Appdetails;