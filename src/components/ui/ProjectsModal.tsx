"use client"

import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FaCircleXmark } from "react-icons/fa6";
import { Project } from "@/lib/types/projects";

type ProjectsModalProps = {
  project: Project;
  setOpenedProject: (project: Project | null) => void;
};

const ProjectsModal: React.FC<ProjectsModalProps> = ({ project, setOpenedProject }) => {

    const [category, setCategory] = React.useState<string>("core");

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-blue3/50 z-10">
            <div className="w-[420px] overflow-scroll py-15 z-50">

                {/* white portion */}
                <div className="relative bg-white rounded-t-md h-9 w-full">
                    <button 
                        onClick={() => setOpenedProject(null)}
                        className="absolute top-0 bottom-0 right-3 cursor-pointer hover:scale-105 transition duration-200 ease-in-out">
                        <FaCircleXmark color="#292D32" size={20} />
                    </button>
                </div>

                {/* blue portion */}
                <div className="bg-[#0E2558] rounded-b-md h-full w-full p-8 flex flex-col gap-5 items-center justify-start">

                    {/* carousel */}
                    <div className="w-full h-40 bg-[#9daac5] rounded-lg flex justify-center items-center">
                        Carousel Placeholder
                    </div>

                    <div className="p-1 flex flex-col gap-5 items-center justify-start w-full">

                        {/* project name and links */}
                        <div className="flex flex-row gap-3 w-full items-center justify-between mt-3">
                            <div
                                className={`border-[2px] w-fit border-[#BDFF30] ${
                                    project.projectName.length > 30 ? 'rounded-2xl' : 'rounded-full'
                                }`}
                                >
                                <span className={`font-inter text-[#FDDF37] py-1 flex justify-start font-extrabold text-[15px] leading-tight break-words ${
                                    project.projectName.length > 30 ? 'px-3' : 'px-2'
                                }`}>
                                    {project.projectName}
                                </span>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <button onClick={() => window.open(project.githubUrl, "_blank")} className="text-gray-600 transition hover:scale-105">
                                    <FaGithub size={25} color="white" className="cursor-pointer" />
                                </button>
                                <button onClick={() => window.open(project.websiteUrl, "_blank")} className="text-gray-600 bg-[#FDDF37] rounded-lg hover:scale-105 transition">   
                                    <MdArrowOutward size={25} color="#0E2558" className="cursor-pointer" />
                                </button>
                            </div>
                        </div>

                        {/* launch date / partnered with */}
                        <div className="flex flex-row justify-between w-full">
                            <div className="flex h-18 flex-row items-center">
                                <div className="w-2 h-full rounded-l-md bg-[#FDDF37]"></div>
                                <div className="w-[155px] h-full flex flex-col gap-1 p-2 rounded-r-md bg-[#324153]">
                                    <span className="text-white font-semibold text-sm px-2 py-1 flex flex-col gap-1">
                                        <span className="flex flex-row items-center justify-start text-xs">
                                            <IoCalendar className="inline-block mr-1" color="#BDFF30" />
                                            Launch Date
                                        </span>
                                        <span className="font-light text-[11px]">
                                            {`${project.deploymentMonth} ${project.deploymentYear}`}
                                        </span>
                                    </span>
                                </div>  
                            </div>
                            <div className="flex h-18 flex-row items-center">
                                <div className="w-2 h-full rounded-l-md bg-[#FDDF37]"></div>
                                <div className="w-[155px] h-full flex flex-col gap-1 p-2 rounded-r-md bg-[#324153]">
                                    <span className="text-white font-semibold text-sm px-2 py-1 flex flex-col gap-1">
                                        <span className="flex flex-row items-center justify-start text-xs">
                                            <IoCalendar className="inline-block mr-1" color="#BDFF30" />
                                            Partnered with
                                        </span>
                                        <span className="font-light text-[11px]">
                                            {project.clientName}
                                        </span>
                                    </span>
                                </div>  
                            </div>
                        </div>
                    
                        {/* description */}
                        <p className="font-inter text-white text-md text-[13px] font-light leading-[17px] text-justify hyphens-auto pb-5 pt-2">
                            {project.description}
                        </p>
                        
                        {/* members */}
                        <div className="flex flex-col gap-5 w-full">
                            {/* selector */}
                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-7 gap-2 text-[15px] font-medium font-inter text-white">
                                    <button
                                        onClick={() => setCategory("core")}
                                        className={`cursor-pointer border border-[#FDDF37] hover:scale-105 transition duration-200 ease-in-out rounded-full p-0.5 col-span-2
                                        ${category === "core"
                                            ? "bg-transparent text-white"
                                            : "bg-[#FDDF37] text-[#0E2558]"}`}>
                                        Core
                                    </button>
                                    <button
                                        onClick={() => setCategory("frontend")}
                                        className={`cursor-pointer border border-[#F530FD] hover:scale-105 transition duration-200 p-0.5 px-2 rounded-full whitespace-nowrap col-span-4
                                        ${category === "frontend"
                                            ? "bg-transparent text-white"
                                            : "bg-[#F530FD] text-[#FDDF37]"}`}>
                                        Front-End Developer
                                    </button>
                                    <span className="col-span-1 border border-[#F530FD] bg-[#F530FD] rounded-full"></span>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-[15px] font-medium font-inter text-white">
                                    <span className="col-span-1 border border-[#BDFF30] bg-[#BDFF30] rounded-full"></span>
                                    <button
                                        onClick={() => setCategory("backend")}
                                        className={`cursor-pointer border border-[#BDFF30] hover:scale-105 transition duration-200 ease-in-out p-0.5 px-1 rounded-full whitespace-nowrap col-span-4
                                        ${category === "backend"
                                            ? "bg-transparent text-white"
                                            : "bg-[#BDFF30] text-black"}`}>
                                        Backend-End Developers
                                    </button>
                                    <button
                                        onClick={() => setCategory("uiux")}
                                        className={`cursor-pointer border border-[#FEFFFE] hover:scale-105 transition duration-200 ease-in-out rounded-full p-0.5 col-span-2 italic
                                        ${category === "uiux"
                                            ? "bg-transparent text-white"
                                            : "bg-[#FEFFFE] text-[#F530FD]"}`}>
                                        UI/UX
                                    </button>
                                </div>
                            </div>
                            {/* list */}
                            <div className="flex flex-col justify-start items-start gap-2 w-full">
                                {project.members?.map((member, index) =>
                                    category.toLowerCase() === member.category.toLowerCase() ? (
                                        <div key={index} className="flex flex-col items-start">
                                            <span className="text-white font-medium">{member.name}</span>
                                            {member.title && <span className="text-gray-400 text-sm">{member.title}</span>}
                                        </div>
                                    ) : null
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsModal;