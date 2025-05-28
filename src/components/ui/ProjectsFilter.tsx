'use client';

import { useState } from 'react';

const ProjectsFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<'SAMAHAN' | 'Other'>('SAMAHAN');

  return (
    <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden bg-white">
      <button
        onClick={() => setSelectedFilter('SAMAHAN')}
        className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${
          selectedFilter === 'SAMAHAN'
            ? 'bg-lime-400 text-black'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        SAMAHAN Projects
      </button>
      <button
        onClick={() => setSelectedFilter('Other')}
        className={`px-6 py-2 text-sm font-medium transition-colors duration-200 ${
          selectedFilter === 'Other'
            ? 'bg-lime-400 text-black'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Other Projects
      </button>
    </div>
  );
};

export default ProjectsFilter;