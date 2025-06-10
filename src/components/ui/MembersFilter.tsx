'use client';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const departments = [
  'Officers',
  'Full-Stack',
  'Front-End',
  'Back-End',
  'QA',
  'DevOps',
  'Project Manager',
  'UI/UX',
  'Creatives',
];

export interface MembersFilterProps {
  currentDepartment: string;
  setCurrentDepartment: React.Dispatch<React.SetStateAction<string>>;
}

const MembersFilter: React.FC<MembersFilterProps> = ({
  currentDepartment,
  setCurrentDepartment,
}) => {

  const selectedIndex = departments.indexOf(currentDepartment);

  const getCenteredSlice = () => {
    const start = Math.max(0, selectedIndex - 2);
    const end = Math.min(departments.length, start + 5);
    const adjustedStart = Math.max(0, end - 5);
    return departments.slice(adjustedStart, end);
  };

  const moveLeft = () => {
    const prevIndex = (selectedIndex - 1 + departments.length) % departments.length;
    setCurrentDepartment(departments[prevIndex]);
  };

  const moveRight = () => {
    const nextIndex = (selectedIndex + 1) % departments.length;
    setCurrentDepartment(departments[nextIndex]);
  };

  return (
    <div className="w-full flex items-center justify-center">

    {/* MOBILE */}
    <div className="flex flex-col items-center justify-center w-full md:hidden border-b border-gray-400 max-w-[70vw] mt-4 px-10">
        <div className="flex items-center gap-2">
        <FaArrowCircleLeft
            onClick={moveLeft}
            className="text-black w-4 h-4 cursor-pointer hover:scale-105 transition-transform duration-200"
        />
        <div className="px-4 pb-1 py-1.5 text-black text-nowrap min-w-30 flex justify-center -mt-0.5">
            {currentDepartment}
        </div>
        <FaArrowCircleRight
            onClick={moveRight}
            className="text-black w-4 h-4 cursor-pointer hover:scale-105 transition-transform duration-200"
        />
        </div>
    </div>

    {/* TABLET */}
    <div className="hidden md:flex lg:hidden items-center gap-4 border-b border-gray-400 max-w-[90vw] mt-4 px-10">
        <FaArrowCircleLeft
            onClick={moveLeft}
            className="min-w-4 min-h-4 cursor-pointer text-black hover:scale-105 transition-transform duration-200"
        />
        <div className="flex justify-between gap-2">
            {getCenteredSlice().map((dept) => (
            <button
                key={dept}
                onClick={() => setCurrentDepartment(dept)}
                className={`min-w-20 max-h-10 text-center px-2 pb-1 py-1.5 rounded-t-2xl transition-colors duration-300 ease-in-out text-black font-medium whitespace-nowrap cursor-pointer ${
                    currentDepartment === dept ? 'bg-[#BDFF30]' : 'bg-transparent'
                }`}
                >
                {dept}
            </button>
            ))}
        </div>
        <FaArrowCircleRight
            onClick={moveRight}
            className="min-w-4 min-h-4 cursor-pointer text-black hover:scale-105 transition-transform duration-200"
        />
    </div>

    {/* DESKTOP */}
    <div className="hidden lg:flex items-center border-b border-gray-400 mt-4 px-10">
        <div className="flex flex-wrap justify-center gap-1 w-full">
        {departments.map((dept) => (
            <button
            key={dept}
            onClick={() => setCurrentDepartment(dept)}
            className={`px-4 pb-1 py-1.5 rounded-t-2xl transition duration-200 text-black font-medium whitespace-nowrap cursor-pointer lg:text-[13px] xl:text-base ${
                currentDepartment === dept ? 'bg-[#BDFF30] text-[#F530FD]' : 'bg-transparent'
            }`}
            >
            {dept}
            </button>
        ))}
        </div>
    </div>
    </div>
);
};

export default MembersFilter;