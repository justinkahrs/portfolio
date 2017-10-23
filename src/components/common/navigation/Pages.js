import React from 'react';

import Work from '../../work/Work';
import Contact from '../../contact/Contact';
import About from '../../about/About';
import Portfolio from '../../portfolio';

export default {
  about: <About key="about" />,
  contact: <Contact key="contact" />,
  portfolio: <Portfolio key="portfolio" />,
  work: <Work key="work" />,
};
