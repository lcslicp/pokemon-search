import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import DoowitAnim from './doowit-lottie.json';

const DoowitLottie = () => {
  const firstProject = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: firstProject.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: DoowitAnim,
    });
  }, []);

  return <div ref={firstProject}></div>;
};

export default DoowitLottie;
