import React from 'react';
import Button from './Button';

const ServiceProjectsIdeaInMind = () => {
  return (
    <div className="max-w-96 sm:max-w-lg md:max-w-2xl lg:max-w-5xl px-8 md:px-12 lg:px-20 py-4 mx-auto h-48 sm:h-56 md:h-72 lg:h-96 flex items-center my-12 md:my-20">
      <div className="rounded-2xl overflow-hidden shadow-lg flex h-full">
        {/* Text Content - Responsive width */}
        <div className="w-1/2 sm:w-2/5 lg:w-2/5 px-4 py-7 sm:px-6 md:px-10 flex flex-col justify-center z-10 bg-blue3">
          <h2 className="text-xs sm:text-lg md:text-xl lg:text-2xl text-white mb-3 lg:mb-5 leading-tight">
            Have a project or idea in mind? Let&apos;s build it together
          </h2>
          <div className='flex items-center min-h-8 md:min-h-11 lg:min-h-12'>
            <Button size={"normal"} className='font-bold w-24 md:w-36'>Get In Touch</Button>
          </div>
          
        </div>
        
        {/* Image with Gradient - Responsive width */}
        <div className="w-1/2 sm:w-3/5 lg:w-3/5 h-full">
          <img
            src="/images/PlaceholderImage.png"
            alt="Project collaboration"
            className="w-full h-full object-cover"
          />
          
        </div>
      </div>
    </div>
  );
};

export default ServiceProjectsIdeaInMind;