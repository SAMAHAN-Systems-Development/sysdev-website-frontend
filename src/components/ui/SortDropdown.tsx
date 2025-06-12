"use client"
import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface SortDropdownProps {
    sortByName: 'A2Z' | 'Z2A' | null;
    setSortByName: (value: 'A2Z' | 'Z2A' | null) => void;
    sortByYear: 'yearDesc' | 'yearAsc' | null;
    setSortByYear: (value: 'yearDesc' | 'yearAsc' | null) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
    sortByName,
    setSortByName,
    sortByYear,
    setSortByYear,
}) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (value: 'Default' | 'A2Z' | 'Z2A' | 'yearDesc' | 'yearAsc') => {
        setOpen(false);
        if (value === 'A2Z' || value === 'Z2A') {
            setSortByName(value);
            setSortByYear(null);
        } else if (value === 'yearDesc' || value === 'yearAsc') {
            setSortByYear(value);
            setSortByName(null);
        } else {
            setSortByName(null);
            setSortByYear(null);
        }
    };

    const options: { label: string; value: 'Default' | 'A2Z' | 'Z2A' | 'yearDesc' | 'yearAsc' }[] = [
        { label: 'Default', value: 'Default' },
        { label: 'A > Z', value: 'A2Z' },
        { label: 'Z > A', value: 'Z2A' },
        { label: 'Newest', value: 'yearDesc' },
        { label: 'Oldest', value: 'yearAsc' },
    ];


    // Determine selected label for display
    const selectedLabel =
        sortByName === 'A2Z' ? 'A > Z'
        : sortByName === 'Z2A' ? 'Z > A'
        : sortByYear === 'yearDesc' ? 'Newest'
        : sortByYear === 'yearAsc' ? 'Oldest'
        : 'Default';

    return (
        <div className='w-full pt-5 pb-7'>
            <div className='relative w-max '>
                <div onClick={() => setOpen(!open)} className="font-inter px-3 md:px-4 py-1.5 rounded-full border-[2.05px] border-[#F530FD]">
                    <div className='flex flex-row items-center cursor-pointer text-sm md:text-base'>
                        <span className='text-gray-500 '>Sort by:</span>
                        <div className='w-1.5'></div>
                        <span className='text-[#F530FD] px-1 font-semibold'>{selectedLabel}</span>
                        <div className='w-4 h-4 bg-[#727272] rounded-md ml-1 mr-1 pl-[1px] pt-[1px] '>
                            {open ? <RiArrowDropUpLine color='white'/> : <RiArrowDropDownLine color='white'/>}
                        </div>
                    </div>
                </div>
                {open && (
                    <div className="z-50 font-instrument-sans absolute w-32 md:w-40 bg-white text-[#727272] border border-gray-400 rounded-lg mt-2">
                        <div className="flex flex-col">
                            {options.map(({ label, value }) => {
                                const isSelected =
                                    (sortByName === value) ||
                                    (sortByYear === value) ||
                                    (value === 'Default' && !sortByName && !sortByYear);

                                return (
                                    <button
                                    key={value}
                                    onClick={() => handleSelect(value)}
                                    className={`text-sm md:text-base flex items-center cursor-pointer border-b border-gray-500 p-2 last:border-b-0 transition-discrete ${
                                        selectedLabel === label ? 'text-[#F530FD] font-semibold' : ''
                                    }`}
                                    >
                                    <div
                                        className={`w-5 h-5 mr-2 mb-0.5 rounded-md flex items-center justify-center ${
                                        isSelected ? 'bg-[#F530FD]' : ''
                                        }`}
                                    >
                                        {isSelected && (
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
                                    {label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SortDropdown;