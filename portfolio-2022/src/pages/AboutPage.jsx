import React from 'react';

//components
import SidebarAbout from '../components/common/SidebarAbout';
import About from '../components/common/About';
import BgAnimation from '../components/feature/BgAnimation';
import Contact from '../components/common/Contact';
import Cursor from '../components/feature/Cursor';
const AboutPage = () => {
  return (
    <div>
      <Cursor />
      <SidebarAbout />
      <About />
      <BgAnimation />
      <Contact />
    </div>
  );
};

export default AboutPage;
