import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet className='py-10'></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;