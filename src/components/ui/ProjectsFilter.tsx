'use client';

interface ProjectsFilterProps {
  selectedFilter: 'SAMAHAN' | 'Other';
  setSelectedFilter: React.Dispatch<React.SetStateAction<'SAMAHAN' | 'Other'>>;
}

const ProjectsFilter = ({ selectedFilter, setSelectedFilter }: ProjectsFilterProps) => {
  return (
    <div className="flex min-w-full max-w-full overflow-hidden bg-white text-black border-b border-black text-lg md:text-2xl lg:text-3xl">
      <button
        onClick={() => setSelectedFilter('SAMAHAN')}
        className={`rounded-t-xl flex-1 px-5 py-1 md:px-6 md:py-3 font-bold transition-colors duration-200 cursor-pointer ${
          selectedFilter === 'SAMAHAN' ? 'bg-green ' : 'bg-white '
        }`}
      >
        <span className="block md:hidden">SAMAHAN<br />Projects</span>
        <span className="hidden md:block">SAMAHAN Projects</span>
      </button>
      <button
        onClick={() => setSelectedFilter('Other')}
        className={`rounded-t-xl flex-1 px-5 py-1 md:px-6 md:py-3 font-bold transition-colors duration-200 cursor-pointer ${
          selectedFilter === 'Other' ? 'bg-green ' : 'bg-white '
        }`}
      >
        <span className="block md:hidden">Other<br />Projects</span>
        <span className="hidden md:block">Other Projects</span>
      </button>
    </div>
  );
};

export default ProjectsFilter;