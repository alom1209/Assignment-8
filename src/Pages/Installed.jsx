import React, { useEffect, useState } from 'react';
import useApps from '../hooks/useApps';
import { getApps } from '../Mainlayout/addToDB';
import { toast } from 'react-toastify';
import { Trash2 } from 'lucide-react';

const Installed = () => {
    const[apps,loading,error]=useApps();
    const[sortOrder,setSortOrder]=useState('none');
    const[applist,setAppList]=useState([])
    useEffect(()=>{
        const storedApps=getApps();
        const appList=apps.filter(a=>storedApps.includes(a.id));
        setAppList(appList);
    },[apps])
    const handleRemove=(id)=>{
    const storedProducts=getApps();
    let updatedApps=storedProducts.filter(identity=> identity!==id)
    localStorage.setItem("applist",JSON.stringify(updatedApps))
    setAppList(prev => prev.filter(a => a.id !== id));
    const removedApp = applist.find(a => a.id === id);
  const appTitle = removedApp ? removedApp.title : "App";
    toast.success(`Successfully uninstalled ${appTitle}`)
   }
   const parseDownloads = (value) => {
  if (!value) return 0;
  if (typeof value === 'number') return value;
  const lower = value.toLowerCase();
  if (lower.includes('k')) return parseFloat(lower) * 1000;
  if (lower.includes('m')) return parseFloat(lower) * 1000000;
  return parseFloat(lower);
};
   const sortApp=(
    ()=>{
    if(sortOrder==='download-asc'){
        return [...applist].sort((a,b)=>parseDownloads(a.downloads)-parseDownloads(b.downloads))
    } else if(sortOrder==='download-dsc'){
        return [...applist].sort((a,b)=>parseDownloads(b.downloads)-parseDownloads(a.downloads))
    }else{
        return applist;
    }
   }
   )();
    return (
        <div className='bg-base-200'>
           <div className="hero-content text-center pb-0">
    <div className="mt-[80px] mb-[40px]">
      <h1 className="text-[35px] md:text-5xl font-bold md:font-bold">Your Installed Apps</h1>
      <p className="py-6 text-[#627382] text-[20px]">
       Explore All Trending Apps on the Market developed by us
      </p>
     </div>
     </div>
     <div className='w-11/12 mx-auto flex justify-between items-center py-2'>
                <h2 className='text-md  md:text-xl font-medium md:font-bold
                '>{applist.length} Apps Found</h2>
                <div className="dropdown dropdown-bottom dropdown-center">
  
  <label className='form-control w-full max-w-xs'>
    <select value={sortOrder} onChange={e=>setSortOrder(e.target.value)} className='select select-bordered' >
    <option value='none'>Sort by Downloads</option>
    <option value='download-asc'>Low-&gt;High</option>
    <option value='download-dsc'>High-&gt;Low</option>
  </select>
  </label>
</div>
            </div>
            <div className='py-6'>
                {
                    sortApp.map((a,index)=> <div key={index} className='w-11/12 mx-auto mt-2'>
                       <div className='p-3 bg-white flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img src={a.image} alt="" className='h-20'/>
                            <div>
                                <p className='text-[20px] font-medium py-1'>{a.title}</p>
                            <div className='flex gap-3'>
                                <div className='flex items-center gap-1'>
                                <img src="https://i.ibb.co.com/3YTjS6cT/icon-downloads.png" alt="" className='h-5 '/>
                                <p className='font-medium text-[16px] text-[#00D390]'>{a.downloads}</p>
                            </div>
                            <div  className='flex items-center gap-1'>
                                <img src="https://i.ibb.co.com/Kz78s7zv/icon-ratings.png" alt="" className='h-5'/>
                                <p className='font-medium text-[16px] text-[#00D390]'>{a.ratingAvg}</p>
                            </div>
                            <div>
                                <p className='font-medium text-[16px] text-[#00D390] hidden md:block'>{a.size}MB</p>
                            </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleRemove(a.id)} className='btn bg-[#00D390] text-white'>Uninstall <Trash2 /></button>
                        </div>
                       </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Installed;