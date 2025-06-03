"use client"

import React from "react";
import { instrument_sans } from "@/styles/font";
import Button from "@/components/ui/Button";

export function ApplyCard() {
  return (
    <div className="w-11/12 sm:w-full md:max-w-[95%] lg:w-full mx-auto rounded-3xl bg-blue3 overflow-hidden">
     <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between py-20 px-6 md:p-8 lg:p-12">
       <div className="text-center md:text-left w-full md:w-3/5 lg:w-1/2">
        <h2 className={`${instrument_sans.className} text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-12 md:mb-4 md:line-clamp-2 md:overflow-hidden`}>
            Want to join us?
        </h2>
        
        <p className={`${instrument_sans.className} text-base md:text-base lg:text-lg text-white mb-14 md:mb-6 max-w-md mx-auto md:mx-0 text-pretty`}>
            We&apos;re always looking for passionate individuals to help us build the future of student-driven tech solutions.
        </p>
        
        {/* button with more top margin on mobile */}
        <div className="mt-6 md:mt-2 lg:mt-4">
            <Button variant="yellow" size="normal" className="font-bold py-4 md:py-3 px-10 md:px-8 rounded-full">
            APPLY NOW
            </Button>
          </div>
        </div>
        
        {/* circle Image - Hidden on mobile and tablet, visible on desktop */}
        <div className="hidden lg:block w-1/3 relative">
            <div className="w-56 h-56 rounded-full border-2 border-white/30 ml-auto"></div>
        </div>
      </div>
    </div>
  );
}