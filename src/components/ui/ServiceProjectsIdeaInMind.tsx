import React from 'react';

const ServiceProjectsIdeaInMind = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative rounded-2xl overflow-hidden shadow-lg flex" style={{backgroundColor: '#10245c'}}>
        {/* Text Content - Responsive width */}
        <div className="w-3/5 md:w-1/2 lg:w-2/5 p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative z-10" style={{backgroundColor: '#10245c'}}>
          <h2 className="text-lg md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 lg:mb-10 leading-tight">
            Have a project<br />
            or idea in mind?<br />
            Let's build it<br />
            together
          </h2>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-full transition-colors duration-200 w-fit text-sm md:text-base">
            Get In Touch
          </button>
        </div>
        
        {/* Image with Gradient - Responsive width */}
        <div className="w-2/5 md:w-1/2 lg:w-3/5 relative">
          <img
            src="/images/PlaceholderImage.png"
            alt="Project collaboration"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #10245c, rgba(16, 36, 92, 0.7), rgba(16, 36, 92, 0.4), rgba(16, 36, 92, 0.2), transparent)'}}></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProjectsIdeaInMind;