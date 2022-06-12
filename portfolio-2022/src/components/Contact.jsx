import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <section className="relative z-30 bg-black w-full text-stone" id='contact'>
       <div className='pt-72 pl-40'>
        <p className='text-lg font-light pb-4'>let's make magic happen,<span className='font-bold'> get in touch:</span></p>
        <p className='text-7xl font-bold leading-10 pb-6'>contact@lesliepn.me</p>
      </div>
      <div className= 'absolute bottom-4 pl-40'>
      <p className='text-sm font-bold opacity-50 pb-2'>let's connect</p>
      <Footer />
      </div>
      
    </section>
  );
};

export default Contact;
