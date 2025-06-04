import React from "react";

const offers = [
  {
    title: "Internal Dev Support",
    description:
      "We provide technical development and long-term support for SAMAHAN-recognized organizations. From websites to internal tools, we help orgs work smarter, not harder.",
    image: "/images/WhatWeOfferSection.png",
  },
  {
    title: "Potential Future Public Collaborations",
    description:
      "We’re exploring opportunities to open up our systems and services to the broader AdDU community. Stay tuned as we expand our reach beyond organizations.",
    image: "/images/WhatWeOfferSection.png",
  },
  {
    title: "Patnerships & Cross-Org Collabs",
    description:
      "We team up with other sectors and orgs within the university to co-develop platforms and initiatives that align with shared goals - always in user-centered design.",
    image: "/images/WhatWeOfferSection.png",
  }
];

// Mobile border radii helper
function getMobileImageRadius(row: number) {
  if (row === 1 || row === 3) {
    // Only top-right and bottom-right
    return {
      borderTopLeftRadius: 0,
      borderTopRightRadius: "1rem",
      borderBottomRightRadius: "1rem",
      borderBottomLeftRadius: 0,
    };
  }
  if (row === 2) {
    // Only top-left and bottom-left
    return {
      borderTopLeftRadius: "1rem",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: "1rem",
    };
  }
  
  return {};
}

// Desktop border radii helper
function getDesktopImageRadius(row: number, col: number) {
  // row and col are 1-based indexes
  // Row 1, Col 2 (top middle): only top-left/right rounded
  if (row === 1 && col === 2) {
    return {
      borderTopLeftRadius: "1rem",
      borderTopRightRadius: "1rem",
      borderBottomLeftRadius: "0",
      borderBottomRightRadius: "0",
    };
  }
  // Row 2, Col 1 (bottom left): only bottom-left rounded
  if (row === 2 && col === 1) {
    return {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: "1rem",
    };
  }
  // Row 2, Col 3 (bottom right): only bottom-right rounded
  if (row === 2 && col === 3) {
    return {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: "1rem",
      borderBottomLeftRadius: 0,
    };
  }
  // Default: no radius
  return {};
}

