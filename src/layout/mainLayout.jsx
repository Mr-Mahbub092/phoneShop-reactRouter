import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar></Navbar>
     <div className='py-10'>
     <Outlet></Outlet>
     </div>

    </div>
  );
};

export default MainLayout;