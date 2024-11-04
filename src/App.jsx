import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';  // This is the import statement
import Footer from './components/Footer';
import InfoSection from './components/InfoSection';
import Banner from './components/Banner';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero /> {/* This is where you render the Hero component */}
      <Products/>
      <InfoSection/>
      <Banner/>
      <Footer/>
    </div>
  );
};

export default App;











