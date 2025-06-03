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
        <div onClick={handleClick} className="font-inter px-4 py-1.5 rounded-full border-[2.05px] border-[#F530FD]">
            {!open ? 
                <div className='flex flex-row items-center cursor-pointer'>
                    <span className='text-gray-500'>Sort by:</span>
                    <div className='w-1.5'></div>
                    {/* <span className='text-[#F530FD] px-1 font-semibold'>{selected}</span> */}
                    <div className='w-4 h-4 bg-[#727272] rounded-md ml-1 mr-1'>
                        <RiArrowDropDownLine color='white'/>
                    </div>
                </div>
            :   
                <div className='flex flex-row items-center cursor-pointer'>
                    <span className='text-gray-500'>Sort by:</span>
                    <div className='w-1.5'></div>
                    {/* <span className='text-[#F530FD] px-1 font-semibold'>{selected}</span> */}
                    <div className='w-4 h-4 bg-[#727272] rounded-md ml-1 mr-1'>
                        <RiArrowDropUpLine color='white'/>
                    </div>
                </div>
            }
        </div>
        {open && (
            <div className="z-50 font-instrument-sans absolute w-40 bg-white text-[#727272] border border-gray-400 rounded-lg mt-2">
                <div className="flex flex-col">
                      {options.map(({ label, value }) => (
                    <label key={value} className={`flex items-center cursor-pointer border-b border-gray-500 p-2 last:border-b-0 transition-discrete ${
                            selected === 'All' || selected === value ? 'text-[#F530FD] font-semibold' : ''
                        }`}>
                        <input
                        type="checkbox"
                        value={value}
                        checked={selected === value}
                        onChange={handleChange}
                        className="hidden peer cursor-pointer"
                        />
                        <div className="w-5 h-5 mr-2 mb-0.5 rounded-md flex items-center justify-center peer-checked:bg-[#F530FD]">
                            {selected === value && (
                                <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <div className='w-0.5'></div>
                        {label}
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