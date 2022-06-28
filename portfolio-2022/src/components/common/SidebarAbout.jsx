import React from 'react';
// import { Link } from 'react-router-dom';

const SidebarAbout = () => {
  return (
    <div
      className='lg:block fixed font-bold
   z-50 inset-0 bg-black w-16 h-screen border-stone border-r border-opacity-20 md:hidden'
    >
      <div className='flex gap-10 -rotate-90 text-stone -mx-96 py-64'>
      <a href='/'>intro</a>
      <a href='/#selectedworks'>works</a>
      <a href='#contact'>contact</a>

      </div>
     
    </div>
  );
};

export default SidebarAbout;
