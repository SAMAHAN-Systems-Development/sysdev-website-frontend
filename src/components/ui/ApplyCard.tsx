"use client"

import React from "react";
import { instrument_sans } from "@/styles/font";
import Button from "@/components/ui/Button";

export function ApplyCard() {
  return (
    <div className="w-5/6 max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto rounded-3xl bg-blue3 overflow-hidden my-12">
     <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between py-10 px-6 md:p-8 lg:p-10">
       <div className="text-center md:text-left w-full lg:w-4/5">
        <h2 className={`${instrument_sans.className} text-2xl md:text-4xl font-bold text-white mb-5 md:mb-4 md:line-clamp-2 md:overflow-hidden`}>
            Want to join us?
        </h2>
        
        <p className={`${instrument_sans.className} text-base md:text-lg text-white mb-7 md:mb-6 lg:max-w-lg mx-auto md:mx-0 text-pretty`}>
            We&apos;re always looking for passionate individuals to help us build the future of student-driven tech solutions.
        </p>
        
        {/* button with more top margin on mobile */}
        <div className="mt-6 md:mt-4 md:mb-4 flex justify-center md:justify-start items-center h-7 lg:h-13">
            <Button variant="yellow" size="big" className="font-bold px-10 md:px-8 rounded-full">
            APPLY NOW
            </Button>
          </div>
        </div>
      
      </div>
    </div>
  );
}