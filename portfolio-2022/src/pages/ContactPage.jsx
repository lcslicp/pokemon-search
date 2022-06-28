import React from 'react';

import Cursor from '../components/feature/Cursor';
import SidebarContact from '../components/common/SidebarContact';

const ContactPage = () => {
  return (
    <>
      <Cursor />
      <SidebarContact />

      <section className='flex lg:flex-row text-stone z-10 lg:pl-40 lg:pt-40 lg:py-48 leading-36 bg-black md:pl-24 md:flex-col md:h-screen'>
        <div className='hidden md:flex flex-col'>
        <div className='md:flex flex-row font-bold text-lg gap-4 lg:hidden md:pb-12 md:pt-24'>
      <a href='/' className='hover:underline hover:italic'>intro</a>
      <a href='/#selectedworks' className='hover:underline hover:italic'>works</a>
      <a href='/about' className='hover:underline hover:italic'>about</a>
      </div>
          <p className=' text-7xl font-bold'> hi, how may</p>
          <h1 className='text-7xl font-bold leading-8'> i help you?</h1>
          <p className='text-lg font-normal leading-8 pt-24 pb-14 py-10 w-2/3'>
            You may send me an email or let's have a quick conversation via chat. We can work on the design problems that may be hurdling the development of your projects and business. 
          </p>
        </div>
        <div className='flex flex-row w-full'>
          <div className='flex flex-col pr-16'>
            <span className='font-bold opacity-40 pb-2'>Email:</span>
            <span className='cursor-text'>contactlespino@gmail.com</span>
            <span className='font-bold opacity-40 pt-8 pb-2'>
              Let's connect:
            </span>
            <a href='https://www.linkedin.com/in/lcslicp/' target='_blank'>
              linkedin
            </a>
            <a href='https://github.com/lcslicp' target='_blank'>
              github
            </a>
            <a href='https://www.behance.net/lcslicp' target='_blank'>
              behance
            </a>
            <a href='https://dribbble.com/lcslicp' target='_blank'>
              dribbble
            </a>
            <span className='font-bold opacity-40 pt-8 pb-2'>Let's chat:</span>
            <a
              href='https://join.skype.com/invite/uJR30ME55Dyq'
              target='_blank'
            >
              skype
            </a>
            <span className='opacity-40 pt-2 pb-2'>
              Find me on google chat:
            </span>
            <span className='cursor-text'>contactlespino@gmail.com</span>
          </div>
          <div className='flex flex-col'>
            <span className='font-bold opacity-40 pb-2'>
              Applications I use:
            </span>
            Adobe Creative Suite
            <div className='flex flex-row'>
              <ul className='text-sm px-2'>
                <li>Photoshop</li>
                <li>InDesign</li>
                <li>Illustrator</li>
                <li>After Effects</li>
                <li>Premiere Pro</li>
                <li>XD</li>
              </ul>
              <ul className='text-sm opacity-60'>
                <li className='font-bold italic'>Supplemental</li>
                <li className='pl-4'>Media Encoder</li>
                <li className='pl-4'>Lightroom</li>
                <li className='pl-4'>Acrobat DC</li>
              </ul>
            </div>
            <span className='font-bold opacity-40 pt-4 pb-2'>
              Development Tools &amp; Libraries:
            </span>
            <div className='flex flex-row'>
              <ul className='text-sm px-4'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
              <ul className='text-sm px-4 opacity-60'>
                <li className='font-bold italic'>Supplemental</li>
                <li className='pl-4'>Tailwind CSS</li>
                <li className='pl-4'>Flowbite</li>
                <li className='pl-4'>Webflow</li>
                <li className='pl-4'>Lottie-web</li>
                <li className='pl-4'>Git</li>
                <li className='pl-4'>CLI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className='flex flex-col text-center text-xs bg-black'>
           <p className='opacity-50 text-stone pb-4 -mt-6'> Designed and Developed by Leslie Pino  &middot; 2022</p>
        </div>
     
    </>
  );
};

export default ContactPage;
