"use client"

import Image from "next/image"
import { IoCalendar } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import type { Client, Project } from "@/lib/features/projects/types/projects"
import { GetProjectById } from '@/lib/features/projects/service/GetProjectById.api';
import { useEffect, useState } from "react"

interface ProjectCardProps {
    project: Project
    setOpenedProjectId: (projectId: number | null) => void;
    smallVersion?: boolean;
}

export default function ProjectCard({ project, setOpenedProjectId, smallVersion }: ProjectCardProps) {
    function truncate(str: string, n: number) {
        return str.length > n ? str.slice(0, n) + "..." : str
    }

    const [clients, setClients] = useState<Client[]>();

    useEffect(() => {
        async function fetchData() {
            const res = await GetProjectById(project.id);
            if (res && res.clients) {
            const clientsArray = Object.values(res.clients);
            setClients(clientsArray);
            }
        }
        fetchData();
        }, [project.id]);


    return (
        <div
            className="z-40 overflow-hidden w-full max-w-sm mx-auto cursor-pointer transition-all duration-300 ease-in-out rounded-2xl hover:shadow-2xl transform hover:-translate-y-1"
            onClick={() => setOpenedProjectId(project.id)}
        >
            {/* wrapper for img padding */}
            <div className="p-2 flex justify-center">
                {/* project image */}
                <div className={`${!smallVersion ? "sm:h-52 md:h-56 sm:max-w-none h-48 max-w-80" : "h-30 max-w-56"} relative w-full rounded-xl overflow-hidden`}>
                    <Image src={"/images/PlaceholderImage.png"} alt={project.title} fill className="object-cover" />
                </div>
            </div>

            {/* card content */}
            <div className="flex justify-center">
                <div className={`px-4 ${!smallVersion ? "sm:px-6 pb-4 sm:pb-6 sm:max-w-none max-w-80 pt-2" : "max-w-56"}  w-full`}>
                    {/* title */}
                    <div className={` ${!smallVersion ? "sm:text-xl md:text-2xl sm:mb-4 sm:h-14 md:h-16 h-12 mb-3 text-lg" : "h-10 mb-2 text-base"} font-bold text-black text-center leading-tight flex items-center justify-center line-clamp-2`}>
                        {truncate(project.title, 45)}
                    </div>

                    {/* client */}
                    <div className={`flex items-center  ${!smallVersion ? "sm:mb-3 mb-2" : "mb-1.5"}`}>
                        <FaUser className={`w-3 h-3 ${!smallVersion ? "sm:w-4 sm:h-4 sm:mr-3" : ""}  text-green mr-2 flex-shrink-0`} />
                        <span className={` ${!smallVersion ? "text-sm sm:text-base" : "text-xs lg:text-sm"} text-gray-800 font-medium truncate`}>
                            {clients && Object.values(clients).map(c => c.name).join(', ')}
                        </span>
                    </div>

                    {/* deployment date */}
                    <div className={`flex items-center mb-4 ${!smallVersion ? "sm:mb-6" : ""}`}>
                        <IoCalendar className={`w-3 h-3 ${!smallVersion ? "sm:w-4 sm:h-4 sm:mr-3" : ""}  text-blue1 mr-2 flex-shrink-0`} />
                        <span className={` ${!smallVersion ? "text-sm sm:text-base" : "text-xs lg:text-sm"} text-gray-800`}>
                            {new Date(project.dateLaunched).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
