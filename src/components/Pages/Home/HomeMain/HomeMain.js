import React, { Fragment } from 'react';

import About from '../../../Utilities/About/AboutHome';
// import Games from '../../../Utilities/About/Game';
import Cta from '../../../Utilities/Cta/Cta';
// import Matches from '../../../Utilities/Matches/Matches';
// import BlogOne from '../../../Utilities/Blog/BlogOne/BlogOne';
import HeroOne from '../../../Utilities/Hero/HeroOne/HeroOne';
// import WorkGallery from '../../../Utilities/WorkGallery/WorkGallery';


const Home = () => {
  return (
    <Fragment>
      {/* Hero Component */}
      <HeroOne />
      <div className='home-about-cta-wrapper'>
        {/* About Component */}
        <About />
        {/* Gallery Component 
            <WorkGallery/>*/}
        {/* Match Component 
            <Games />*/}
        {/* Gallery Component 
            <WorkGallery/>*/}
        {/* Cta Component */}
        <Cta />
      </div>
    </Fragment>
  );
}

export default Home;