export default function WhatWeOfferSection() {
  // Optionally, for SSR you may want to use a responsive hook instead of window.innerWidth
  const isDesktop = typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  

  return (
    <section className="py-10 px-2 sm:py-12 sm:px-4 md:py-16 md:px-8 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-20 mb-5 md:mt-4 md:mb-4 text-[var(--color-blue3)]">
        WHAT <span className="text-[var(--color-yellow2)]">WE</span> OFFER
      </h1>
      <hr className="border-t-2 border-[var(--color-blue3)] my-4 md:my-6 w-full" />

      {/* Chessboard Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-0 mb-10 md:mb-16 h-[540px] sm:h-[600px] md:h-[500px] my-8 md:my-20 relative">
        {/* === Row 1 === */}
        {/* Text 1 */}
        <div className="flex flex-col justify-center items-center rounded-2xl p-3 sm:p-4 md:p-8 bg-white md:col-start-1 md:row-start-1 ">
          <h2 className="text-[0.7rem] sm:text-xl md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--color-blue3)] text-center">
            {offers[0].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-[var(--color-blue3)] text-center">
            {offers[0].description}
          </p>
        </div>
        {/* Image 1 */}
        <div className="relative w-full h-full md:col-start-2 md:row-start-1 md:rounded-tl-2xl md:rounded-tr-2xl overflow-hidden" style={{ aspectRatio: "1/1" }}>
          <img
            src={offers[0].image}
            alt={offers[0].title}
            className="absolute inset-0 w-full h-full object-cover"
            style={
              isDesktop
                ? getDesktopImageRadius(1, 2)
                : getMobileImageRadius(1)
            }
          />
        </div>
        {/* Text 2 (desktop only) */}
        <div className="hidden md:flex flex-col justify-center items-center rounded-2xl p-3 sm:p-4 md:p-8 bg-white md:col-start-3 md:row-start-1">
          <h2 className="text-xs sm:text-xl md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--color-blue3)] text-center">
            {offers[1].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-[var(--color-blue3)] text-center">
            {offers[1].description}
          </p>
        </div>

        {/* === Row 2 (mobile, stacked) === */}
        {/* Image 2 (mobile only) */}
        <div className="relative w-full h-full block md:hidden" style={{ aspectRatio: "1/1" }}>
          <img
            src={offers[1].image}
            alt={offers[1].title}
            className="absolute inset-0 w-full h-full object-cover"
            style={getMobileImageRadius(2)}
          />
        </div>
        {/* Text 2 (mobile only) */}
        <div className="md:hidden flex-col justify-center items-center rounded-2xl p-3 sm:p-4 md:p-8 bg-white flex">
          <h2 className="text-xs sm:text-xl md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--color-blue3)] text-center">
            {offers[1].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-[var(--color-blue3)] text-center">
            {offers[1].description}
          </p>
        </div>

        {/* === Row 2 (desktop) === */}
        {/* Image 2 (desktop only, col 1, row 2) */}
        <div className="hidden md:block relative w-full h-full md:col-start-1 md:row-start-2" style={{ aspectRatio: "1/1" }}>
          <img
            src={offers[1].image}
            alt={offers[1].title}
            className="absolute inset-0 w-full h-full object-cover"
            style={getDesktopImageRadius(2, 1)}
          />
        </div>
        {/* Text 3 (desktop only, col 2, row 2) */}
        <div className="hidden md:flex flex-col justify-center items-center rounded-2xl p-3 sm:p-4 md:p-8 bg-white mt-0 md:col-start-2 md:row-start-2">
          <h2 className="text-[0.7rem] sm:text-xl md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--color-blue3)] text-center">
            {offers[2].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-[var(--color-blue3)] text-center">
            {offers[2].description}
          </p>
        </div>
        {/* Image 3 (desktop only, col 3, row 2) */}
        <div className="hidden md:block relative w-full h-full md:col-start-3 md:row-start-2" style={{ aspectRatio: "1/1" }}>
          <img
            src={offers[2].image}
            alt={offers[2].title}
            className="absolute inset-0 w-full h-full object-cover"
            style={getDesktopImageRadius(2, 3)}
          />
        </div>

        {/* === Row 3 (mobile) === */}
        {/* Text 3 (mobile) */}
        <div className="md:hidden flex flex-col justify-center items-center rounded-2xl p-3 sm:p-4 md:p-8 bg-white mt-2">
          <h2 className="text-[0.7rem] sm:text-xl md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-[var(--color-blue3)] text-center">
            {offers[2].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-base text-[var(--color-blue3)] text-center">
            {offers[2].description}
          </p>
        </div>
        {/* Image 3 (mobile) */}
        <div className="relative w-full h-full md:hidden" style={{ aspectRatio: "1/1" }}>
          <img
            src={offers[2].image}
            alt={offers[2].title}
            className="absolute inset-0 w-full h-full object-cover"
            style={getMobileImageRadius(3)}
          />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="relative rounded-2xl overflow-hidden max-w-full mt-10 md:mt-20 mb-8 h-[270px] sm:h-[350px] md:h-[400px] xl:h-[550px] flex items-stretch">
        <div className="w-1/2 bg-[var(--color-blue3,#18234a)]" />
        {/* Image on the right */}
        <img
          src="/images/WhatWeOfferSection.png"
          alt="Contact CTA"
          className="absolute right-0 top-0 h-full w-1/2 object-cover object-right"
          draggable={false}
        />
        {/* Blue gradient overlay, starts from middle, fades over image */}
        <div className="absolute left-1/2 top-0 h-full w-1/2 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--color-blue3,#18234a) 0%, rgba(24,35,74,0.8) 40%, rgba(24,35,74,0.0) 100%)"
          }}
        />
        {/* Content */}
        <div className="absolute left-10 top-0 h-full w-[90%] xs:w-2/3 sm:w-1/2 flex flex-col justify-center z-10">
          <div className="px-4 sm:px-20 md:px-20">
            <h3 className="text-md sm:text-2xl md:text-3xl xl:text-4xl text-white font-semibold mb-4 sm:mb-6 md:mb-8 leading-snug">
              Have a project<br />
              or idea in mind?<br />
              Let’s build it<br />
              together
            </h3>
            <button
              className="
                bg-[var(--color-yellow2)] hover:bg-yellow-300 text-[var(--color-blue3,#18234a)]
                font-bold
                w-[90px] h-[20px] text-[0.5rem]
                sm:w-[100px] sm:h-[40px]  sm:text-[0.3rem]
                md:w-[140px] md:h-[40px] md:text-[1rem]
                lg:w-[223px] lg:h-[50px] lg:text-[1.3rem]
                rounded-full text-base sm:text-lg shadow transition-colors
                px-0 py-0           
                flex items-center justify-center
              "
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}