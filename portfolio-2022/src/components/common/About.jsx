import React from 'react';
import { useState } from 'react';

import Myphoto from '../../assets/images/prof-pic.png';

const About = () => {
  const [labelDisplay, setLabelDisplay] = useState('hidden');

  const handleMouseOver = () => {
    setLabelDisplay('block');
  }

  const handleMouseLeave = () => {
    setLabelDisplay('hidden');
  }

  return (
    <section
      className='text-black z-10 lg:px-40 lg:pt-24 lg:py-48 flex lg:flex-row md:px-24 md:pt-24 md:pb-40'
      name='about'
    >
      
      <div className='flex flex-col'>
      <div className='md:flex flex-row font-bold text-lg gap-4 hidden md:pb-12 lg:hidden'>
      <a href='/' className='hover:underline hover:italic'>intro</a>
      <a href='/#selectedworks' className='hover:underline hover:italic'>works</a>
      <a href='/#contact' className='hover:underline hover:italic'>contact</a>
      </div>
        <p className=' lg:text-7xl font-bold md:text-6xl'>
          {' '}
          leslie<span className='font-medium opacity-40'>&middot;pino</span>
        </p>
        <p className='lg:text-md font-normal lg:w-3/4 lg:pr-0 leading-8 lg:py-4 md:text-lg md:w-2/3 md:pr-20'>
          For almost five years now, I have been in the creative industry
          working with organizations and teams of fellow creatives in creating
          and devising design materials. From designing printing ads, book
          covers, digital marketing materials to building UI mockups, prototypes
          and developing apps and websites&mdash;my mission has always been to
          adhere effective visual communication no
          matter the medium and technology.
        </p>
        <p className='lg:text-xs lg:w-3/4 leading-6 lg:py-4 md:text-base md:pt-6 md:w-full'>
          Outside of work, you'd probably find me in my nook reading books or
          watching feature films &amp; musicals. I play chess when I'm bored, and write when I'm full of things to say. I love cooking on slow days, and traveling to places I've never been. I'm a casual NBA fan and a huge fan of space science. Besides all that, you might also see me sketch &amp; paint, or shoot photos &amp; videos.
        </p>
      </div>
      <div className='flex flex-col'>

      </div>
      <img
        src={Myphoto}
        alt='display photo'
        className='lg:relative lg:inset-0 lg:w-1/3 lg:h-full lg:-mr-12 lg:mt-8 z-20 lg:profpic lg:ml-0 md:w-1/4 md:h-auto md:absolute md:ml-96 md:top-48 md:left-20' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}
      />
      <div className='lg:block lg:relative lg:inset-0 lg:w-screen bg-black z-10 lg:-mt-12 lg:-ml-16 mb-32 mix-blend-darken md:hidden'></div>
      <div className={labelDisplay}>
      <p className='absolute right-72 italic bottom-28 text-xs text-black z-40'>Photo of me with my camera when visiting the city of Taipei, 2019</p>
      </div>
    </section>
  );
};

export default About;
