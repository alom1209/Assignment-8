import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


  const Root = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(false);
  }, [location]);
    return (
        <div>
          <Navbar setLoading={setLoading}></Navbar>
         {loading && (
        <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
          <span className="loading loading-infinity loading-xl text-[#632EE3]"></span>
        </div>
      )}
          <Outlet context={{setLoading}} className='py-10'></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;