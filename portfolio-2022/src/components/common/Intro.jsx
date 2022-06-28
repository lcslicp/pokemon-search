import React from 'react';
import { useNavigate } from 'react-router-dom';

const intro = () => {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <section
      className='text-black z-10 lg:px-40 lg:pt-40 md:px-24 md:py-32 md:h-1/2 lg:h-screen'
      name='intro'
      id='intro'
    >
      <div className='md:flex flex-row font-bold text-lg gap-4 lg:hidden '>
      <a href='#intro' className='hover:underline hover:italic'>intro</a>
      <a href='#selectedworks' className='hover:underline hover:italic'>works</a>
      <a href='/about' className='hover:underline hover:italic'>about</a>
      <a href='#contact' className='hover:underline hover:italic'>contact</a>
      </div>
      <div className='lg:pt-0 md:pt-72'>
        <p className=' lg:text-7xl font-bold md:text-7xl'> hey,</p>
        <h1 className='lg:text-7xl font-bold leading-8 md:text-7xl md:pt-4'>i'm leslie.</h1>
        <p className='lg:text-lg font-normal lg:w-1/3 lg:leading-6 lg:pt-10 lg:pb-14 lg:py-10 md:text-lg md:w-1/2 md:pt-12 md:pb-12'>
          I collaborate with organizations in effectively conveying their
          mission through visual storytelling.
        </p>
        <button
          type='button'
          className='border-black bg-transparent border-2 hover:bg-black text-black font-bold hover:text-stone rounded-full lg:py-4 lg:px-8 transition ease-in-out delay-20 cursor-pointer md:text-normal md:py-2 md:px-4 md:text-normal'
          onClick={routeChange}
        >
          let's collaborate &rarr;
        </button>
      </div>
    </section>
  );
};

export default intro;
