"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
const DevelopersCarousel = () => {
  const carouselItems = [
    {
      title: "Front-End Developer",
      desc: "Designs Interactive user Interfaces.",
      img: "AboutUsHeroBannerBackground.png",
    },
    {
      title: "Back-End Developer",
      desc: "Manages databases and server logic.",
      img: "AboutUsHeroBannerBackground.png",
    },
    {
      title: "UI/UX Designer",
      desc: "Crafts intuitive user experiences.",
      img: "AboutUsHeroBannerBackground.png",
    },
    {
      title: "Project Manager",
      desc: "Oversees timelines and stakeholder communication.",
      img: "AboutUsHeroBannerBackground.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full py-5 flex justify-center items-center">
      <div className="relative w-11/12  h-[600px] rounded-4xl overflow-hidden">
        {/* Slides */}
        <div
          ref={slideRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative min-w-full h-[600px]">
              <Image
                src={`/images/${item.img}`}
                alt={`${item.title}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 bg-blue-950/50 flex justify-center items-center z-10">
          <div className="flex flex-col items-center text-yellow2">
            <h1 className="text-3xl md:text-6xl font-bold">
              {carouselItems[currentIndex].title}
            </h1>
            <p className="text-xl md:text-4xl text-center max-w-xl text-white">
              {carouselItems[currentIndex].desc}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white  hover:text-[#FFDF36] active:text-[#F8D000] cursor-pointer transition-all"
        >
          <span className="hidden sm:block">
            <FaArrowCircleLeft size={30}></FaArrowCircleLeft>
          </span>
          <span className="block sm:hidden">
            <FaArrowLeft size={24}></FaArrowLeft>
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white  hover:text-[#FFDF36] active:text-[#F8D000] cursor-pointer transition-all"
        >
          <span className="hidden sm:block">
            <FaArrowCircleRight size={30}></FaArrowCircleRight>
          </span>
          <span className="block sm:hidden">
            <FaArrowRight size={24}></FaArrowRight>
          </span>
        </button>
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-[#FFDF36] scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersCarousel;
