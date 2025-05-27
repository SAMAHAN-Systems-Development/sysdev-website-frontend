'use client'

import Image from "next/image";
import { IoCalendar } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
// import projectsData from '@/data/projects.json';
import { Project } from "@/lib/types/projects";

interface ProjectCardProps {
    project: Project;
    setOpenedProject: (project: Project) => void;
}

export default function ProjectCard({ project, setOpenedProject }: ProjectCardProps) {

    function truncate(str: string, n: number) {
        return str.length > n ? str.slice(0, n) + "..." : str;
    }

    return (
        <div className=" overflow-hidden w-full max-w-sm mx-auto cursor-pointer transition-all duration-300 ease-in-out rounded-2xl hover:shadow-2xl transform hover:-translate-y-1" onClick={() => setOpenedProject && setOpenedProject(project)}>
            {/* wrapper for img padding */}
            <div className="p-2">
                {/* project image */}
                <div className="relative h-56 w-full rounded-xl overflow-hidden">
                    <Image src={project.imageUrl || "/placeholder.svg"} alt={project.projectName} fill className="object-cover" />
                </div>
            </div>

            {/* card content */}
            <div className="px-6 pb-6 pt-2">
                {/* title */}
                <div className="text-2xl font-bold text-black mb-4 text-center leading-tight h-16 flex items-center justify-center line-clamp-2">{truncate(project.projectName, 45)}</div>
                

                {/* client */}
                <div className="flex items-center mb-3">
                    <FaUser className="w-4 h-4 text-green mr-3" />
                    <span className="text-gray-800 font-medium">{project.clientName}</span>
                </div>

                {/* deployment date */}
                <div className="flex items-center mb-6">
                    <IoCalendar className="w-4 h-4 text-blue1 mr-3" />
                    <span className="text-gray-800">
                        {project.deploymentMonth} {project.deploymentYear}
                    </span>
                </div>
            </div>
        </div>
    );
}

// component to render all project cards
// export default function ProjectCardList() {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-4 mx-auto w-fit">
//             {projectsData.map((projectItem, index) => (
//                 <SingleProjectCard
//                     key={index}
//                     project={projectItem as Project}
//                 />
//             ))}
//         </div>
//     );
// }