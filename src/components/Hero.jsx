import React from 'react';
import heroImage from '../assets/hero-bg.webp';

const Hero = () => {
  return (
    <section className="md:pt-28 sm:pt-20 w-full text-gray-700 bg-gray-100 flex items-center justify-between px-4 h-52 align-baseline md:h-64 lg:h-80 realtive overflow-hidden">

      {/* Text Section */}
      <div className="w-full pt-8 py-2 md:w-1/2 md:p-4 text-center md:text-left flex flex-col justify-center">
        <h1 className="text-base mt-3 md:text-2xl lg:text-4xl text-left  font-bold leading-snug md:leading-normal">
          Food and groceries delivery from Lahore’s best restaurants and shops
        </h1>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 sm:h-40 md:h-full flex items-center justify-center">
        <img
          src={heroImage}
          alt="Hero"
          className="lg:w-3/4 lg:h-72 object-cover relative top-5 md:top-0"
        />
      </div>

    </section>
  );
};

export default Hero;
