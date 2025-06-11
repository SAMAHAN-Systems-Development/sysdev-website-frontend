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
}

export default function ProjectCard({ project, setOpenedProjectId }: ProjectCardProps) {
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
        }, []);


    return (
        <div
            className="z-40 overflow-hidden w-full max-w-sm mx-auto cursor-pointer transition-all duration-300 ease-in-out rounded-2xl hover:shadow-2xl transform hover:-translate-y-1"
            onClick={() => setOpenedProjectId(project.id)}
        >
            {/* wrapper for img padding */}
            <div className="p-2 flex justify-center">
                {/* project image */}
                <div className="relative h-48 sm:h-52 md:h-56 w-full max-w-80 sm:max-w-none rounded-xl overflow-hidden">
                    <Image src={"/images/PlaceholderImage.png"} alt={project.title} fill className="object-cover" />
                </div>
            </div>

            {/* card content */}
            <div className="flex justify-center">
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 w-full max-w-80 sm:max-w-none">
                {/* title */}
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4 text-center leading-tight h-12 sm:h-14 md:h-16 flex items-center justify-center line-clamp-2">
                    {truncate(project.title, 45)}
                </div>

                {/* client */}
                <div className="flex items-center mb-2 sm:mb-3">
                    <FaUser className="w-3 h-3 sm:w-4 sm:h-4 text-green mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800 font-medium truncate">
                        {clients && Object.values(clients).map(c => c.name).join(', ')}
                    </span>
                </div>

                {/* deployment date */}
                <div className="flex items-center mb-4 sm:mb-6">
                    <IoCalendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue1 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-800">
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
