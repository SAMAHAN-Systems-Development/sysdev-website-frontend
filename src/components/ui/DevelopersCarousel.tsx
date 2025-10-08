"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { withBasePath } from "@/lib/utils";
const DevelopersCarousel = () => {
  const carouselItems = [
    {
      title: "Front-End Developer",
      desc: "Designs interactive user interfaces.",
      img: "ABOUT-carousel-frontend.jpg",
    },
    {
      title: "Back-End Developer",
      desc: "Manages databases and server logic.",
      img: "ABOUT-carousel-backend.jpg",
    },
    {
      title: "UI/UX Designer",
      desc: "Crafts intuitive user experiences.",
      img: "ABOUT-carousel-uiux.jpg",
    },
    {
      title: "Creatives",
      desc: "Produces engaging visual and multimedia content such as graphics, layouts, and branding materials.",
      img: "ABOUT-carousel-creatives.png",
    },
    {
      title: "Project Manager",
      desc: "Oversees timelines and stakeholder communication.",
      img: "ABOUT-carousel-projectmanager.png",
    },
    {
      title: "Quality Assurance",
      desc: "Tests applications for bugs, errors, and performance issues to maintain software reliability.",
      img: "ABOUT-carousel-qualityassurance.png",
    },
    {
      title: "DevOps Engineer",
      desc: "Automates deployment, monitors infrastructure, and bridges development and operations for efficiency.",
      img: "ABOUT-carousel-devops.png",
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
      <div className="relative w-full md:w-5/6 md:max-w-4xl h-80 md:h-[450px] lg:h-[500px] md:rounded-3xl lg:rounded-4xl overflow-hidden">
        {/* Slides */}
        <div
          ref={slideRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative min-w-full h-[600px]">
              <Image
                src={withBasePath(`/images/${item.img}`)}
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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-3">
              {carouselItems[currentIndex].title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center max-w-48 sm:max-w-72 md:max-w-xl text-white">
              {carouselItems[currentIndex].desc}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-20 text-white  hover:text-[#FFDF36] active:text-[#F8D000] cursor-pointer transition-all"
        >
          <span className="hidden sm:block">
            <FaArrowCircleLeft size={30}></FaArrowCircleLeft>
          </span>
          <span className="block sm:hidden">
            <FaArrowLeft size={16}></FaArrowLeft>
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-20 text-white  hover:text-[#FFDF36] active:text-[#F8D000] cursor-pointer transition-all"
        >
          <span className="hidden sm:block">
            <FaArrowCircleRight size={30}></FaArrowCircleRight>
          </span>
          <span className="block sm:hidden">
            <FaArrowRight size={16}></FaArrowRight>
          </span>
        </button>
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 md:gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-[#FFDF36] scale-125"
                  : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersCarousel;

