import React from 'react';

import Sidebardefault from '../components/common/Sidebardefault';
import Intro from '../components/common/Intro';
import SelectedWorks from '../components/common/SelectedWorks';
import Contact from '../components/common/Contact';
import BgAnimation from '../components/feature/BgAnimation';
import Cursor from '../components/feature/Cursor';

const ContactPage = () => {
  return (
    <div>
      <Sidebardefault />
      <Intro />
      <SelectedWorks />
      <Contact />
      <BgAnimation />
      <Cursor />
    </div>
  );
};

export default ContactPage;
