"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const SortDropdown: React.FC = () => {
    const [selected, setSelected] = useState('All');
    const [open, setOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSelected(value);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const options = [
        { label: 'All', value: 'All' },
        { label: 'A > Z', value: 'A2Z' },
        { label: 'Z > A', value: 'Z2A' },
        { label: 'Newest', value: 'Newest' },
        { label: 'Oldest', value: 'Oldest' },
    ];

  return (
    <div className='w-full pt-5 pb-7'>
        <div className='relative w-max '>
        <div onClick={handleClick} className="font-inter lg:px-4 lg:py-1.5 md:px-3 md:py-1 px-2 py-0.5 rounded-full border-[2.05px] border-[#F530FD]">
            <div className='flex flex-row items-center cursor-pointer lg:text-base md:text-[14px] text-[12px]'>
                <span className='text-gray-500'>Sort by:</span>
                <div className='w-1.5'></div>
                <div className='lg:w-4 lg:h-4 md:w-3.5 md:h-3.5 w-3 h-3 bg-[#727272] rounded-sm lg:ml-1 lg:mr-1 ml-0.5 mr-0.5'>
                    {!open ? 
                    <RiArrowDropDownLine color='white'/>
                    :
                    <RiArrowDropUpLine color='white'/>
                    }
                </div>
            </div>
        </div>
        {open && (
            <div className="z-50 font-instrument-sans absolute lg:w-40 w-35 bg-white text-[#727272] border border-gray-400 rounded-lg mt-2">
                <div className="flex flex-col">
                      {options.map(({ label, value }) => (
                    <label key={value} className={`flex items-center cursor-pointer border-b border-gray-500 lg:p-2 p-1 last:border-b-0 transition-discrete ${
                            selected === 'All' || selected === value ? 'text-[#F530FD] font-semibold' : ''
                        }`}>
                        <input
                        type="checkbox"
                        value={value}
                        checked={selected === value}
                        onChange={handleChange}
                        className="hidden peer cursor-pointer"
                        />
                        <div className="lg:w-5 lg:h-5 w-3 h-3 mr-2 lg:ml-0 ml-1 mb-0.5 lg:rounded-md rounded-sm flex items-center justify-center peer-checked:bg-[#F530FD]">
                            {selected === value && (
                                <svg
                                className="lg:w-3 lg:h-3 w-2 h-2 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <div className='lg:text-base text-[13px]'>{label}</div>
                    </label>
                    ))}
                </div>
            </div>
        )}
    </div>
    </div>
    
  );
};

export default SortDropdown;