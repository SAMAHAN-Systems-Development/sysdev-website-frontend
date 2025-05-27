import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoCalendar } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import projectsData from '@/data/projects.json';

interface Project {
    imageUrl: string;
    projectName: string;
    websiteUrl: string;
    githubUrl: string;
    clientName: string;
    deploymentMonth: string;
    deploymentYear: number;
}

interface SingleProjectCardProps {
    project: Project;
}

function SingleProjectCard({ project }: SingleProjectCardProps) {
    const {
        imageUrl,
        projectName,
        websiteUrl,
        githubUrl,
        clientName,
        deploymentMonth,
        deploymentYear,
    } = project;

    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-sm mx-auto transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-1">
            {/* wrapper for img padding */}
            <div className="p-2">
                {/* project image */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                    <Image src={imageUrl || "/placeholder.svg"} alt={projectName} fill className="object-cover" />
                </div>
            </div>

            {/* card content */}
            <div className="p-6">
                {/* title */}
                <h2 className="text-2xl font-bold text-black mb-4 text-center leading-tight">{projectName}</h2>

                {/* client */}
                <div className="flex items-center mb-3">
                    <FaUser className="w-4 h-4 text-green mr-3" />
                    <span className="text-gray-800 font-medium">{clientName}</span>
                </div>

                {/* deployment date */}
                <div className="flex items-center mb-6">
                    <IoCalendar className="w-4 h-4 text-blue1 mr-3" />
                    <span className="text-gray-800">
                        {deploymentMonth} {deploymentYear}
                    </span>
                </div>

                {/* actions */}
                <div className="flex gap-3">
                    <Link
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                        <FaGithub className="w-5 h-5 text-white" />
                    </Link>
                    <Link
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-yellow3 rounded-full flex items-center justify-center hover:bg-yellow1 transition-colors"
                    >
                        <MdArrowOutward className="w-5 h-5 text-white" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

// component to render all project cards
export default function ProjectCardList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-4 mx-auto w-fit">
            {projectsData.map((projectItem, index) => (
                <SingleProjectCard
                    key={index}
                    project={projectItem as Project}
                />
            ))}
        </div>
    );
}