import React from 'react';

const BgAnimation = () => {
  return (
    <div>
      <div className="bg-stone/50 -z-10 blur-lg w-full h-full fixed inset-0"></div>
      <div className="-z-20 fixed w-screen h-2/3 top-20 right-6">
        <div className="absolute bg-red rounded-full w-96 h-96 top-28 right-80 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bg-yellow/60 rounded-full w-96 h-96 top-0 right-11 mix-blend-overlay blur-3xl"></div>
        <div className="absolute bg-fuchsia/75 rounded-full w-96 h-96 top-28 right-11 mix-blend-multiply blur-3xl"></div>
      </div>
    </div>
  );
};

export default BgAnimation;
