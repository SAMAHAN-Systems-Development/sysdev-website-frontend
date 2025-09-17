"use client"

import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleXmark } from "react-icons/fa6";
import { DetailedProject } from "@/lib/features/projects/types/projects";
import Image from "next/image";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { GetProjectById } from "@/lib/features/projects/service/GetProjectById.api";


type ProjectsModalProps = {
  openedProjectId: number;
  setOpenedProjectId: (projectId: number | null) => void;
};

const ProjectsModal: React.FC<ProjectsModalProps> = ({ openedProjectId, setOpenedProjectId }) => {
  const [detailedProject, setDetailedProject] = useState<DetailedProject>();
  
      useEffect(() => {
  async function fetchData() {
    const res = await GetProjectById(openedProjectId);
    //console.log("GetProjectById response:", res);
    // If your API returns an object, not an array:
    if (res && typeof res === "object") {
      setDetailedProject(res);
    }
  }
  fetchData();
}, [openedProjectId]);

const [currentIndex, setCurrentIndex] = React.useState(0);
const [category, setCategory] = React.useState<string>("Core");

if (!detailedProject) return null;

const nextSlide = () => {
  setCurrentIndex((prev) => (prev + 1) % detailedProject.images.length);
};
const prevSlide = () => {
  setCurrentIndex(
    (prev) => (prev - 1 + detailedProject.images.length) % detailedProject.images.length
  );
};

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-blue3/50 z-50 ">
            <div className="w-4/5 max-w-md md:w-[420px] md:h-[90vh] h-[60vh] flex flex-col justify-center">
              
                {/* white portion (fixed, not scrollable) */}
                <div className="relative h-20 md:h-9 w-full bg-white rounded-t-lg flex items-center justify-between px-3">
                    <button 
                        onClick={() => setOpenedProjectId(null)}
                        className="absolute top-0 bottom-0 right-3 cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
                        <FaCircleXmark color="#292D32" size={20} />
                    </button>
                </div>

                {/* blue portion (scrollable) */}
                <div className="bg-[#0E2558] rounded-b-lg w-full p-6 md:p-8 flex flex-col items-center justify-start overflow-y-auto md:max-h-[calc(90vh-2.25rem)] pb-15">
      
                    <div className="w-full min-h-36 relative rounded-lg overflow-hidden">
                      {/* Carousel */}
                      <div
                        className="w-full h-36 flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                      >
                        {detailedProject?.images?.map((image, index) => (
                          <div key={index} className="relative w-full flex-shrink-0 h-36">
                            <Image
                              src={typeof image === "string" ? image : image.url}
                              alt={detailedProject.title + " image " + (index + 1)}
                              fill
                              className="object-cover"
                              priority={index === 0}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      {detailedProject?.images?.length > 1 && (
                        <>
                          <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-[#FFDF36] active:text-[#F8D000] cursor-pointer transition-all"
                            aria-label="Previous"
                          >
                            <FaArrowCircleLeft size={22} />
                          </button>
                          <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-[#FFDF36] active:text-[#F8D000] cursor-pointer transition-all"
                            aria-label="Next"
                          >
                            <FaArrowCircleRight size={22} />
                          </button>
                          {/* Pagination Dots */}
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1">
                            {detailedProject.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                  index === currentIndex ? "bg-[#FFDF36] scale-125" : "bg-white/50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>


                    <div className="p-1 flex flex-col gap-5 items-center justify-start w-full">

                        {/* project name and links */}
                        <div className="flex flex-row gap-3 w-full items-center justify-between mt-3">
                            <div
                                className={`border-[2px] w-fit border-[#BDFF30] ${
                                    detailedProject.title.length > 30 ? 'rounded-2xl' : 'sm:rounded-full rounded-lg'
                                }`}
                                >
                                <span className={`font-inter text-[#FDDF37] py-1 flex justify-start font-extrabold text-[15px] leading-tight break-words ${
                                    detailedProject.title.length > 30 ? 'px-3' : 'px-2'
                                }`}>
                                    {detailedProject.title}
                                </span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <button onClick={() => window.open(detailedProject.links[1].link, "_blank")} className="text-gray-600 transition hover:scale-105">
                                    <FaGithub size={25} color="white" className="cursor-pointer" />
                                </button>
                                <button onClick={() => window.open(detailedProject.links[0].link, "_blank")} className="text-gray-600 bg-[#FDDF37] rounded-lg hover:scale-105 transition">   
                                    <MdArrowOutward size={25} color="#0E2558" className="cursor-pointer" />
                                </button>
                            </div>
                        </div>

                        {/* launch date / partnered with */}
                        <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between w-full">
                            <div className="flex min-h-18 h-auto md:h-full  flex-row items-center">
                                <div className="w-2 h-full rounded-l-md bg-[#FDDF37]"></div>
                                <div className="md:w-[155px] w-[200px] h-full flex flex-col gap-1 p-2 rounded-r-md bg-[#324153]">
                                    <span className="text-white font-semibold text-sm px-2 py-1 flex flex-col gap-1">
                                        <span className="flex flex-row items-center justify-start text-xs">
                                            <IoCalendar className="inline-block mr-1" color="#BDFF30" />
                                            Launch Date
                                        </span>
                                        <span className="font-light text-[11px]">
                                            {new Date(detailedProject.dateLaunched).toLocaleDateString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </span>
                                </div>  
                            </div>
                            <div className="flex min-h-18 h-auto flex-row items-center">
                                <div className="w-2 h-full rounded-l-md bg-[#FDDF37]"></div>
                                <div className="md:w-[155px] w-[200px] h-full flex flex-col gap-1 p-2 rounded-r-md bg-[#324153]">
                                    <span className="text-white font-semibold text-sm px-2 py-1 flex flex-col gap-1">
                                        <span className="flex flex-row items-center justify-start text-xs">
                                            <IoCalendar className="inline-block mr-1" color="#BDFF30" />
                                            Partnered with
                                        </span>
                                        {detailedProject?.clients && (
                                          <span className="font-light text-[11px]">
                                            {Object.values(detailedProject.clients)
                                              .map(client => client.name)
                                              .join(', ')}
                                          </span>
                                        )}
                                    </span>
                                  </div>  
                              </div>
                        </div>
                    
                        {/* description */}
                        <p className="font-inter text-white text-md text-[13px] font-light leading-[17px] text-justify hyphens-auto pb-5 pt-2">
                            {detailedProject.fullDesc}
                        </p>
                        
                        {/* members */}
                        <div className="flex flex-col gap-5 w-full">
                            {/* selector */}
                            <div className="flex flex-col gap-2">
                                <div className="md:grid flex flex-col grid-cols-7 gap-2 text-[15px] font-medium font-inter text-white">
                                    <button
                                        onClick={() => setCategory("Core")}
                                        className={`cursor-pointer border md:max-w-full max-w-fit md:px-0.5 px-12 border-[#FDDF37] hover:scale-105 transition duration-200 ease-in-out rounded-full py-0.5 col-span-2
                                        ${category === "Core"
                                            ? "bg-transparent text-white"
                                            : "bg-[#FDDF37] text-[#0E2558]"}`}>
                                        Core
                                    </button>
                                    <button
                                        onClick={() => setCategory("Developer")}
                                        className={`cursor-pointer border border-[#F530FD] px-3 md:px-2 max-w-fit md:max-w-none hover:scale-105 transition duration-200 p-0.5 rounded-full whitespace-nowrap col-span-4
                                        ${category === "Developer"
                                            ? "bg-transparent text-white"
                                            : "bg-[#F530FD] text-[#FDDF37]"}`}>
                                        Front-End Developers
                                    </button>
                                    <span className="md:block hidden col-span-1 border border-[#F530FD] bg-[#F530FD] rounded-full"></span>
                                </div>
                                <div className="md:grid flex flex-col grid-cols-7 gap-2 text-[15px] font-medium font-inter text-white">
                                    <span className="md:block hidden col-span-1 border border-[#BDFF30] bg-[#BDFF30] rounded-full"></span>
                                    <button
                                        onClick={() => setCategory("Back-end")}
                                        className={`cursor-pointer border border-[#BDFF30] px-3 md:px-2 max-w-fit md:max-w-none hover:scale-105 transition duration-200 ease-in-out p-0.5 rounded-full whitespace-nowrap col-span-4
                                        ${category === "Back-end"
                                            ? "bg-transparent text-white"
                                            : "bg-[#BDFF30] text-black"}`}>
                                        Back-End Developers
                                    </button>
                                    <button
                                        onClick={() => setCategory("Designer")}
                                        className={`cursor-pointer border border-[#FEFFFE]  md:max-w-full max-w-fit md:px-0.5 px-12 hover:scale-105 transition duration-200 ease-in-out rounded-full p-0.5 col-span-2 italic
                                        ${category === "Designer"
                                            ? "bg-transparent text-white"
                                            : "bg-[#FEFFFE] text-[#F530FD]"}`}>
                                        UI/UX
                                    </button>
                                </div>
                            </div>
                            {/* list */}
                            <div className="flex flex-col justify-start items-start gap-2 w-full">
                              {detailedProject.collaboratorsByRole?.[category]?.members?.map((member, index) => (
                                <div key={`member-${index}`} className="flex flex-col items-start">
                                  <span className="text-white font-medium">{member.name}</span>
                                </div>
                              ))}

                              {detailedProject.collaboratorsByRole?.[category]?.organizations?.map((org, index) => (
                                <div key={`org-${index}`} className="flex flex-col items-start">
                                  <span className="text-white font-medium">{org.name}</span>
                                </div>
                              ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsModal;
