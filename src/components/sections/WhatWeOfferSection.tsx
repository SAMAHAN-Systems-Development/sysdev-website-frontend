import React from "react";
import ServiceProjectsIdeaInMind from "../ui/ServiceProjectsIdeaInMind";
import Services from "../ui/Services";

export default function WhatWeOfferSection() {

  return (
    <section className="py-10 px-2 sm:py-12 sm:px-4 md:py-16 md:px-8 max-w-6xl mx-auto flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-20 mb-3 md:mt-4 md:mb-4 text-[var(--color-blue3)]">
        WHAT <span className="text-[var(--color-yellow2)]">WE</span> OFFER
      </h1>
      <div className="px-8 md:px-12 lg:px-20 w-full max-w-96 sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto mb-10 md:mb-16">
        <hr className="border-[1.5px] border-[var(--color-blue3)]  w-full" />
      </div>
      
      <Services/>
      <div className="h-13"></div>
      <ServiceProjectsIdeaInMind />

    </section>
  );
}