import React from 'react';

const intro = () => {
  return (
    <section className="text-black z-10 px-40 pt-40 py-48" id='intro'>
      <div>
        <p className=" text-7xl font-bold"> hey,</p>
        <h1 className="text-7xl font-bold leading-8">i'm leslie.</h1>
        <p className="text-lg font-normal w-1/3 leading-6 pt-10 pb-14 py-10">
          I collaborate with organizations in effectively conveying their
          mission through visual storytelling.
        </p>
        <button className="border-black bg-transparent border-2 hover:bg-black text-black font-bold hover:text-stone rounded-full py-4 px-8">
          let's collaborate &rarr;
        </button>
      </div>
    </section>
  );
};

export default intro;
