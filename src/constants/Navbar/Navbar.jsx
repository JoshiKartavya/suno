import React from 'react';
import './Navbar.scss';
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {

  return (
    <>
      <div className='nav-container flex flex-row justify-between items-center px-12 py-8'>
        <div className="logo flex flex-row justify-center items-center gap-2 sm:gap-4 md:gap-4 lg:gap-4">
          <svg className='h-6 sm:h-8 md:h-12 lg:h-12' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 14" id="Layer_14"><path d="M16,1A15,15,0,0,0,1,16v8a1,1,0,0,0,2,0V16a13,13,0,0,1,26,0v8a1,1,0,0,0,2,0V16A15,15,0,0,0,16,1Z"/><path d="M8.49,17h-1A3.51,3.51,0,0,0,4,20.51v7A3.51,3.51,0,0,0,7.51,31h1A3.51,3.51,0,0,0,12,27.49v-7A3.51,3.51,0,0,0,8.49,17ZM10,27.49A1.52,1.52,0,0,1,8.49,29h-1A1.52,1.52,0,0,1,6,27.49v-7A1.52,1.52,0,0,1,7.51,19h1A1.52,1.52,0,0,1,10,20.51Z"/><path d="M24.49,17h-1A3.51,3.51,0,0,0,20,20.51v7A3.51,3.51,0,0,0,23.51,31h1A3.51,3.51,0,0,0,28,27.49v-7A3.51,3.51,0,0,0,24.49,17ZM26,27.49A1.52,1.52,0,0,1,24.49,29h-1A1.52,1.52,0,0,1,22,27.49v-7A1.52,1.52,0,0,1,23.51,19h1A1.52,1.52,0,0,1,26,20.51Z"/></g></svg>
          <h1>SUNO</h1>
        </div>
        <div className="menu flex flex-row gap-2 text-base">
          <a href="/history"><i className="ri-hourglass-line"></i></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
