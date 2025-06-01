'use client';

import { useState } from 'react';

const ProjectsFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<'SAMAHAN' | 'Other'>('SAMAHAN');

  return (
    <div className="inline-flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden bg-white border-b border-black">
      <button
        onClick={() => setSelectedFilter('SAMAHAN')}
        className={`flex-1 px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 text-xs md:text-sm lg:text-base font-bold transition-colors duration-200 ${
          selectedFilter === 'SAMAHAN'
            ? 'bg-lime-400 text-black'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <span className="block sm:hidden">SAMAHAN<br />Projects</span>
        <span className="hidden sm:block">SAMAHAN Projects</span>
      </button>
      <button
        onClick={() => setSelectedFilter('Other')}
        className={`flex-1 px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 text-xs md:text-sm lg:text-base font-bold transition-colors duration-200 ${
          selectedFilter === 'Other'
            ? 'bg-lime-400 text-black'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <span className="block sm:hidden">Other<br />Projects</span>
        <span className="hidden sm:block">Other Projects</span>
      </button>
    </div>
  );
};

export default ProjectsFilter;