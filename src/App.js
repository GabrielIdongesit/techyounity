import React from 'react';
// import AboutUs from './Components/AboutUs';
import Hero from './Components/Hero';
import Newsletter from './Components/Newsletter';
import OurEvent from './Components/OurEvent';
import OurStory from './Components/OurStory';



function App() {
  return (
    <div>
      <Hero />
      {/* <AboutUs /> */}
      <OurStory />
      <OurEvent />
      <Newsletter />
    </div>
  );
}

export default App;
