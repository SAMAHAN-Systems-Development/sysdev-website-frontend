'use client';

import { useState } from 'react';

const ProjectsFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<'SAMAHAN' | 'Other'>('SAMAHAN');

  return (
    <div className="flex w-min justify-center text-lg font-bold border-b border-black transition-colors duration-200 text-black overflow-hidden bg-white pt-10">
      <button
        onClick={() => setSelectedFilter('SAMAHAN')}
        className={`rounded-t-lg w-56 py-2 cursor-pointer ${
          selectedFilter === 'SAMAHAN'
            ? 'bg-green '
            : 'bg-white '
        }`}
      >
        SAMAHAN Projects
      </button>
      <button
        onClick={() => setSelectedFilter('Other')}
        className={`rounded-t-lg w-56 py-2 cursor-pointer ${
          selectedFilter === 'Other'
            ? 'bg-green '
            : 'bg-white '
        }`}
      >
        Other Projects
      </button>
    </div>
  );
};

export default ProjectsFilter;