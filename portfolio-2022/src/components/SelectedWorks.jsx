import React from 'react';
import DoowitLottie from '../assets/animations/DoowitLottie';

const Selectedworks = () => {
  return (
    <section className="bg-black z-20 text-stone overflow-x-hidden" id='selected-works'>
      <div className="flex flex-row flex-nowrap">
        <div className="flex-none pt-72 pl-40 w-1/3">
          <p className="text-base font-bold leading-8 pb-3">
            Task Management App
          </p>
          <p className="text-5xl font-bold leading-10 pb-6">
            Doowit Web Application
          </p>
          <p className="text-sm font-normal pb-6">
            Doowit is a personal task management app primarily used as a tool to sort
            and manage tasks with ease.
          </p>
          <a
            href="https://www.behance.net/gallery/144873685/Doowit-Todo-App-UI-Web-Design"
            target="_blank"
            className="text-sm font-normal hover:underline hover:opacity-70 hover:italic"
          >
            Visit Site &rarr;
          </a>
        </div>

        <div className=" flex-auto">
          <DoowitLottie />
        </div>
      </div>
    </section>
  );
};

export default Selectedworks;
