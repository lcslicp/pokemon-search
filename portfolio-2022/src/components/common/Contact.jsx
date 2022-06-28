import React from 'react';
import { useState } from 'react';
import Footer from './Footer';

const Contact = () => {
  const [copiedPopup, setCopiedPopup] = useState(null);

  const handleCopy = () => {
    navigator.clipboard
      .writeText('contactlespino@gmail.com')
      .then(setCopiedPopup('Copied!'))
      .then(
        setTimeout(() => {
          setCopiedPopup(null);
        }, 4000)
      );
  };

  return (
    <section className='relative z-30 bg-black w-full text-stone ' id='contact'>
      <div className='lg:pt-72 lg:pl-40 md:pl-24 md:pt-32'>
        <p className='lg:text-lg font-light pb-4'>
          let's make magic happen,
          <span className='font-bold'> get in touch:</span>
        </p>
        <button
          className='lg:text-7xl font-bold leading-10 lg:pb-6 hover:underline hover:font-medium hover:italic md:text-5xl md:mb-48'
          onClick={() => handleCopy()}
        >
          contactlespino@gmail.com
        </button>
        <p className='lg:text-sm text-stone z-50 lg:absolute lg:right-0 lg:bottom-80 lg:pr-72 md:text-normal md:pr-32'>
          {copiedPopup}
        </p>
      </div>

      <div className='lg:absolute lg:bottom-4 lg:pl-40 md:pl-24'>
        <p className='lg:text-sm font-bold opacity-50 lg:pb-2  md:mt-24 md:text-normal'>let's connect</p>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
